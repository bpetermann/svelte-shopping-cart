<script lang="ts">
  export let value: String = 'Search';
</script>

<input type="text" {value} placeholder="Search" on:input />

<style>
  input {
    width: 100%;
    outline: none;
    border: none;
    text-align: start;
    padding-left: 16px;
    font-size: 14px;
  }
</style>
