<script>
import { onMount } from "svelte";



onMount(() => {
window.setTimeout(function(){
  FONTPLUS.reload(false)
}, 100);

})
</script>

<svelte:head>
	<title>About | etc inc. - Space direction</title>
  <script src="https://webfont.fontplus.jp/accessor/script/fontplus.js?kqbwQX--jVA%3D&box=uYXeq59q~wA%3D&aa=1&ab=2"></script>
</svelte:head>

<main>
  <section id="about-top" class="first-section">
    <div class="about-header">
      <img src="../image/about.webp" alt="">
      <h1 class="h4 bold">空間にまつわる全てのデザインを、ここで。</h1>
      <h2 class="h5" lang="en">Designs incorporated with space, with us.</h2>
    </div>

    <div class="container">
      <h3 class="h4 bold">在り方、大切にしていること。</h3>
      <p>ダミーテキスト - どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。どこで生れたかとんと見当がつかぬ。ダミーテキスト - どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。</p>
    </div>

    <div class="container">
      <h3 class="h4 bold">在り方、大切にしていること。</h3>
      <p>ダミーテキスト - どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。どこで生れたかとんと見当がつかぬ。ダミーテキスト - どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。</p>
    </div>

  </section>
</main>




<style>

.about-header img {width: calc(100% - 7.5vw);height: 27.5vh;}
.about-header h1 {
  font-size: 1.9rem;
  margin: 5rem 0 0;
  margin-left: -2px;
  letter-spacing: .05em;
}

#about-top .container {
  width: 75%;
  margin-bottom: 5rem;
}
#about-top .container:nth-of-type(1) {margin-top: 6rem;}
#about-top .container:nth-of-type(2) {margin-top: 5rem;}

#about-top .container h3 {
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: .025em;
  margin-left: -1.2px;
}


@media screen and (max-width: 480px) {
  
  #about-top .container {width: 100%;}
  .about-header img {
    width: 93.5vw;
    height: 42.5vw;
  }
  .about-header h1 {
    margin-top: 2rem;
    margin-left: -2.2px;
    font-size: 1.5rem;
  }
  #about-top .container h3 {
    font-size: 1.45rem;
    margin-left: -1.0px;
    margin-bottom: .5rem;
  }

}

</style>