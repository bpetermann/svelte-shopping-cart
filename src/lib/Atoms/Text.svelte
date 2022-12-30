<script lang="ts">
  export let size: string = 'sm bold';
  export let color: string = `#000`;
</script>

<p class={size} style="--color:{color}">
  <slot />
</p>

<style>
  p {
    color: var(--color);
    font-size: 400;
  }

  .sm {
    font-size: 12px;
    margin: 8px 0 8px 0;
  }

  .md {
    font-size: 14px;
    color: #484848;
  }

  .lg {
    font-size: 16px;
  }

  .bold {
    font-weight: 700;
  }
</style>
