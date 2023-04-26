<!--<svelte:window on:scroll={slugHeader} />-->
<script>
	import Saos from "saos";
    import { onDestroy, onMount, afterUpdate } from 'svelte';
    import { browser } from "$app/environment";


/** @type {import('./$types').PageData} */
export let data;

</script>

<svelte:head>
    <title>{data.seo} - Design and styling | etc inc. - Space direction</title>
    <script src="https://webfont.fontplus.jp/accessor/script/fontplus.js?kqbwQX--jVA%3D&box=uYXeq59q~wA%3D&aa=1&ab=2"></script>
</svelte:head>



<main id="mag">

	<section class="article">
		<div class="head">
			<img src="{data.thumbnail.url}" alt="" class="thumbnail">
			<h1 class="h2">{@html data.title}</h1>
			<h2 lang="en" class="h5">{@html data.eng}</h2>
		</div>

		<div class="body">{@html data.body}</div>
	</section>


<!--
	{#if data.prevPost}
  		<a href={`/blog/${prevPost.slug}`}>Previous Article</a>
	{/if}

	{#if nextPost}
  		<a href={`/blog/${nextPost.slug}`}>Next Article</a>
	{/if}

-->

	<!--
	<section class="related">
		{#if data.nextArticle}
			{#each data.nextArticle as nextArticle}
			<a href="/mag/{nextArticle.id}/">
				<img src="{nextArticle.thumbnail.url}" alt="">
				<h2>{nextArticle.title}</h2>
			</a>
			{/each}
			{/if}
	</section>
	-->
	
</main>




<style>


@keyframes -global-scroll-animation {0% {opacity: 0;}100% {opacity: 1;}}

#mag {
	background-color: var(--backgroundColor);
}


.article .thumbnail {
	width: 100vw;
    margin-left: calc(-1 * var(--padding));
}

.head {margin-bottom: 5rem;}
.head h1 {
	margin: 4rem 0 1.5rem;
	margin-left: -1.5px;
}


.body {
	/*
	overflow: scroll;
	display: flex;
	justify-content: flex-end;
    width: 100vw;
    margin-left: calc(-1 * var(--padding));
	*/
}


@media screen and (min-width: 720px) {


	.article {
		width: 82.5%;
	}

}


</style>

