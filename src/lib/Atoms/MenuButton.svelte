<script>
  export let classname = 'desktop';
</script>

<button class={classname} on:click>
  <slot />
</button>

<style>
  button {
    all: unset;
    padding: 6px 8px;
    color: #000;
    cursor: pointer;
    min-width: 64px;
    display: flex;
    justify-content: center;
  }

  .desktop {
    font-weight: 700;
  }

  .desktop:hover {
    background-color: #efeff0;
  }

  /* .desktop:active {
    background-color: #000;
    color: #fff;
  } */

  .mobile {
    padding: 8px 16px;
    color: #666;
    border: 1px solid #d0d1d3;
    border-top: none;
  }

  .mobile:hover {
    color: #000;
    background-color: #d0d1d3;
  }
</style>
