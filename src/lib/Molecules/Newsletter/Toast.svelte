<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  import Close from '@/lib/Atoms/Buttons/Close.svelte';
  import { backInOut, cubicOut } from 'svelte/easing';
  import { fly, fade } from 'svelte/transition';
  import { tweened } from 'svelte/motion';

  export let success: boolean;

  let progress = tweened(0, {
    duration: 4000,
    easing: cubicOut,
  });

  const dispatch = createEventDispatcher();
  $: if ($progress === 1) dispatch('close');

  onMount(() => {
    progress.set(1);
  });
</script>

<div
  class="toast"
  in:fly={{ duration: 400, easing: backInOut, x: 300, y: 0 }}
  out:fade={{ duration: 200 }}
  class:success
>
  <div>
    <Close on:click={() => dispatch('close')} />
  </div>
  <div>
    <img src="/images/{success ? 'done' : 'error'}.png" alt="close" />
    <slot />
  </div>
  <div>
    <div class="inner" style="width: {$progress * 100}%" />
  </div>
</div>

<style>
  .toast {
    position: fixed;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    color: #efeff0;
    top: 25%;
    left: 35%;
    width: 30%;
    border-radius: 5px;
    background-color: red;
    overflow: scroll;
    z-index: 10;
    overflow: hidden;
  }

  .success {
    background-color: #00875a;
  }

  .toast > div:first-of-type {
    display: flex;
    justify-content: flex-end;
    padding: 8px;
  }

  .toast > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    height: 24px;
    margin-bottom: 18px;
  }

  img {
    height: 100%;
    filter: invert(95%) sepia(0%) saturate(7500%) hue-rotate(26deg)
      brightness(107%) contrast(108%);
  }

  .inner,
  .toast > div:last-child {
    height: 16px;
    border-radius: 0px 5px 5px 5px;
  }

  .toast > div:last-child {
    width: 100%;
    background-color: transparent;
    margin-bottom: -1px;
  }

  .inner {
    width: 40%;
    background-color: #efeff0;
  }

  @media (max-width: 768px) {
    .toast {
      left: 10%;
      width: 80%;
    }
  }

  @media (max-width: 384px) {
    .toast {
      left: 5%;
      width: 90%;
    }
  }
</style>
