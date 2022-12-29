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

  const addNewsletter = () => {
    console.log(email);
    console.log(interestedIn);
  };
</script>

<Container classname={'newsletter'}>
  <div>
    <Heading tag="h3" color="#000">JOIN OUR NEWSLETTER!</Heading>
    <Text size="lg">Keep up to date</Text>
  </div>
  <NewsletterForm
    {email}
    {interestedIn}
    on:subscribe={addNewsletter}
    on:input={newsletterInput}
    on:change={interestSelect}
  />
</Container>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    div {
      align-items: center;
    }
  }
</style>
