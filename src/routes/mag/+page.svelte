<script>
import Saos from "saos";


/** @type {import('./$types').PageData} */
export let data;

</script>

<svelte:head>
	<title>Design and styling | etc inc. - Space direction</title>
</svelte:head>






<main>


	<section>

		<div class="head">
			<h2 class="h1" lang="en">
				Lorem Ipsum is simply dummy text 
				of the printing and typesetting industry. Lorem Ipsum has been the industry.
			</h2>
			<p class="h6">
				わたしは、色描写におけるデジタル写真とフィルム写真を明確に区別する流れが非常に不得手です。それは、謂れであるその
			</p>
		</div>
		<div class="wrapper l-magazine">
			{#if data[0].contents}
			{#each data[0].contents as content}
			<a href="/mag/{content.id}/" class="container">
				<img src="{content.thumbnail.url}" alt="">
				<h2 class="h3">{@html content.title}</h2>
			  	<h3 class="h5" lang="en">Divergent and Convergent Thinking</h3>
			  	<h5 class="h7" lang="en">28th April 2023 Context</h5>
			</a>
			{/each}
			{/if}
		</div>
		

	</section>


</main>




<style>

.head {margin: 10rem 0 4rem;}
.head h2 {
	width: 85%;
	margin-bottom: 1.5rem;
}
.head p {width: 77.5%;}


img {transition: 2s ease-in-out;}
a:hover {opacity: 1;}
a:hover img {filter: invert(1) grayscale(1) contrast(2.2) brightness(.75);}


</style>