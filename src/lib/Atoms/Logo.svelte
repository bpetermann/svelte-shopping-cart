<script lang="ts">
  import svelteLogo from '../../assets/svelte.svg';
  import Heading from './Heading.svelte';
</script>

<section>
  <div>
    <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
  </div>
  <Heading tag="h3" color="#000">shopping cart</Heading>
</section>

<style>
  section {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  div {
    height: 24px;
    width: 24px;
  }

  img {
    width: 100%;
    height: 100%;
  }
</style>
