<script lang="ts">
  import i18n from '../../store/i18next-store';

  let languages: { id: number; text: string }[] = [
    { id: 1, text: 'en' },
    { id: 2, text: 'de' },
  ];
  let selected: string;

  const changeLanguage: () => void = () => {
    $i18n.changeLanguage(selected);
  };
</script>

<select bind:value={selected} on:change={changeLanguage}>
  {#each languages as { id, text } (id)}
    <option value={text} selected={$i18n.resolvedLanguage === text}>
      {$i18n.t(`${text}`)}
    </option>
  {/each}
</select>

<style>
  select {
    background-color: #fff;
    border: 1px solid #d0d1d3;
  }
</style>
