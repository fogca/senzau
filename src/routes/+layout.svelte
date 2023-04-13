<script>
import { page } from '$app/stores';
import Header from '../components/Header.svelte';
import PageTransition from '../components/PageTransition.svelte'; 
import Footer from '../components/Footer.svelte';
import { onMount } from 'svelte';
import { afterNavigate, disableScrollHandling } from '$app/navigation';

/*
onMount(async () => {
    window.setTimeout(function(){
      //FONTPLUS.start();
      FONTPLUS.reload(false)
    }, 100);
});
*/

/** @type {import('./$types').LayoutData} */
    export let data;
    $: currentRoute = $page.url.pathname;

</script>
  
<svelte:head>
  <link rel="stylesheet" href="../css/base.css?var=1.11">
  <link rel="stylesheet" href="../css/main.css?var=1.17">
  <link rel="stylesheet" href="../css/layout.css?var=1.17">
  <link rel="stylesheet" href="../css/mojikumi.css?var=1.16">
  <link rel="stylesheet" href="../css/prerendering.css?var=1.16">
  <link rel="stylesheet" href="https://use.typekit.net/jxf2bza.css">
  <script type="text/javascript" src="//typesquare.com/3/tsst/script/ja/typesquare.js?6437b4e1a9cc4f6db5233ebbac1e02e5" charset="utf-8"></script>
  <script src="https://webfont.fontplus.jp/accessor/script/fontplus.js?kqbwQX--jVA%3D&box=gT1MJwE9T04%3D&aa=1&ab=2"></script>
  <script>
    (function(d) {
      var config = {
        kitId: 'wnf5jku',
        scriptTimeout: 3000,
        async: true
      },
      h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);
  </script>
  
  <!--<script src="https://webfont.fontplus.jp/accessor/script/fontplus.js?kqbwQX--jVA%3D&box=uYXeq59q~wA%3D&aa=1&ab=2"></script>-->

</svelte:head>
  
<!-- class:Pages={currentRoute = "/about", "/contact", "/works", "/products" } -->
  <div 
    class:Index={currentRoute === "/"} 
    class:Products={currentRoute === "/products"}
    class:Works={currentRoute === "/works"}
    class:About={currentRoute === "/about"} 
    class:Contact={currentRoute === "/contact"}
  >
    <Header />
    <PageTransition pathname={data.pathname}>
    <slot />
    </PageTransition>
    <Footer />
  </div>
  