<script>
import Saos from "saos";
import Logo from '../../components/Logo.svelte';
import LocomotiveScrollProvider from 'svelte-locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';


/** @type {import('./$types').PageData} */
export let data;

</script>

<svelte:head>
	<title>Design and styling | etc inc. - Space direction</title>
</svelte:head>

<main class="gallery">

    <div class="Logo">
        <Logo />
    </div>

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
	    imageTarget={'.wrapper'}
    >
    <div class="wrapper">
        {#if data[0].contents}
	    {#each data[0].contents as content}
        <a href="/gallery/{content.id}/">
		<div class="container">
            <div class="thumbnail">
                <picture>
                    <source srcset="{`${content.thumbnail.url}?fm=avif&q=40&width=580`} 1x, {`${content.thumbnail.url}?fm=avif&q=60&width=720`} 2x," media="(max-width: 599px)" type="image/avif">
                    <source srcset="{`${content.thumbnail.url}?fm=avif&q=40&width=580`} 1x, {`${content.thumbnail.url}?fm=avif&q=60&width=1440`} 2x," media="(min-width: 600px)" type="image/avif">
                    <source srcset="{`${content.thumbnail.url}?fm=webp&q=40&width=580`} 1x, {`${content.thumbnail.url}?fm=webp&q=60&width=720`} 2x," media="(max-width: 599px)" type="image/webp">
                    <source srcset="{`${content.thumbnail.url}?fm=webp&q=40&width=580`} 1x, {`${content.thumbnail.url}?fm=webp&q=60&width=1440`} 2x," media="(min-width: 600px)" type="image/webp">
                    <img src="{content.thumbnail.url}" alt="{content.title}">
                </picture>
            </div>
			
            <div class="h6 info" lang="en">{content.info}</div>
        </div>
        </a>
        {/each}
        {/if}
    </div>
    </LocomotiveScrollProvider>
	    

    <!--
    {#if data[0].contents}
	{#each data[0].contents as content}
		<a href="/works/{content.id}/">
        <div class="container">
            <div class="thumbnail">
                <picture>
                    <source srcset="{`${content.thumbnail.url}?fm=avif&q=40&width=580`} 1x, {`${content.thumbnail.url}?fm=avif&q=60&width=720`} 2x," media="(max-width: 599px)" type="image/avif">
                    <source srcset="{`${content.thumbnail.url}?fm=avif&q=40&width=580`} 1x, {`${content.thumbnail.url}?fm=avif&q=60&width=1440`} 2x," media="(min-width: 600px)" type="image/avif">
                    <source srcset="{`${content.thumbnail.url}?fm=webp&q=40&width=580`} 1x, {`${content.thumbnail.url}?fm=webp&q=60&width=720`} 2x," media="(max-width: 599px)" type="image/webp">
                    <source srcset="{`${content.thumbnail.url}?fm=webp&q=40&width=580`} 1x, {`${content.thumbnail.url}?fm=webp&q=60&width=1440`} 2x," media="(min-width: 600px)" type="image/webp">
                    <img src="{content.thumbnail.url}" alt="{content.title}">
                </picture>
            </div>
            <div class="content">
			    <h2 class="h2 serif" lang="en">{content.title}</h2>
			    <h3 class="h6" lang="en">{content.scope}</h3>
            </div>
        </div>
		</a>
	{/each}
    {/if}
    -->

</main>




<style>

    .Logo {
        width: 20.5rem;
        height: auto;
        margin-left: var(--padding);
        margin-top: 2rem;
    }
    

    .wrapper {margin-top: 1.8rem;}

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .container .info {
        writing-mode: vertical-rl;
        margin-left: calc((var(--padding) - 11px * 1.4) / 2);
    }
    
    img {
        width: auto;
        max-height: 80vh;
    }


</style>