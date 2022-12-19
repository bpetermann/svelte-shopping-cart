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

  .searchbar {
    display: none;
  }

  .searchbar > div:first-child {
    padding: 0px;
  }

  .navbar {
    padding: 8px 0px;
    text-align: center;
  }

  .infobar {
    background-color: #3e1062;
  }

  .infobar > div:first-child {
    justify-content: center;
  }

  .hero {
    background-color: #bf0f6a;
    padding-top: 48px;
  }

  .hero > div:first-child {
    align-items: flex-start;
    gap: 32px;

  }

  @media (max-width: 768px) {
    div {
      border-bottom: 1px solid #d0d1d3;
    }

    .searchbar {
      display: flex;
    }

    .infobar {
      display: none;
    }

    .hero > div:first-child {
      align-items: center;
      flex-direction: column;
      padding: 0px;
    }
  }
</style>
