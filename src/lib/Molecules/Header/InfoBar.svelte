<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Container from '../../Atoms/Container.svelte';
  import Text from '../../Atoms/Text.svelte';
  const dispatch = createEventDispatcher();
</script>

<Container classname={'infobar'}>
  <Text color={'#fff'}>FREE SHIPPING AND RETURNS</Text>
  <button on:click={() => dispatch('close')}>
    <img src="/images/close.png" alt="close" />
  </button>
</Container>

<style>
  button {
    all: unset;
    cursor: pointer;
    height: 18px;
    margin-left: 8px;
  }

  img {
    height: 100%;
    width: auto;
    filter: invert(95%) sepia(0%) saturate(7500%) hue-rotate(26deg)
      brightness(107%) contrast(108%);
  }
</style>
