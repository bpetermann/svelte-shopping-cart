<script lang="ts">
  import Template from '@/lib/Template/Index.svelte';

  let innerWidth: number = 0;
</script>

<svelte:window bind:innerWidth />
<Template {innerWidth} />
