<script lang="ts">
  export let classname: string = 'light';
</script>

<button on:click>
  <img src="/images/close.png" alt="close" class={classname} />
</button>

<style>
  button {
    all: unset;
    cursor: pointer;
    height: 18px;
    margin-left: 8px;
  }

  img {
    height: 100%;
    width: auto;
  }

  .light {
    filter: invert(95%) sepia(0%) saturate(7500%) hue-rotate(26deg)
      brightness(107%) contrast(108%);
  }

  .dark {
    filter: none;
  }
</style>
