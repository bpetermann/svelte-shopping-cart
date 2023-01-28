<script lang="ts">
  import i18n from '../../../store/i18next-store';
  import Text from '../../Atoms/Text.svelte';
  import { slide } from 'svelte/transition';

  export let icon: string;
  export let question: string;
  export let answer: string;
  let open: boolean = false;

  const toggleOpen: () => boolean = () => (open = !open);
</script>

<li class:isOpen={open}>
  <div>
    <div class="question">
      <img src="/images/{icon}.png" alt="{icon} icon" />
      <Text size="lg">{$i18n.t(`${question}`)}</Text>
    </div>
    <button on:click={toggleOpen}>
      <img src="/images/expand.png" alt="Arrow icon" /></button
    >
  </div>
  {#if open}
    <div transition:slide>
      <Text size="md">{$i18n.t(`${answer}`)}</Text>
    </div>
  {/if}
</li>

<style>
  li {
    list-style: none;
    box-sizing: border-box;
    width: 100%;
    border-bottom: 1px solid #d0d1d3;
    padding: 0px 32px;
  }

  li > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0px;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  button img {
    height: 24px;
    width: 24px;
    transition: all 0.2s ease-in-out;
    transform: rotate(0deg);
  }

  .question {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .question img {
    height: 24px;
    width: 24px;
  }

  div + div {
    padding: 8px 0px;
  }

  .isOpen {
    border-bottom: none;
    transition: all 0.2s ease-in-out;
  }

  .isOpen img:last-child {
    transition: all 0.2s ease-in-out;
    transform: rotate(180deg);
  }
</style>
