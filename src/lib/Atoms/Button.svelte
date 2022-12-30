<button on:click>
  <slot />
</button>

<style>
  button {
    all: unset;
    margin-top: 16px;
    padding: 8px;
    color: #fff;
    background-color: #000;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  button:hover {
    opacity: 0.6;
  }
</style>
