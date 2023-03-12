<script lang="ts">
  export let checked: boolean;
  export let name: string;
  export let value: string;
</script>

<div>
  <input {checked} type="radio" {name} {value} id={value} on:change />
  <label for={value}><slot /></label>
</div>

<style>
  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  input[type='radio'] {
    flex-shrink: 0;
    appearance: none;
    margin-left: 0px;
    width: 18.4px;
    height: 18.4px;
    border: 1px solid #1a1a1a;
    border-radius: 50%;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }

  input[type='radio']:checked {
    border: 2px solid #1a1a1a;
  }

  input[type='radio']::before {
    content: '';
    width: 10.4px;
    height: 10.4px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #1a1a1a;
  }

  input[type='radio']:checked::before {
    transform: scale(1);
  }
</style>
