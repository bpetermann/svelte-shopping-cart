<script lang="ts">
  export let classname: string = 'desktop';
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
    text-align: center;
  }

  .desktop {
    font-weight: 700;
  }

  .desktop:hover {
    background-color: #efeff0;
  }

  .mobile {
    padding: 8px 16px;
    color: #666;
    border: 1px solid #d0d1d3;
    border-top: none;
    font-size: 14px;
  }

  .mobile:hover {
    color: #000;
    background-color: #d0d1d3;
  }

  .active,
  .active:hover {
    background: #000;
    border-color: #000;
    color: #fff;
  }
</style>
