<script>
  import svelteLogo from '../../assets/svelte.svg';
</script>

<section>
  <div>
    <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
  </div>
  <a href="/"> shopping cart </a>
</section>

<style>
  section {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  img {
    width: 100%;
  }

  a {
    all: unset;
    font-size: 22px;
    font-weight: 700;
    color: #000;
  }
</style>
