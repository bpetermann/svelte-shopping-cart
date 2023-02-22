<script lang="ts">
  import i18n from '@/store/i18next-store';

  export let value: String = '';
  export let classname: string;
  export let marker: string = 'Search';
</script>

<input
  type="text"
  class={classname}
  bind:value
  placeholder={$i18n.t(`${marker}`)}
/>

<style>
  input {
    width: 100%;
    outline: none;
    border: none;
    text-align: start;
    font-size: 16px;
  }

  .search {
    padding-left: 16px;
  }

  .primary {
    margin-bottom: 16px;
    padding: 12px 0px;
    text-align: center;
    border: 1px solid #d0d1d3;
  }

  .primary:hover,
  .primary:focus,
  .primary:active {
    outline: 1.6px solid #1a1a1a;
    transition: 40ms outline ease-in-out;
  }
</style>
