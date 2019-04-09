<template>
  <v-container fluid>
    <h1 v-text="title"></h1>
    <h2 v-text="subtitle"></h2>
    <!-- MAIN -->
    <div id="main">
      <ul>
        <li>mywiki</li>
        <li>home-server</li>

        <li>TEMPLATES</li>
        <li>
          Игры
          <ul>
            <li>generator-pack</li>
            <li>munchkin-counter</li>
            <li>paperdoll-inventory</li>
            <li>rpg-gen</li>
            <li>games-collection-client</li>
            <li>three-road-charsheet</li>
            <li>geneverse</li>
            <li>park-walk</li>
            <li>pydice</li>
            <li>croctoweasel</li>
            <li>chainmail-helper</li>
            <li>reaccounts</li>
            <li>pyroguelike</li>
            <li>rpg-helper</li>
            <li>rpgen-client</li>
            <li>rpgen-server</li>
            <li>games-collection-server</li>
            <li>abermud</li>
            <li>flask-mud</li>
            <li>paranoia-helper</li>
            <li>abernode-server</li>
            <li>abernode</li>
            <li>white-crow-vue</li>
            <li>reout</li>
            <li>white-crow-webpack</li>
            <li>white-crow-electron</li>
            <li>whirlworld</li>
            <li>gurps-helper</li>
            <li>valhalla</li>
            <li>worldwalker</li>
            <li>pathfinder-helper</li>
            <li>recars</li>
            <li>re15</li>
            <li>remine</li>
            <li>resnake</li>
            <li>rerkanoid</li>
            <li>retris</li>
            <li>rejump</li>
            <li>games-sorter</li>
            <li>brain-system</li>
            <li>me-yii</li>
            <li>instead_city</li>
            <li>instead-rr</li>
            <li>game-collection</li>
            <li>
              Fireball Games
              <ul>
                <li>lawless-beatout</li>
                <li>jaws</li>
                <li>first</li>
                <li>aqueduct</li>
                <li>platformer</li>
                <li>masterbrain</li>
                <li>gunfright</li>
                <li>schism</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Искусство
          <ul>
            <li>chordlib</li>
            <li>w2w</li>
            <li>book-collection</li>
          </ul>
        </li>
        <li>История</li>
        <li>Культура</li>
        <li>Луганск</li>
        <li>Экономика</li>
        <li>
          Менеджмент
          <ul>
            <li>developer-roadmap</li>
            <li>whiterabbit</li>
            <li>computerooster</li>
            <li>projectboard-front</li>
            <li>projectboard</li>
            <li>project-constructor</li>
            <li>delphidoro</li>
            <li>gamify</li>
            <li>yii2-workspaces</li>
            <li>yii2-advice</li>
            <li>evalendar</li>
          </ul>
        </li>
        <li>Психология</li>
        <li>
          Миры
          <ul>
            <li>trans</li>
            <li>flask-blog</li>
            <li>rooms-graph-server</li>
            <li>room-walker</li>
            <li>vue-trans</li>
            <li>newspaperizer</li>
          </ul>
        </li>
        <li>Наука</li>
        <li>Паранаучное</li>
        <li>Природа</li>
        <li>
          Работа
          <ul>
            <li>miniature-octolana</li>
            <li>yii2-scene</li>
            <li>images-3</li>
            <li>images-1</li>
            <li>images-2</li>
            <li>images-5</li>
            <li>images-4</li>
            <li>pychallenge</li>
            <li>d2p5</li>
            <li>testnode</li>
            <li>d2webpack</li>
            <li>learn-open-gl</li>
            <li>personnel</li>
            <li>gulpfile</li>
            <li>flask-logging</li>
            <li>crud-assets</li>
            <li>flask-template</li>
            <li>pybackup</li>
            <li>delphi-users</li>
            <li>wikifiles</li>
            <li>wikiviewer</li>
            <li>dummyuser</li>
            <li>trcards</li>
          </ul>
        </li>
        <li>Техника</li>
        <li>Цитаты</li>
        <li>
          Юмор
          <ul>
            <li>quoter</li>
          </ul>
        </li>
        <li>
          Языки
          <ul>
            <li>lingua</li>
            <li>lingua-server</li>
          </ul>
        </li>
      </ul>

      <!-- v-carousel class="slideshow">
        <v-carousel-item
          v-for="(slide, id) in slides"
          :src="slide.src"
          :key="id"
          to="/"
        >
        </v-carousel-item>
      </v-carousel -->

      <!-- blocks -->
      <!-- v-layout
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
      </v-layout -->

      <!-- main-wrapper -->
      <div class="wrapper">
        <!-- ul class="blocks-holder">
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
        </ul -->
        <!-- ENDS blocks -->
        <!-- v-slide-y-transition mode="out-in">
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
        </v-slide-y-transition -->
      </div>
      <!-- ENDS main-wrapper -->

      <!-- twitter -->
      <!-- div class="twitter-reader">
        <div id="twitter-holder"></div>
      </div -->
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
      title: 'Home server',
      subtitle: 'This is your home server',
      slides: [
        /*
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
        */
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

<style scoped>
</style>
