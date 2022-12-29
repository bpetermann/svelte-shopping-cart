<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Input from '../Atoms/Input.svelte';
  import Text from '../Atoms/Text.svelte';
  import Button from '../Atoms/Button.svelte';
  import Radio from '../Atoms/Radio.svelte';

  const dispatch = createEventDispatcher();
  export let email: string;
  export let interestedIn: string;
  let interestedOptions: { value: string; text: string; name: string }[] = [
    { value: 'wfashion', text: "Women's Fashion", name: 'interest' },
    { value: 'mfashion', text: "Men's Fashion", name: 'interest' },
  ];

  const emailInput = (event: Event) => {
    dispatch('input', (event.target as HTMLInputElement).value);
  };

  const interestedInput = (event: Event) => {
    dispatch('change', (event.target as HTMLInputElement).value);
  };
</script>

<form on:submit|preventDefault={() => dispatch('subscribe')}>
  <Input
    classname={'default'}
    marker={'Your Email'}
    on:input={emailInput}
    value={email}
  />
  <Text size="lg bold">I'm mostly interested in</Text>

  {#each interestedOptions as { value, text, name } (value)}
    <Radio
      checked={interestedIn === value}
      {name}
      {value}
      on:change={interestedInput}
    >
      {text}</Radio
    >
  {/each}
  <Button>Add my Email</Button>
  <Text size="sm">You can unsubscribe at any time free of charge.</Text>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-sizing: border-box;
    padding: 32px 16px;
    margin-top: 16px;
    gap: 16px;
    width: 100%;
    max-width: 528px;
  }
</style>
