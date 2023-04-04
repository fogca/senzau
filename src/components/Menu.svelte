<script>
import Logo from './Logo.svelte'
import { blur, fade, slide, fly } from 'svelte/transition';
import { expoInOut, expoOut, sineInOut, sineOut } from 'svelte/easing';

</script>
    
    <div class="Menu" 
        in:fade={{ delay: 0, duration: 1200, easing: sineInOut }}
        out:fade={{ delay: 600, duration: 1000, easing: sineInOut }}
    >  
    <div class="MenuWrapper">
    <div class="wrapper">
        <!--<li in:fly={{ y: 10, delay: 0, duration: 2500, easing: expoInOut }}></li>-->
        <li in:fade={{ delay: 1200, duration: 1800, easing: sineOut }} out:fly={{duration: 800, easing: sineOut }}>
            <a href="/gallery" >
                <h1 class="h4 uppercase">デザインとスタイリング</h1>
                <span lang="en" class="h4">Design and styling</span>
            </a>
        </li>

        <li in:fade={{ delay: 1200, duration: 2000, easing: sineOut }} out:fly={{duration: 800, easing: sineOut }}>
            <a href="/mag">
                <h1 class="h4 uppercase">手掛けたプロダクト</h1>
                <span lang="en" class="h4">Product collections</span>
            </a>
        </li>

        <li in:fly={{ delay: 1200, duration: 2000, easing: sineOut }} out:fly={{duration: 800, easing: sineOut }}>
            <a href="/about" >
                <h1 class="h4 uppercase">エトセトラについて</h1>
                <span lang="en" class="h4">About etcetera inc.</span>
            </a>
        </li>

    </div>

    <div class="store" in:fly={{ delay: 1250, duration: 2000, easing: sineOut }} out:fly={{duration: 800, easing: sineOut }}>
        <a href="/">
            <div class="box">
                <img src="../image/3.webp" alt="">
                <h3 class="h3 serif" lang="en">Online Store</h3>
            </div>
        </a>
    </div>

    <div class="container" in:fly={{ delay: 1500, duration: 2000, easing: sineOut }} out:fly={{duration: 800, easing: sineOut }}>
        <a href="mailto:info@et-cetera.co.jp" class="h5 l-link" lang="en">info@et-cetera.co.jp</a>
        <h3 class="h5 semitrans" lang="en">©︎ 2023 et cetera inc.</h3>
    </div>

    </div>
</div>

<style>

/*
.Menu .wrapper h2 {font-size: 2.8rem;}
*/

.Menu {
    width: 100vw;
    height: 100vh;
    height: 100svh;
    background-color: var(--backgroundColor);
    position: fixed;
    z-index: 98;
    padding-left: var(--padding);
}

.MenuWrapper {height: 100%;}

.Menu .wrapper {
    margin-top: 16.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
}
.Menu .wrapper li {width: 45%;}
.Menu .wrapper a {
    display: block; 
    margin-bottom: 2.5rem;
}

.Menu a h1 {
    font-size: 1.3rem;
    margin-left: -1.2px;
    letter-spacing: .1em;
    font-family: TsukuGoPr5-D, TsukuGoPro-D, sans-serif;
}
.Menu a span {
    font-size: 1.2rem;
    opacity: .5;
}

.Menu .container {
    position: absolute;
    bottom: 4rem;
}

.Menu .container span.second {margin-left: -1.4px;}
.Menu .container span.last {margin-left: -.5px;}
.Menu .container h3 {margin-top: 0.5rem;}


.Menu .store {margin-top: 4rem;}
.Menu .store .box img {
    width: calc(100vw - var(--padding)*2);
    height: calc((100vw - var(--padding)*2)/2);
    margin: 1.5rem 0 1rem;
}
.Menu .store .box h4 {opacity: .5;}

</style>