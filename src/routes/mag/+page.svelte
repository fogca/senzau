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

		<div>
			{#if data[0].contents}
			{#each data[0].contents as content}
			<a href="/mag/{content.id}/">
				<img src="{content.thumbnail.url}" alt="">
				<h2>{content.title}</h2>
			</a>
			{/each}
			{/if}
		</div>
		

	</section>


</main>




<style>


img {
	transition: 2s ease-in-out;
}
a:hover {opacity: 1;}
a:hover img {
	filter: invert(1) grayscale(1) contrast(2.2) brightness(.75);
}


</style>