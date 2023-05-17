<!--<svelte:window on:scroll={slugHeader} />-->
<script>
	import Saos from "saos";
    import { onDestroy, onMount, afterUpdate } from 'svelte';
    import { browser } from "$app/environment";

	import Time from "svelte-time";
	import { svelteTime } from "svelte-time";

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
			<h1 lang="en" class="h1">{@html data.eng}</h1>
			<h2 class="h6">{@html data.title}</h2>
			<div class="detail">
				<div class="category h7 half" lang="en">{data.category}</div>
				<div class="date h7" lang="en">Last Update: 
					<time
					  use:svelteTime={{
					    timestamp: [data.publishedAt],
					    format: "DD MMMM YYYY",
					  }}
					/>
				</div>
				<p class="h7">{@html data.introduction}</p>
			</div>			
		</div>
		<img src="{data.thumbnail.url}" alt="" class="thumbnail">

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

.article {padding-top: 5rem;}
.article .thumbnail {
	width: 100vw;
	height: 100vw;
    margin-left: calc(-1 * var(--padding));
	margin-bottom: 5rem;
}

.head h1 {
	margin-bottom: 1rem;
	margin-left: -1.5px;
	width: 75%;
}

.head .detail {
	margin: 10rem 0 3rem;
	position: relative;
}
.head .detail p {
	position: absolute;
	top: 0;
	left: auto;
	right: calc(-1 * var(--padding));
	line-height: 2.8;
}



@media screen and (min-width: 720px) {


	.article {
		width: 82.5%;
	}

}


</style>

