<div on:click on:keypress />
<section>
  <slot />
</section>

<style>
  div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

  section {
    position: fixed;
    text-align: center;
    left: 30%;
    top: 25%;
    width: 40%;
    background-color: #fff;
    overflow: scroll;
    z-index: 10;
  }

  @media (max-width: 768px) {
    section {
      left: 5%;
      width: 90%;
    }
  }
</style>
