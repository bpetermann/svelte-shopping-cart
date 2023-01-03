<script lang="ts">
  import Container from '../Atoms/Container.svelte';

  let pageLinks: string[] = [
    'About',
    'Imprint',
    'Terms & Conditions',
    'Data settings',
  ];

  let socialMediaLinks: string[] = [
    'facebook',
    'spotify',
    'instagram',
    'youtube',
    'twitter',
  ];
</script>

<footer>
  <Container classname="footer">
    <nav class="page-links">
      <ul>
        {#each pageLinks as pageLink, index (index)}
          <li>
            {pageLink}
          </li>
        {/each}
      </ul>
    </nav>
    <nav class="social-media">
      Find more inspiration:
      <ul>
        {#each socialMediaLinks as socialMediaLink, index (index)}
          <li>
            <img
              src={`/images/${socialMediaLink}.png`}
              alt={`${socialMediaLink} icon`}
            />
          </li>
        {/each}
      </ul>
    </nav>
  </Container>
</footer>

<style>
  nav {
    width: 100%;
    padding: 8px 0px;
  }

  .page-links > ul {
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

  .social-media {
    all: unset;
    text-align: left;
    padding: 24px 0px;
  }

  .social-media > ul {
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
    .social-media {
      text-align: center;
    }
  }
</style>
