<script>
import Saos from "saos";


/** @type {import('./$types').PageData} */
export let data;

</script>

<svelte:head>
	<title>Design and styling | etc inc. - Space direction</title>
</svelte:head>

<main>


    <div>
        {#if data[0].contents}
	    {#each data[0].contents as content}
		<a href="/gallery/{content.id}/">
            {content.title}
        </a>
        {/each}
        {/if}
    </div>
	    

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


</style>