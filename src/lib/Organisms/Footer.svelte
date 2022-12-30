<script lang="ts">
  import Container from '../Atoms/Container.svelte';
</script>

<Container classname="footer">
  <nav>
    <ul class="links">
      <li>About</li>
      <li>Imprint</li>
      <li>Terms & Conditions</li>
      <li>Data settings</li>
    </ul>
  </nav>
  <div>
    Find more inspiration:
    <ul class="social-media">
      <li><img src="/images/facebook.png" alt="facebook icon" /></li>
      <li><img src="/images/spotify.png" alt="spotify icon" /></li>
      <li><img src="/images/instagram.png" alt="instagram icon" /></li>
      <li><img src="/images/youtube.png" alt="youtube icon" /></li>
      <li><img src="/images/twitter.png" alt="twitter icon" /></li>
    </ul>
  </div>
</Container>

<style>
  nav {
    width: 100%;
    padding: 8px 0px;
  }

  .links {
    display: flex;
    gap: 8px;
    align-items: flex-start;
    flex-wrap: wrap;
    color: #fff;
    padding: 0px;
  }

  li {
    list-style: none;
    padding-right: 8px;
    border-right: 2px solid #fff;
  }

  li:last-child {
    border-right: none;
  }

  div {
    text-align: left;
    padding: 24px 0px;
  }

  .social-media {
    display: flex;
    gap: 8px;
    padding: 0px;
    padding-bottom: 24px;
  }

  .social-media li {
    background-color: #fff;
    padding: 8px;
  }

  .social-media img {
    height: 24px;
    width: 24px;
    display: flex;
  }

  @media (max-width: 768px) {
    div {
      text-align: center;
    }
  }
</style>
