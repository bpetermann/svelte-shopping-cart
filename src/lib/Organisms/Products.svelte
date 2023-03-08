<script lang="ts">
  import type { Product as ProductType } from '@/types/product.type';
  import Product from '@/lib/Molecules/Products/Product.svelte';
  import Container from '@/lib/Atoms/Container.svelte';
  import Spinner from '@/lib/Atoms/Spinner.svelte';
  import favorites from '@/store/favorites-store';
  import category from '@/store/category-store';
  import products from '@/store/products-store';
  import searchTerm from '@/store/search-store';
  import { fade } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import cart from '@/store/cart-store';
  import { onMount } from 'svelte';

  let loading: boolean = false;
  let errorMsg: string = null;

  onMount(async () => {
    loading = true;
    try {
      const res = await fetch(
        `https://my-json-server.typicode.com/bpetermann/shopping-cart-jsonserver/storeItems`
      );
      const data = await res.json();
      const items = data.map((i: ProductType) => {
        return { ...i, category: i.category.concat(', Women') };
      });
      products.set([...items]);
      favorites.set([...items]);
      cart.set([...items]);
    } catch (error) {
      errorMsg = error.message || 'Something went wrong!';
    }
    loading = false;
  });

  $: searchProducts = $products.filter((item) => {
    return (
      item.description.toLowerCase().includes($searchTerm.toLowerCase()) &&
      item.category.includes($category)
    );
  });
</script>

<Container classname="products">
  {#if loading}
    <div>
      <Spinner />
    </div>
  {:else if !loading && !errorMsg}
    <ul>
      {#each searchProducts as { id, name, price, description } (id)}
        <li transition:fade animate:flip={{ duration: 300 }}>
          <Product {description} {price} {name} {id} />
        </li>
      {/each}
    </ul>
  {:else}
    <p>{errorMsg}</p>
  {/if}
</Container>

<style>
  div {
    margin: 16px auto;
  }

  ul {
    all: unset;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 32px;
    width: 100%;
    padding: 24px 0px;
  }

  li {
    list-style: none;
  }

  p {
    margin: 16px auto;
    display: block;
    color: #d1003a;
  }
</style>
