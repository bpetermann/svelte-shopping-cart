<script lang="ts">
  import Container from '../Atoms/Container.svelte';
  import Heading from '../Atoms/Heading.svelte';
  import Text from '../Atoms/Text.svelte';
  import NewsletterForm from '../Molecules/NewsletterForm.svelte';

  let email: string = '';
  let interestedIn: string = 'mfashion';

  const newsletterInput = ({ detail }: { detail: string }) => {
    email = detail;
  };

  const interestSelect = ({ detail }: { detail: string }) => {
    interestedIn = detail;
  };
</script>

<Container classname={'newsletter'}>
  <div class="info">
    <Heading tag="h3" color="#000">JOIN OUR NEWSLETTER!</Heading>
    <Text size="lg">Keep up to date</Text>
  </div>
  <NewsletterForm
    {email}
    {interestedIn}
    on:input={newsletterInput}
    on:change={interestSelect}
  />
</Container>

<style>
  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>
