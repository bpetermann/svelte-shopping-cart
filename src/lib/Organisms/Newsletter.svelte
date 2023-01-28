<script lang="ts">
  import NewsletterForm from '../Molecules/Newsletter/NewsletterForm.svelte';
  import Toast from '../Molecules/Newsletter/Toast.svelte';
  import { validEmail } from '../../helpers/validation';
  import Container from '../Atoms/Container.svelte';
  import i18n from '../../store/i18next-store';
  import Heading from '../Atoms/Heading.svelte';
  import Text from '../Atoms/Text.svelte';

  let email: string = '';
  let interestedIn: string = 'wfashion';
  let showToast: boolean = false;

  $: success = validEmail(email);

  const interestSelect = ({ detail }: { detail: string }) => {
    interestedIn = detail;
  };

  const addNewsletter: () => void = () => {
    showToast = true;
  };

  const close: () => void = () => {
    showToast = false;
    (email = ''), (interestedIn = 'wfashion');
  };
</script>

<Container classname={'newsletter'}>
  <div>
    <Heading tag="h3" color="#000">{$i18n.t('JOIN OUR NEWSLETTER!')}</Heading>
    <Text size="lg">{$i18n.t('Keep up to date')}</Text>
  </div>
  <NewsletterForm
    on:subscribe={addNewsletter}
    on:change={interestSelect}
    bind:value={email}
    {interestedIn}
  />
</Container>
{#if showToast}
  <Toast on:close={close} {success}>
    {$i18n.t(`${success ? 'Email was added' : 'Invalid input'}`)}
  </Toast>
{/if}

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    div {
      align-items: center;
      padding: 32px 0px;
    }
  }
</style>
