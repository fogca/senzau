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

        <!--
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
        -->
    </section>

    <section id="slug-body">
        <div class="wrapper">
            <!--
            <div class="body">
                <div class="paragraph">
                    {@html data[0].body}
                </div>
                {#if data[0].repeatImg}
		        {#each data[0].repeatImg as repeat}
                <Saos once={true} animation={"scroll-animation 3.0s cubic-bezier(.6,0,.2,1) both"}>
                <picture>
                    <source srcset="{`${repeat.images.url}?fm=avif&q=60&width=580`} 1x, {`${repeat.images.url}?fm=avif&q=75&width=720`} 2x," media="(max-width: 599px)" type="image/avif">
                    <source srcset="{`${repeat.images.url}?fm=avif&q=60&width=580`} 1x, {`${repeat.images.url}?fm=avif&q=75&width=1440`} 2x," media="(min-width: 600px)" type="image/avif">
                    <source srcset="{`${repeat.images.url}?fm=webp&q=60&width=580`} 1x, {`${repeat.images.url}?fm=webp&q=75&width=720`} 2x," media="(max-width: 599px)" type="image/webp">
                    <source srcset="{`${repeat.images.url}?fm=webp&q=60&width=580`} 1x, {`${repeat.images.url}?fm=webp&q=75&width=1440`} 2x," media="(min-width: 600px)" type="image/webp">
                    <img data-src={repeat.images.url} alt="{data[0].title}" use:lazyImage={{ threshold: 0.5 }}>
                </picture>
                </Saos>
		        {/each}
                {/if}
            -->
        </div>
    </section>


</article>
</main>




<style>


</style>

