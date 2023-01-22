import { writable, type Writable } from 'svelte/store';

const category: Writable<string> = writable('Women');

export default category;
