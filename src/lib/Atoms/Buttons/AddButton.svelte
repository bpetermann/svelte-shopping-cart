<script lang="ts">
  import Spinner from '../Spinner.svelte';

  export let style: string;
</script>

<button on:click class={style}
  ><p>
    {#if style.includes('loading')}
      <Spinner />
    {:else}
      Add to Cart
    {/if}
  </p></button
>

<style>
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 1px solid #000;
    cursor: pointer;
    font-size: 16px;
    outline: none;
    width: 126px;
    height: 52px;
  }

  .added {
    background-color: #00875a;
    border-color: #00875a;
    color: #fff;
  }
</style>
