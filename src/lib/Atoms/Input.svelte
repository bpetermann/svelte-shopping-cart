<script lang="ts">
  export let value: String = '';
  export let classname: string;
  export let marker: string = 'Search';
</script>

<input type="text" class={classname} {value} placeholder={marker} on:input />

<style>
  input {
    width: 100%;
    outline: none;
    border: none;
    text-align: start;
    font-size: 14px;
  }

  .search {
    padding-left: 16px;
  }

  .default {
    padding: 12px 0px;
    text-align: center;
    border: 1px solid #d0d1d3;
  }
</style>
