import { writable, type Writable } from 'svelte/store';

const searchTerm: Writable<string> = writable('');

export default searchTerm;
