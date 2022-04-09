import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

const currentPageStore: Writable<Page> = writable('');

type Page = 'Home' | 'Stocks' | 'Exchange-Rates' | 'Coins' | 'Sign-in' | 'Sign-up' | '';

export type { Page };
export { currentPageStore };
