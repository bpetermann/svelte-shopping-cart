<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Container from '../../Atoms/Container.svelte';
  import Text from '../../Atoms/Text.svelte';
  import Close from '../../Atoms/Buttons/Close.svelte';

  const dispatch = createEventDispatcher();
</script>

<Container classname={'infobar'}>
  <Text color={'#fff'}>FREE SHIPPING AND RETURNS</Text>
  <Close on:click={() => dispatch('close')} />
</Container>
