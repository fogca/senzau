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
				{content.title}
			</a>
			{/each}
			{/if}
		</div>
		

	</section>


</main>




<style>


</style>