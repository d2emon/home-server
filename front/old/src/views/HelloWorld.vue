<template>
  <v-container fluid>
    <h1 v-html="title"></h1>
    <h2 v-html="subtitle"></h2>
    <!-- MAIN -->
    <div id="main">
      <v-carousel class="slideshow">
        <v-carousel-item
          v-for="(slide, id) in slides"
          :src="slide.src"
          :key="id"
          to="/"
        >
        </v-carousel-item>
      </v-carousel>

      <!-- blocks -->
      <v-layout
        row
        wrap
        class="recent-posts"
      >
        <v-flex sm12>
          <h1 v-html="'Recent posts'"></h1>
        </v-flex>
        <v-flex
          sm6
          pa-2
          v-for="(post, id) in recent"
          :key="id"
        >
          <v-card :to="post.to">
            <v-card-media
              :src="post.img"
            >
              <v-container
                fill-height
                fluid
                class="image"
              >
                <v-layout
                  col
                  fill-height
                >
                  <v-flex
                    xs12
                    flexbox
                    mt-auto
                  >
                    <h3 v-text="post.title" />
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
            <v-card-text>
              {{ post.text }}
            </v-card-text>
            <v-card-actions>
              <v-btn :to="post.to" class="link-button" v-text="post.link" />
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6>
          <v-card>
            <v-card-title>
              <h3>5 Predefined skins to choose from.</h3>
            </v-card-title>
            <v-card-media>
              <v-btn to="/about">
                <img src="/static/style/torn/img/dummies/block-1.jpg" alt="Thumb" class="thumb" title="Thumbnail" />
              </v-btn>
            </v-card-media>
            <v-card-text>
              Set your theme really fast by choosing one of the predifined skins of modify it to your like very fast and easy.
              <p><v-btn to="/about" class="link-button">Dynamic link size</v-btn></p>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex sm6>
          <v-card>
            <v-card-title>
              <h3>6 different layouts</h3>
            </v-card-title>
            <v-card-media>
              <v-btn to="/about">
                <img src="/static/style/torn/img/dummies/block-1.jpg" alt="Thumb" class="thumb" title="Thumbnail" />
              </v-btn>
            </v-card-media>
            <v-card-text>
              Choose from the different layouts included to have a complete website in minutes.
              <p><v-btn to="/about" class="link-button">More</v-btn></p>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex sm6>
          <v-card>
            <v-card-media>
              <v-btn flat to="/about">
                <img src="/static/style/torn/img/dummies/block-1.jpg" alt="Thumb" class="thumb" title="Thumbnail" />
              </v-btn>
            </v-card-media>
            <v-card-title>
              <h3>3 columns gallery layout</h3>
            </v-card-title>
            <v-card-text>
              Choose from 3 different gallery layouts 2, 3 or 4 columns with filterable content control.
              <p><v-btn to="/about" class="link-button">More</v-btn></p>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex sm6>
          12345
        </v-flex>
        <v-flex sm6>
          12345
        </v-flex>
        <v-flex sm6>
          12345
        </v-flex>
      </v-layout>

      <!-- main-wrapper -->
      <div class="wrapper">
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
export default {
  name: 'main-page',
  data () {
    return {
      title: 'Torn is a free CSS/HTML template',
      subtitle: 'Left side aligned fixed template with 5 different and skins',
      slides: [
        { src: '/static/style/torn/slides/01.jpg' },
        { src: '/static/style/torn/slides/02.jpg' },
        { src: '/static/style/torn/slides/03.jpg' },
        { src: '/static/style/torn/slides/01.jpg' },
        { src: '/static/style/torn/slides/02.jpg' },
        { src: '/static/style/torn/slides/03.jpg' },
        { src: '/static/style/torn/slides/01.jpg' },
        { src: '/static/style/torn/slides/02.jpg' },
        { src: 'https://vuetifyjs.com/static/doc-images/carousel/squirell.jpg' },
        { src: 'https://vuetifyjs.com/static/doc-images/carousel/sky.jpg' },
        { src: 'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg' },
        { src: 'https://vuetifyjs.com/static/doc-images/carousel/planet.jpg' }
      ],
      recent: [
        {
          title: 'One image file skin',
          to: '/about',
          img: '/static/style/torn/img/dummies/block-1.jpg',
          text: 'One file to modify all the graphic elements of the theme. Easy and fast!',
          link: 'More'
        },
        {
          title: '5 Predefined skins to choose from.',
          to: '/about',
          img: '/static/style/torn/img/dummies/block-1.jpg',
          text: 'Set your theme really fast by choosing one of the predifined skins of modify it to your like very fast and easy.',
          link: 'Dynamic link size'
        },
        {
          title: 'One image file skin',
          to: '/about',
          img: '/static/style/torn/img/dummies/block-1.jpg',
          text: 'One file to modify all the graphic elements of the theme. Easy and fast!',
          link: 'More'
        },
        {
          title: 'One image file skin',
          to: '/about',
          img: '/static/style/torn/img/dummies/block-1.jpg',
          text: 'One file to modify all the graphic elements of the theme. Easy and fast!',
          link: 'More'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
/* @import '/public/style/torn/css/style.css' */
h1 {
  font-size: 40px;
  text-transform: uppercase;
  color: #1f1f1f;
  margin-left: 30px;
}
h2 {
  font-size: 26px;
  text-transform: uppercase;
  color: #555555;
  margin-left: 30px;
}
.slideshow {
  width: 970px;
  height: 345px;
  margin: 15px 0px;
}
.recent-posts {
  margin-bottom: 15px;
  .card {
    h3 {
      font-size: 26px;
      margin-top: auto;
      margin-left: 10px;
      padding: 10px;
      /* width: 100%; */
      height: 50px;
      background-color: #ffffff;
      z-index: 10;
    }
    .image {
      height: 162px;
      width: 100%;
    }
    /* width: 460px; */
    /* margin: 10px; */
  }
}
</style>
