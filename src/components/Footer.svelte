<script>
  import Saos from "saos";
  import Logo from './Logo.svelte';
  import { fly } from 'svelte/transition';
  import { sineInOut } from 'svelte/easing';
  import { onMount } from "svelte";

</script>

<footer class="sp" in:fly={{ opacity: 0, duration: 2000, easing: sineInOut }}>
  <div class="l-line sp"></div>
  <div class="top">
    <span class="h5" lang="en">Branding, direction, planning, </span><br>
    <span class="h5" lang="en">produce for architecture and interior.</span>
    <span class="h5" lang="en">Founded by Yoshida Ai</span>
  </div>
  
  <ul class="center">
    <li>
      <a href="/"></a>
    </li>
    <li>
      <a href="/"></a>
    </li>
    <li>
      <a href="/"></a>
    </li>
    
  </ul>

  <div class="bottom">
    <a href="mailto:info@et-cetera.co.jp" class="email h4" lang="en">info@et-cetera.co.jp</a>
    <div class="h6 address" lang="en">18-23 B1F Oyamacho Shibuya-ku <br>Tokyo 151-0065 Japan</div>
    <div class="copy">
      <div lang="en" class="h6">©︎ etc. inc. All Rights Reserved</div>
      <a href="https://www.instagram.com/etc.inc_/" target="blank_" class="h5" lang="en">@etc.inc_</a>
    </div>
  </div>
      
</footer>



<style>
footer {
  margin-top: 7.5rem;
  padding: 0 var(--padding) 3rem;
}
footer .l-line {margin-left: calc(-1 * var(--padding));}
footer .top {margin-top: 8rem;}
footer .top span:nth-of-type(1) {margin-left: -.5px;}
footer .top span:nth-of-type(3) {
  display: block;
  font-weight: 500;
  margin-top: 1.4px;
}

footer .center {
  margin: 5rem 0 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: baseline;
}
footer .center li {
  width: 45%;
  margin-bottom: 1.5rem;
}
footer .center li a {letter-spacing: .05em;}
footer .center li div {display: none;}

footer .bottom a.email {
  position: relative;
  white-space: nowrap;
}
footer .bottom a.email::after {
  position: absolute;
  top: auto;
  bottom: -.1rem;
  display: block;
  content: "";
  width: 102%;
  height: 1px;
  background-color: var(--textColor);
  opacity: .5;
}
footer .bottom .address {
  margin: 1.5rem 0 4rem;
  opacity: .5;
}


footer .bottom .copy {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  opacity: .5;
}

</style>