<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Input from '../Atoms/Input.svelte';
  import Text from '../Atoms/Text.svelte';
  import Button from '../Atoms/Button.svelte';

  const dispatch = createEventDispatcher();
  export let email: string;
  export let interestedIn: string;

  const emailInput = (event: Event) => {
    dispatch('input', (event.target as HTMLInputElement).value);
  };

  const interestedInput = (event: Event) => {
    dispatch('change', (event.target as HTMLInputElement).value);
  };
</script>

<form>
  <Input
    classname={'default'}
    marker={'Your Email'}
    on:input={emailInput}
    value={email}
  />
  <Text size="lg">I'm mostly interested in</Text>
  <div>
    <input
      checked={interestedIn === 'wfashion'}
      type="radio"
      name="interest"
      value="wfashion"
      on:change={interestedInput}
    />
    <label for="mfashion">Women's Fashion</label>
  </div>
  <div>
    <input
      checked={interestedIn === 'mfashion'}
      type="radio"
      name="interest"
      value="mfashion"
      on:change={interestedInput}
    />
    <label for="wfashion">Men's Fashion</label>
  </div>
  <Button>Add my Email</Button>
  <Text size="sm">You can unsubscribe at any time free of charge.</Text>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 16px;
    margin-top: 16px;
    gap: 16px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  input[type='radio'] {
    appearance: none;
    margin-left: 0px;
    width: 18.4px;
    height: 18.4px;
    border: 1px solid #1a1a1a;
    border-radius: 50%;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }

  input[type='radio']:checked {
    border: 2px solid #1a1a1a;
  }

  input[type='radio']::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #1a1a1a;
  }

  input[type='radio']:checked::before {
    transform: scale(1);
  }
</style>
