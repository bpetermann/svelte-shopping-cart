<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>

<div
  class="modal-backdrop"
  on:click={() => dispatch('close')}
  on:keypress={() => dispatch('close')}
/>
<div class="modal">
  <div class="content">
    <slot />
  </div>
</div>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

  .modal {
    position: fixed;
    text-align: center;
    left: 30%;
    top: 25%;
    width: 40%;
    background-color: #fff;
    overflow: scroll;
    z-index: 10;
  }

  @media (max-width: 768px) {
    .modal {
      left: 5%;
      width: 90%;
    }
  }
</style>
