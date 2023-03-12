<script lang="ts">
</script>

<button on:click aria-label="toggle-navigation">
  <span />
  <span />
  <span />
</button>

<style>
  button {
    width: 48px;
    border: none;
    cursor: pointer;
    background-color: #fff;
    padding-top: 0px;
    padding-bottom: 0px;
    vertical-align: middle;
    border-right: 1px solid #d0d1d3;
  }

  button:focus {
    outline: none;
  }

  span {
    width: 60%;
    height: 1.6px;
    background: #525252;
    display: block;
    margin: 9px 6.4px;
  }

  span:nth-of-type(2) {
    width: 40%;
  }
</style>
