<script lang="ts">
  import Container from '../Atoms/Container.svelte';
  import FrequentQuestion from '../Molecules/Faqs/FrequentQuestion.svelte';

  let questions: { icon: string; question: string; answer: string }[] = [
    {
      icon: 'mark',
      question: 'Help & Contact',
      answer:
        'When you complete your order, we will show you in what timeframe your package is expected to arrive',
    },
    {
      icon: 'gift',
      question: 'Gift cards',
      answer:
        'You can redeem your promotional voucher in the last step of the order process. Enter the voucher code in the "Vouchers and discount codes" field.',
    },
    {
      icon: 'shipping',
      question: 'Shipping',
      answer:
        'If you are shipping internationally, there are several delivery speed options available during the checkout process, usually standard, express and priority delivery.',
    },
  ];
</script>

<Container classname="faqs">
  <ul>
    {#each questions as { icon, question, answer } (question)}
      <FrequentQuestion {icon} {question} {answer} />
    {/each}
  </ul>
</Container>

<style>
  ul {
    margin: 0;
    padding: 0;
    width: 100%;
  }
</style>
