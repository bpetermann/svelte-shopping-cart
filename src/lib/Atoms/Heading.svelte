<script lang="ts">
  export let tag: string = 'h2';
  export let color: string = `#fff`;
</script>

{#if tag === 'h2'}
  <h2 style="--color:{color}">
    <slot />
  </h2>
{/if}

<style>
  h2 {
    color: var(--color);
    font-size: 32px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 24px;
    }
  }
</style>
