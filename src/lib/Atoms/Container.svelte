<script lang="ts">
  export let classname: string = 'navbar';
</script>

<div class={classname}>
  <div>
    <slot />
  </div>
</div>

<style scoped>
  div {
    display: flex;
    justify-content: center;
  }

  div > div:first-child {
    border-bottom: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1216px;
    padding: 0 8px;
  }

  @media (max-width: 768px) {
    div {
      border-bottom: 1px solid #d0d1d3;
    }
  }

  /* Searchbar */
  .searchbar {
    display: none;
  }

  .searchbar > div:first-child {
    padding: 0px;
  }

  @media (max-width: 768px) {
    .searchbar {
      display: flex;
    }
  }

  /* Navbar */
  .navbar {
    padding: 8px 0px;
    text-align: center;
  }

  /* Infobar */
  .infobar {
    background-color: #3e1062;
  }

  .infobar > div:first-child {
    justify-content: center;
  }

  @media (max-width: 768px) {
    .infobar {
      display: none;
    }
  }

  /* Hero */
  .hero {
    background-color: #bf0f6a;
    padding-top: 48px;
    border-bottom: none;
  }

  .hero > div:first-child {
    align-items: flex-start;
    gap: 32px;
  }

  @media (max-width: 768px) {
    .hero > div:first-child {
      flex-direction: column;
      align-items: center;
      padding: 0px;
    }
  }

  /* Products */
  .products {
    background-color: #de97ae;
  }

  /* Newsletter */
  .newsletter {
    background-color: #efeff0;
    margin-bottom: 64px;
    border-bottom: none;
  }

  @media (max-width: 768px) {
    .newsletter > div:first-child {
      flex-direction: column;
    }
  }
</style>
