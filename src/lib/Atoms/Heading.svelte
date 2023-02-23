<script lang="ts">
  export let tag: string = 'h1';
  export let color: string = `#fff`;
</script>

{#if tag === 'h1'}
  <h1 style="--color:{color}">
    <slot />
  </h1>
{:else if tag === 'h2'}
  <h2 style="--color:{color}">
    <slot />
  </h2>
{:else if tag === 'h3'}
  <h3 style="--color:{color}">
    <slot />
  </h3>
{/if}

<style>
  h1 {
    color: var(--color);
    font-size: 32px;
  }

  h3 {
    color: var(--color);
    font-size: 22px;
    margin: 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 28px;
    }
    h3 {
      font-size: 18px;
    }
  }
</style>
