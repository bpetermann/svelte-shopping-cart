<script lang="ts">
  import Close from '../../Atoms/Buttons/Close.svelte';
  import Container from '../../Atoms/Container.svelte';
  import { createEventDispatcher } from 'svelte';
  import Text from '../../Atoms/Text.svelte';

  const dispatch = createEventDispatcher();
</script>

<Container classname={'infobar'}>
  <Text color={'#fff'}>FREE SHIPPING AND RETURNS</Text>
  <Close on:click={() => dispatch('close')} />
</Container>
