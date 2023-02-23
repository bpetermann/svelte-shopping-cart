<script lang="ts">
  import Close from '@/lib/Atoms/Buttons/Close.svelte';
  import Container from '@/lib/Atoms/Container.svelte';
  import Text from '@/lib/Atoms/Text.svelte';
  import i18n from '@/store/i18next-store';

  let showInfo: boolean = true;

  const closeInfo: () => void = () => {
    showInfo = !showInfo;
  };
</script>

{#if showInfo}
  <Container classname={'infobar'}>
    <Text color={'#fff'}>{$i18n.t('FREE SHIPPING AND RETURNS')}</Text>
    <Close on:click={closeInfo} />
  </Container>
{/if}
