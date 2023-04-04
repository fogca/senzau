<script>
  import Saos from "saos";
  import Logo from './Logo.svelte';
  import Menu from './Menu.svelte';
  import gsap from 'gsap';
  import { navigating } from '$app/stores';
  import { page } from '$app/stores';
	import { onMount } from 'svelte';
  import { browser } from "$app/environment";

  onMount(() => {
    if (browser) {
      /*header visibility*/
      let jsheader = document.getElementsByTagName('header');
      jsheader[0].style.visibility = "visible";

      /*header scroll*/
      window.addEventListener('scroll', (event) => {
				let scy = window.scrollY;
        if (scy > 400) {
          document.body.classList.add('header-scrolled');
        } else if (scy > 4) {
          document.body.classList.add('header-scrolled-top');
        } else {
          document.body.classList.remove('header-scrolled');
        }
			});
    }
  });

  export let clicked = false;
	export let isExpanded = false;
	function clickHandler() {
		isExpanded = !isExpanded  
  }

  $: $page.url && (isExpanded = false);
  $: $page.url && (clicked = false);


</script>

<div>


  <header>
      
      <div class="open-button sp" 
        class:clicked={clicked} 
        on:click="{() => clicked = !clicked}" 
        on:click|preventDefault={clickHandler}>
        <span></span><span></span>
      </div>


  </header>


  
  
  {#if isExpanded}
    <Menu />
  {/if}
  

</div>



<style>


</style>
