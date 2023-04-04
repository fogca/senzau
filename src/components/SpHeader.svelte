<script>
    import Logo from '../components/Logo.svelte';
    import { page } from '$app/stores';

    export let clicked = false;
	export let isExpanded = false;
	function clickHandler() {
		isExpanded = !isExpanded  
  }

  $: $page.url && (isExpanded = false);
  $: $page.url && (clicked = false);
</script>

<div class="sp header-sp  difference">
    <div class="sp-top sp">
      <h2 lang="en" class="h7 sp">
        <span>Branding, direction, planning, </span><br>
        <span>produce for architecture and interior.</span>
        <span>Founded by Yoshida Ai</span>
      </h2>
      <h3> </h3>
    </div>      
    <div class="right">
      <a href="/" aria-label="Home" class="sp" data-sveltekit-reload>
        <Logo />
      </a>
      
      <div class="open-button sp" 
        class:clicked={clicked} 
        on:click="{() => clicked = !clicked}" 
        on:click|preventDefault={clickHandler}>
        <span></span><span></span>
      </div>

    </div>

    {#if isExpanded}
        <Menu />
    {/if}
</div>



<style>


.header-sp {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.right {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}

.header-sp {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  /*transition: 1s ease-in-out;*/
  z-index: 99;
  padding: 6.5rem 5vw;
  
  /*background-color: var(--backgroundColor);*/
}


.header-sp ul li a {
  margin-bottom: 2.5rem;
  opacity: .3;
  transition: .5s ease-in-out;
}
.Index .header-sp ul li a {opacity: 1;}
.header-sp ul li div {opacity: .5;font-size: 1.2rem;}





@media screen and (max-width: 480px) {
  
  .header-sp {
    width: 100vw;
    height: auto;
    padding: 4.5rem 7.5vw 0;
    padding-left: 6.5vw;
    flex-direction: row;
    background-color: transparent;
  }


  .header-sp .sp-top h2 span:nth-of-type(1) {margin-left: -.5px;}
  .header-sp .sp-top h2 span:nth-of-type(3) {
    display: block;
    font-weight: 500;
    margin-top: 1.4px;
  }

  .header-sp .Logo {
    margin-top: -0.3rem;
    margin-right: -.65rem;
  }

  .header-sp .open-button {margin-top: .8rem;}
  .header-sp .open-button span {
        width: 2rem;
    height: 1.1px;
    border-radius: 10px;
    background-color: black;
    display: block;
    transition: 2.5s ease-in-out;
  }
  .header-sp .open-button span:nth-of-type(1) {margin-bottom: .8rem;}

  
  .header-sp .open-button.clicked span:nth-of-type(1) {transform: rotate(20deg) translateY(4.6px) scale(1.2);}
  .header-sp .open-button.clicked span:nth-of-type(2) {transform: rotate(-20deg) translateY(-4.8px) scale(1.2);}

}


@media screen and (min-width: 720px) {
  
  .sp {display: none;}
}


</style>