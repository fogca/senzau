<!--<svelte:window on:scroll={slugHeader} />-->
<script>
	import Saos from "saos";
    import { onDestroy, onMount, afterUpdate } from 'svelte';
    import { browser } from "$app/environment";

    import LocomotiveScrollProvider from 'svelte-locomotive-scroll';
	import 'locomotive-scroll/src/locomotive-scroll.scss';
    
    onMount(() => {
        
        window.setTimeout(function(){
            //FONTPLUS.start();
            FONTPLUS.reload(false)
        }, 100);
        
        let body = document.getElementsByTagName('body');
    	body[0].classList.add('Work')
    });


	/** @type {import('./$types').PageData} */
	export let data;

</script>

<svelte:head>
    <title>{data[0].title} - Design and styling | etc inc. - Space direction</title>
    <script src="https://webfont.fontplus.jp/accessor/script/fontplus.js?kqbwQX--jVA%3D&box=uYXeq59q~wA%3D&aa=1&ab=2"></script>
</svelte:head>
<main>
<article class="slug">

	<section id="slug-top">

    <LocomotiveScrollProvider
	    options={{
	    	smooth: true,
	    	smoothMobile: true,
	    	getDirection: true,
            direction: 'horizontal',
	    	getSpeed: true,
	    	inertia: 0.5
	    }}
	    onLocationChange={(scroll) => scroll.scrollTo(0, { duration: 2, disableLerp: false })}
	    imageTarget={'.thumbnail'}
    >
        {#if data[0].contents}
	    {#each data[0].contents as content}
        <div class="thumbnail">
            <picture>
                <source srcset="{`${data[0].thumbnail.url}?fm=avif&q=60&width=580`} 1x, {`${data[0].thumbnail.url}?fm=avif&q=85&width=720`} 2x," media="(max-width: 599px)" type="image/avif">
                <source srcset="{`${data[0].thumbnail.url}?fm=avif&q=60&width=580`} 1x, {`${data[0].thumbnail.url}?fm=avif&q=85&width=1440`} 2x," media="(min-width: 600px)" type="image/avif">
                <source srcset="{`${data[0].thumbnail.url}?fm=avif&q=60&width=580`} 1x, {`${data[0].thumbnail.url}?fm=avif&q=85&width=720`} 2x," media="(max-width: 599px)" type="image/webp">
                <source srcset="{`${data[0].thumbnail.url}?fm=avif&q=60&width=580`} 1x, {`${data[0].thumbnail.url}?fm=avif&q=85&width=1440`} 2x," media="(min-width: 600px)" type="image/webp">
                <img src={data[0].thumbnail.url} alt="{data[0].title}">
            </picture>
        </div>
        <div class="info">
	        <h1 class="serif" lang="en">{data[0].title}</h1>
	        <h2 class="h5" lang="en">{data[0].scope}</h2>
        </div>
        {/each}
        {/if}
        
    </LocomotiveScrollProvider>

    </section>




</article>
</main>




<style>


</style>

