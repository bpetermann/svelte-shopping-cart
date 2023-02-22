<script lang="ts">
  import { fade, slide } from 'svelte/transition';

  export let time: number;
  export let classname: string;
</script>

<div on:click on:keypress transition:fade={{ duration: time }} />
<section
  in:slide={{ duration: time }}
  out:fade={{ duration: time }}
  class={classname}
>
  <slot />
</section>

<style>
  div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }

  section {
    position: fixed;
    text-align: center;
    left: 30%;
    top: 25%;
    width: 40%;
    background-color: #fff;
    overflow: scroll;
    z-index: 10;
  }

  .favorites {
    overflow-y: scroll;
    overflow-x: hidden;
    top: 5%;
    bottom: 10%;
    left: 30%;
    width: 40%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    section {
      left: 5%;
      width: 90%;
    }

    .favorites {
      left: 5%;
      width: 90%;
    }
  }
</style>
