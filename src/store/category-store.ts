import { writable, type Writable } from 'svelte/store';

const category: Writable<string> = writable('Shoes');

export default category;
