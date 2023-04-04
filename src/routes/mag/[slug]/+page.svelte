<!--<svelte:window on:scroll={slugHeader} />-->
<script>
	import Saos from "saos";
    import { onDestroy, onMount, afterUpdate } from 'svelte';
    import { browser } from "$app/environment";
    
    onMount(() => {
        
        window.setTimeout(function(){
            //FONTPLUS.start();
            FONTPLUS.reload(false)
        }, 100);
    
    });


	/** @type {import('./$types').PageData} */
	export let data;

</script>

<svelte:head>
    <title>{data[0].title} - Design and styling | etc inc. - Space direction</title>
    <script src="https://webfont.fontplus.jp/accessor/script/fontplus.js?kqbwQX--jVA%3D&box=uYXeq59q~wA%3D&aa=1&ab=2"></script>
</svelte:head>



<main>
</main>




<style>


@keyframes -global-scroll-animation {
	0% {
		filter: saturate(0);
		opacity: 0;
	}
	100% {
		filter: saturate(1);
		opacity: 1;
	}
}



</style>

