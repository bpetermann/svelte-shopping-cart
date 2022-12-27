<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import MenuButton from '../Atoms/MenuButton.svelte';
  const dispatch = createEventDispatcher();

  export let categories: { id: number; name: string }[];
  export let category: { id: number; name: string };
</script>

<nav>
  <ul>
    {#each categories as { name, id } (id)}
      <li>
        <MenuButton
          classname={`mobile ${category.id === id && 'active'}`}
          on:click={() => dispatch('change', id)}>{name}</MenuButton
        >
      </li>
    {/each}
  </ul>
</nav>

<style scoped>
  nav {
    display: none;
    background-color: #bf0f6a;
  }

  ul {
    all: unset;
  }

  li {
    all: unset;
    background-color: #fff;
  }

  @media (max-width: 768px) {
    nav {
      padding-top: 0;
      display: block;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
