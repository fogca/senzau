<script>
	import { fly } from 'svelte/transition';
	import { sineInOut, sineIn, sineOut } from 'svelte/easing';
	import { afterNavigate } from '$app/navigation';
	export let pathname = "";
	import { onMount } from 'svelte';



	/*
	function fade(node, { delay = 0, duration = 400, offset=window.scrollY }) {
  		const o = +getComputedStyle(node).opacity;
  		return {
  		  delay,
  		  duration,
  		  offset,
  		  css: t => `opacity: ${t * o}; margin-top: -${offset}px`
  		};
	}
	*/
</script>

{#key pathname}
	<!--
	<div in:fly={{ x: 5, duration: 1500, delay: 1500 }}
		 out:fly={{ x: -5, duration: 1500 }}
	>-->
	<div in:fly={{ opacity: 0, duration: 2000, delay: 1800, easing: sineInOut }}
		 out:fly={{ opacity: 0, duration: 800, easing: sineOut }}
	>
		<slot />
	</div>
{/key}