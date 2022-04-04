<script context="module" lang="ts">
	import { goto } from '$app/navigation';
	import { signInUser } from '$stores/user-store';
	import { toastMessage } from '$shared/toast.svelte';
	import type { UserCredential } from 'firebase/auth';
</script>

<script lang="ts">
	import { currentPageStore } from '$stores/current-page-store';
	import { onMount } from 'svelte';

	export let container = 'default-container';
	
	let password = '';
	let email = '';
	let isSignInFailed = false;

	onMount(() => {
		currentPageStore.set('Sign-in');
	});

	const loginSubmit = () => {
		signInUser(email, password).then(handleUser);
	};

	const handleUser = (cred: UserCredential) => {
		if (cred.user) {
			isSignInFailed = false;
			const form = document.getElementById('sign-in-form') as HTMLFormElement;
			form.reset();
			toastMessage.success(`Hello ${cred.user.email}`);
			goto('./');
		} else {
			isSignInFailed = true;
			console.error('[Sign-in] User not signed in.');
		}
	};
</script>

<div class={container}>
	<div
		class="flex flex-col bg-transparent px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md mx-auto"
	>
		<div class="font-medium self-center text-xl sm:text-3xl">Welcome Back</div>
		<p class="mt-4 self-center text-xl sm:text-sm {isSignInFailed ? 'hidden' : 'block'}">
			Enter your credentials to access your account.
		</p>
		<p
			class="mt-4 self-center text-xl sm:text-sm {!isSignInFailed ? 'hidden' : 'block'} 
				font-bold text-red-900 dark:text-red-600"
		>
			Sign-in failed. Incorret credentials.
		</p>
		<div class="mt-10">
			<form id="sign-in-form" on:submit|preventDefault={loginSubmit}>
				<div class="flex flex-col mb-5">
					<label for="email" class="mb-1 text-xs tracking-wide">E-Mail Address:</label>
					<div class="relative">
						<div
							class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6 text-blue-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
								/>
							</svg>
						</div>

						<input
							id="email"
							type="email"
							name="email"
							class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 
								focus:outline-none focus:border-blue-400"
							placeholder="Enter your email"
							bind:value={email}
						/>
					</div>
				</div>
				<div class="flex flex-col mb-6">
					<label for="password" class="mb-1 text-xs sm:text-sm tracking-wide">Password:</label>
					<div class="relative">
						<div
							class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
						>
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6 text-blue-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
									/>
								</svg>
							</span>
						</div>

						<input
							id="password"
							type="password"
							name="password"
							class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 
								focus:outline-none focus:border-blue-400"
							placeholder="Enter your password"
							bind:value={password}
						/>
					</div>
				</div>

				<div class="flex w-full">
					<button
						type="submit"
						class="flex mt-2 items-center justify-center focus:outline-none text-sm sm:text-base text-slate-300
							bg-blue-700 hover:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-800 rounded-2xl py-2 w-full 
							transition duration-150 ease-in"
					>
						<span class="mr-2 uppercase">Sign In</span>
						<span>
							<svg
								class="h-6 w-6"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</span>
					</button>
				</div>
			</form>
		</div>
	</div>
	<div class="flex justify-center mt-6">
		<div class="inline-flex items-center text-gray-700 font-medium text-xs text-center">
			<div class="ml-2 text-slate-900 dark:text-slate-300">You don't have an account?</div>
			<div
				class="text-xs ml-2 text-blue-700 dark:text-blue-500 font-semibold cursor-pointer hover:underline"
				on:click={() => goto('./register')}
			>
				Register now
			</div>
		</div>
	</div>
</div>
