<script lang="ts">
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

  div {
    height: 24px;
    width: 24px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  a {
    all: unset;
    font-size: 22px;
    font-weight: 700;
    color: #000;
  }

  @media (max-width: 768px) {
    a {
      font-size: 18px;
    }
  }
</style>
