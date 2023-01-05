<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let name: String;
  export let amount: number;
  export let price: number;
  export let id: string;

  const sendDetails = (e: Event, id: string) => {
    dispatch('get', { event: (e.target as HTMLInputElement).innerText, id });
  };
</script>

<li>
  <div>
    <h4>{name}</h4>
    <div>
      <span>{(amount * price).toFixed(2)} $</span>
      <span>{amount}X</span>
    </div>
  </div>
  <div>
    <button on:click={(e) => sendDetails(e, id)}>+</button>
    <button on:click={(e) => sendDetails(e, id)}>-</button>
  </div>
</li>

<style>
  li {
    width: 100%;
    padding-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d0d1d3;
  }

  li > div:first-child {
    width: 50%;
  }

  h4 {
    text-align: left;
  }

  h4 + div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 8px;
  }

  li > div:last-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 16px;
  }

  button {
    width: 32px;
    height: 32px;
    background-color: #fff;
    outline: none;
    border: 1px solid #000;
    font-size: 16px;
  }

  button:hover {
    border: 2px solid #000;
    opacity: 0.8;
  }
</style>
