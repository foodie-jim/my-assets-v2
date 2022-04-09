<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import Avatars from '$lib/components/avatars.svelte';
	import { ComponentSize } from '$lib/components/enums';
	import { goto } from '$app/navigation';
	import { signOutUser, currentUserStore } from '$stores/user-store';
	import { currentPageStore } from '$stores/current-page-store';
	import { onDestroy, onMount } from 'svelte';
	import { toastMessage } from '$lib/components/toast.svelte';
	import type { User } from 'firebase/auth';
	import type { Page } from '$stores/current-page-store';

	export let container = 'default-container';

	let isDisplaySignIn = true;

	let currentUserSubscriber = null;
	let currentMenuSubscriber = null;
	let currentUser = null;

	let isHomeSelected: boolean,
		isStocksSelected: boolean,
		isExchangeRatesSelected: boolean,
		isCoinsSelected: boolean = false;

	onMount(() => {
		currentUserSubscriber = currentUserStore.subscribe(handleUser);
		currentMenuSubscriber = currentPageStore.subscribe(handleSelectedPage);
	});

	onDestroy(() => {
		if (currentUserSubscriber) {
			currentUserSubscriber();
		}
		if (currentMenuSubscriber) {
			currentMenuSubscriber();
		}
	});

	const handleTheme = () => {
		if (localStorage.theme === 'light') {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
		}
		console.info(`[Header] Theme has changed to ${localStorage.theme}`);
	};

	const handleUser = (user: User) => {
		if (user) {
			isDisplaySignIn = false;
			currentUser = user;
		} else {
			currentUser = null;
		}

		console.log('[Header] User updated', user);
	};

	//TODO Should block page and release during moving to page, related with SSR?

	const handleSelectedPage = (selectedPage: Page) => {
		isHomeSelected = isStocksSelected = isExchangeRatesSelected = isCoinsSelected = false;
		switch (selectedPage) {
			case 'Home':
				isHomeSelected = true;
				break;

			case 'Stocks':
				isStocksSelected = true;
				break;

			case 'Exchange-Rates':
				isExchangeRatesSelected = true;
				break;

			case 'Coins':
				isCoinsSelected = true;
				break;

			case 'Sign-in':
				break;

			case 'Sign-up':
				break;
		}
	};

	const handleUserTitle = () => {

		// TODO Temperary sign out, but need to popup sign out menu

		signOutUser().then(() => {
			isDisplaySignIn = true;
			toastMessage.success('Sign Out');
			goto('./');
		});
	};

	const getUserName = (user: User) => {
		if (user) {
			return `${user.email} Welcome!`;
		} else {
			return 'Unknown user';
		}
	};
</script>

<div class="{container} header">
	<svg
		on:click={() => goto('./')}
		class="w-9 h-9 stroke-slate-900 dark:stroke-slate-300 cursor-pointer"
		fill="none"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
		/>
	</svg>
	<h1 class="hidden sm:block mx-2 text-3xl cursor-pointer" on:click={() => goto('./')}>
		my-assets
	</h1>
	<div class="flex-1 flex justify-end">
		<Avatars size={ComponentSize.Large} on:click={handleTheme}>
			<svg
				class="dark:hidden w-8 h-8 mx-auto"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
				/>
			</svg>
			<svg
				class="hidden dark:block w-8 h-8 mx-auto"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
				/>
			</svg>
		</Avatars>
		<Button
			size={ComponentSize.Large}
			isDisplay={isDisplaySignIn}
			on:click={() => goto('./sign-in')}
			>Sign-in
		</Button>
		<span
			class="ml-2 cursor-pointer text-lg hover:underline self-end {isDisplaySignIn
				? 'hidden'
				: 'block'}"
			on:click={handleUserTitle}
		>
			{getUserName(currentUser)}
		</span>
	</div>
	<div class="w-full my-4">
		<span class="menu-item {isHomeSelected ? 'selected' : ''}" on:click={() => goto('./')}>Home</span>
		<span class="menu-item {isStocksSelected ? 'selected' : ''}" on:click={() => goto('./stocks')}>Stocks</span>
		<span class="menu-item {isExchangeRatesSelected ? 'selected' : ''}" on:click={() => goto('./exchange-rates')}>Exchange Rates</span>
		<span class="menu-item {isCoinsSelected ? 'selected' : ''}" on:click={() => goto('./coins')}>Coins</span>
	</div>
</div>

<style lang="postcss">
	.header {
		@apply flex flex-wrap border-b border-slate-900 my-4 py-2;
	}
	:global(.dark) .header {
		@apply border-slate-300;
	}
	.menu-item {
		@apply hover:underline hover:text-blue-900 hover:dark:text-blue-800 mr-4 cursor-pointer;
	}
	.menu-item.selected {
		@apply underline underline-offset-4 font-bold text-blue-900;
	}
	:global(.dark) .menu-item.selected {
		@apply text-blue-300;
	}
</style>
