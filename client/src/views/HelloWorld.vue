<template>
  <v-container fluid>
    <h1>TORN IS A FREE HTML/CSS TEMPLATE</h1>
    <h2>LEFT SIDE ALIGNED FIXED TEMPLATE WITH 5 DIFFERENT AND SKINS</h2>
    <!-- MAIN -->
    <div id="main">
      <div class="wrapper-slideshow">	
        <!-- slideshow -->
        <div id="slideshow">
	  <a href="" id="slideshow-link" ><span></span></a>
          <ul id="slides">
            <li><a href="#1"><img src="slides/01.jpg"  alt="Imagen" /></a></li>
            <li><a href="#2"><img src="slides/02.jpg"  alt="Imagen" /></a></li>
            <li><a href="#3"><img src="slides/03.jpg"  alt="Imagen" /></a></li>
            <li><a href="#1"><img src="slides/01.jpg"  alt="Imagen" /></a></li>
            <li><a href="#2"><img src="slides/02.jpg"  alt="Imagen" /></a></li>
            <li><a href="#3"><img src="slides/03.jpg"  alt="Imagen" /></a></li>
            <li><a href="#1"><img src="slides/01.jpg"  alt="Imagen" /></a></li>
            <li><a href="#2"><img src="slides/02.jpg"  alt="Imagen" /></a></li>
          </ul>
        </div>
        <!-- ENDS slideshow -->
      </div>	

      <!-- main-wrapper -->
      <div class="wrapper">

    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
        <blockquote>
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
        <!-- blocks -->
        <div class="page-title">RECENT POSTS</div>
        <ul class="blocks-holder">
          <li class="block">
            <div class="img-holder">
              <p class="block-title ">ONE IMAGE FILE SKIN</p>
              <a href="about.html" ><img src="img/dummies/block-1.jpg" alt="Thumb" class="thumb" title="Thumbnail" /> </a>
            </div>
            <div class="block-text">
              One file to modify all the graphic elements of the theme. Easy and fast!
              <p><a href="about.html" class="link-button"><span>MORE</span></a></p>
            </div>
          </li>
          <li class="block">
            <div class="img-holder">
              <p class="block-title ">5 Predifined skins to choose from.</p>
              <a href="about.html" ><img src="img/dummies/block-1.jpg" alt="Thumb" class="thumb" title="Thumbnail" /> </a>
            </div>
            <div class="block-text">
              Set your theme really fast by choosing one of the predifined skins of modify it to your like very fast and easy.
              <p><a href="about.html" class="link-button"><span>DYNAMIC LINK SIZE</span></a></p>
            </div>
          </li>
          <li class="block">
            <div class="img-holder">
              <p class="block-title ">6 DIFFERENT LAYOUTS</p>
              <a href="about.html" ><img src="img/dummies/block-1.jpg" alt="Thumb" class="thumb" title="Thumbnail" /> </a>
            </div>
            <div class="block-text">
              Choose from the different layouts included to have a complete website in minutes.
              <p><a href="about.html" class="link-button"><span>MORE</span></a></p>
            </div>
          </li>
          <li class="block">
            <div class="img-holder">
              <p class="block-title ">3 columns gallery layout</p>
              <a href="about.html" ><img src="img/dummies/block-1.jpg" alt="Thumb" class="thumb" title="Thumbnail" /> </a>
            </div>
            <div class="block-text">
              Choose from 3 different gallery layouts 2, 3 or 4 columns with filterable content control.
              <p><a href="about.html" class="link-button"><span>MORE</span></a></p>
            </div>
          </li>
        </ul>
        <!-- ENDS blocks -->
      </div>
      <!-- ENDS main-wrapper -->

      <!-- twitter -->
      <div class="twitter-reader">
        <div id="twitter-holder"></div>
      </div>
      <!-- ENDS twitter -->

    </div>
    <!-- ENDS MAIN -->	
	
	
	
	




  </v-container>
</template>

<script>
// import '@/style/torn/style.css'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import '/public/style/torn/css/style.css' */
</style>
