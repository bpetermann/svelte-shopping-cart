<script lang="ts">
  import Header from '@/lib/Organisms/Header.svelte';
  import Template from '@/lib/Template/Index.svelte';
  import Footer from '@/lib/Organisms/Footer.svelte';
  let innerWidth: number = 0;
</script>

<svelte:window bind:innerWidth />

<Header {innerWidth} />
<Template />
<Footer />
