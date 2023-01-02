<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Input from '../Atoms/Input.svelte';
  import Text from '../Atoms/Text.svelte';
  import Button from '../Atoms/Buttons/Button.svelte';
  import Radio from '../Atoms/Buttons/Radio.svelte';

  const dispatch = createEventDispatcher();
  export let value: string;
  export let interestedIn: string;
  let interestedOptions: { value: string; text: string; name: string }[] = [
    { value: 'wfashion', text: "Women's Fashion", name: 'interest' },
    { value: 'mfashion', text: "Men's Fashion", name: 'interest' },
  ];

  const interestedInput = (event: Event) => {
    dispatch('change', (event.target as HTMLInputElement).value);
  };
</script>

<form on:submit|preventDefault={() => dispatch('subscribe')}>
  <Input classname={'primary'} marker={'Your Email'} bind:value />
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
  <Button>
    <img src="/images/mail.png" alt="Mail icon" />
    <Text size="lg bold" color="#fff">Add my Email</Text></Button
  >
  <Text size="sm">You can unsubscribe at any time free of charge.</Text>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-sizing: border-box;
    padding: 24px;
    margin-top: 16px;
    gap: 16px;
    width: 100%;
    max-width: 528px;
  }

  img {
    height: 100%;
    max-height: 32px;
    width: auto;
    filter: invert(95%) sepia(0%) saturate(7500%) hue-rotate(26deg)
      brightness(107%) contrast(108%);
  }
</style>
