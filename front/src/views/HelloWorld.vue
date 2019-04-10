<template>
  <v-container fluid light>
    <!-- MAIN -->
    <div id="main">
      <!-- main-wrapper -->
      <div class="wrapper">
        <h1 v-text="title"></h1>
        <h2 v-text="subtitle"></h2>
      </div>

      <!-- div class="wrapper-slideshow">
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
      </div -->

      <v-layout
        row
        wrap
      >
        <v-flex xs12>
          <v-card light>
            <v-card-title>
              <h3>Разделы</h3>
            </v-card-title>
            <v-layout
              row
              wrap
            >
              <v-flex xs6>
                <v-card light>
                  <v-card-title>
                    <h3>mywiki</h3>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-card light>
                  <v-card-title>
                    <h3>Templates</h3>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-card light>
                  <v-card-title>
                    <h3>Игры</h3>
                  </v-card-title>
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
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-card light>
                  <v-card-title>
                    <h3>Искусство</h3>
                  </v-card-title>
                  <ul>
                    <li>chordlib</li>
                    <li>w2w</li>
                    <li>book-collection</li>
                  </ul>
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-card light>
                  <v-card-title>
                    <h3>История</h3>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-card light>
                  <v-card-title>
                    <h3>Культура</h3>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-card light>
                  <v-card-title>
                    <h3>Луганск</h3>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-card light>
                  <v-card-title>
                    <h3>Экономика</h3>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-card light>
                  <v-card-title>
                    <h3>Менеджмент</h3>
                  </v-card-title>
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
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-card light>
                  <v-card-title>
                    <h3>Психология</h3>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-card light>
                  <v-card-title>
                    <h3>Миры</h3>
                  </v-card-title>
                  <ul>
                    <li>trans</li>
                    <li>flask-blog</li>
                    <li>rooms-graph-server</li>
                    <li>room-walker</li>
                    <li>vue-trans</li>
                    <li>newspaperizer</li>
                  </ul>
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-card light>
                  <v-card-title>
                    <h3>Наука</h3>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-card light>
                  <v-card-title>
                    <h3>Паранаучное</h3>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-card light>
                  <v-card-title>
                    <h3>Природа</h3>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-card light>
                  <v-card-title>
                    <h3>Работа</h3>
                  </v-card-title>
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
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-card light>
                  <v-card-title>
                    <h3>Техника</h3>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-card light>
                  <v-card-title>
                    <h3>Цитаты</h3>
                  </v-card-title>
                  <ul>
                    <li>quoter</li>
                  </ul>
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-card light>
                  <v-card-title>
                    <h3>Юмор</h3>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-card
                  light
                  href="//127.0.0.1:8090"
                  target="_blank"
                >
                  <v-card-title>
                    <h3>Языки</h3>
                  </v-card-title>
                  <ul>
                    <li>lingua</li>
                    <li>lingua-server</li>
                  </ul>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>

      <!-- blocks -->
      <v-container>
        <div class="page-title">RECENT POSTS</div>
        <v-layout row wrap class="__ul blocks-holder">
          <v-flex sm6 class="block">
            <v-card>
              <v-img class="img-holder" src="/images/dummy/block-1.jpg">
                <v-card-title class="block-title ">ONE IMAGE FILE SKIN</v-card-title>
              </v-img>
              <div class="block-text">One file to modify all the graphic elements of the theme. Easy and fast!
                <p><a href="about.html" class="link-button"><span>MORE</span></a></p>
              </div>
            </v-card>
          </v-flex>
          <v-flex sm6 class="block">
            <v-card>
              <div class="img-holder">
                <p class="block-title ">5 Predifined skins to choose from.</p>
                <a href="about.html" ><img src="img/dummies/block-1.jpg" alt="Thumb" class="thumb" title="Thumbnail" /> </a>
              </div>
              <div class="block-text">Set your theme really fast by choosing one of the predifined skins of modify it to your like very fast and easy.
                <p><a href="about.html" class="link-button"><span>DYNAMIC LINK SIZE</span></a></p>
              </div>
            </v-card>
          </v-flex>

          <v-flex sm6 class="block">
            <v-card>
              <div class="img-holder">
                <p class="block-title ">6 DIFFERENT LAYOUTS</p>
                <a href="about.html" ><img src="img/dummies/block-1.jpg" alt="Thumb" class="thumb" title="Thumbnail" /> </a>
              </div>
              <div class="block-text">Choose from the different layouts included to have a complete website in minutes.
                <p><a href="about.html" class="link-button"><span>MORE</span></a></p>
              </div>
            </v-card>
          </v-flex>
          <v-flex sm6 class="block">
            <v-card>
              <div class="img-holder">
                <p class="block-title ">3 columns gallery layout</p>
                <a href="about.html" ><img src="img/dummies/block-1.jpg" alt="Thumb" class="thumb" title="Thumbnail" /> </a>
              </div>
              <div class="block-text">Choose from 3 different gallery layouts 2, 3 or 4 columns with filterable content control.
                <p><a href="about.html" class="link-button"><span>MORE</span></a></p>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <!-- ENDS blocks -->
    </div>

    <!-- twitter -->
    <div class="twitter-reader">
      <div id="twitter-holder"></div>
    </div>
    <!-- ENDS twitter -->
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
