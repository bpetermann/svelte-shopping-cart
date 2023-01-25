<script lang="ts">
  import type { Product as ProductType } from '../../types/product.type';
  import Product from '../Molecules/Products/Product.svelte';
  import category from '../../store/category-store';
  import products from '../../store/products-store';
  import searchTerm from '../../store/search-store';
  import Container from '../Atoms/Container.svelte';
  import Spinner from '../Atoms/Spinner.svelte';
  import cart from '../../store/cart-store';
  import { fade } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import { onMount } from 'svelte';

  let loading: boolean = false;
  let errorMsg: string = null;

  $: searchProducts = $products.filter((item) => {
    return (
      item.description.toLowerCase().includes($searchTerm.toLowerCase()) &&
      item.category.includes($category)
    );
  });

  const addToCart = ({ detail }: { detail: string }) => {
    let product: ProductType = $products.find(
      (product) => product.id === detail
    );
    cart.add(product);
  };

  onMount(async () => {
    loading = true;
    try {
      const res = await fetch(
        `https://my-json-server.typicode.com/bpetermann/shopping-cart-jsonserver/storeItems`
      );
      const data = await res.json();
      const items = data.map((i: Product) => {
        return { ...i, category: i.category.concat(', Women') };
      });
      products.set([...items]);
    } catch (error) {
      errorMsg = error.message || 'Something went wrong!';
    }
    loading = false;
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
          <Product on:get={addToCart} {id} {name} {description} {price} />
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
