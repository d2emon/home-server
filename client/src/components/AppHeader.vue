<template>
  <v-jumbotron
    id="header"
    color="grey darken-4"
    height="135px"
    dark
  >
    <v-container>
      <v-layout row>
        <v-flex md3>
          <h1>
            <v-button to="/"><img src="/static/style/torn/img/logo.png" :alt="title" id="logo" /></v-button>
          </h1>
        </v-flex>

        <v-flex>
          <v-layout
            row
            reverse
            mb-auto
          >
            <v-flex md6>
              <v-text-field
                v-model="search"
                label="Search..."
                single-line
                append-icon="search"
                :append-icon-cb="doSearch"
                class="searchform"
                light
              />
            </v-flex>
            <!-- v-flex xs8 class="top-search" -->
            <v-flex>
              <v-toolbar-side-icon @click.stop="drawer = !drawer" class="menu-item"></v-toolbar-side-icon>
              <v-btn icon @click.stop="miniVariant = !miniVariant" class="menu-item">
                <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
              </v-btn>
              <v-btn icon @click.stop="clipped = !clipped" class="menu-item">
                <v-icon>web</v-icon>
              </v-btn>
              <v-btn icon @click.stop="fixed = !fixed" class="menu-item">
                <v-icon>remove</v-icon>
              </v-btn>

              <v-btn icon @click.stop="rightDrawer = !rightDrawer" class="menu-item">
                <v-icon>menu</v-icon>
              </v-btn>		
            </v-flex>
          </v-layout>
          <v-layout row>
            <!-- wrapper -->
            <v-flex>
              <!-- div class="wrapper-header" -->

              <!-- navigation -->		
              <v-btn
                v-for="(i, id) in items"
                :key="id"
                flat
                class="menu-item"
                :to="i.to"
              >
                {{ i.title }}
              </v-btn>		
              <!-- ENDS navigation -->
	
            </v-flex>
            <!-- ENDS wrapper -->
          </v-layout>
        </v-flex>
      </v-layout>
		
    </v-container>
  </v-jumbotron>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      miniVariant: false,
      fixed: false,
      rightDrawer: false,
      title: 'Vuetify.js',

      items: [
        { title: 'Home', to: '/index' },
        { title: 'Features' },
        { title: 'Portfolio' },
        { title: 'Gallery' },
        { title: 'Blog' },
        { title: 'Contact' },
        { title: 'Color Skins' }
      ],
      search: ''
    }
  },
  methods: {
    doSearch: function () {
      alert('SEARCH"' + this.search + '"')
    }
  },
  name: 'AppHeader'
}
</script>

<style>
#header {
  /* background: #1f1f1f url(/static/style/torn/img/bgs/strips-bold.png); */
  background-color: #1f1f1f;
  font-size: 14px;
  /* z-index: 10; */
  /* padding: 0px 0px 0px 0px; */
}

#header:after {
  display: block;
  content: "";

  position: absolute;
  height: 6px;
  width: 100%;
  top: 148px;
  left: 0px;
  background: url(../style/img/borders/torn-top.png) repeat-x bottom;
  z-index: 130;
}

.toolbar__title {
  margin-left: 0px;
}

#logo {
  /*
  position: relative;
  top: 0px;
  left: 0px;
  */
}
</style>

<style>
.wrapper-header{
  /* width: 1075px; */
  /* position: relative; */	

  display: block;
  /* position: absolute; */
  /* right: 0px; */
  /* top: 63px; */
  height: 55px;
  /* padding-bottom: 5px; */
}

.menu-item {
  /* display: block; */
  /* float: left; */
  /* height: 100%; */
  margin-left: 2px;
  margin-right: 2px;
  z-index: 8;
}

.menu-item div {
  color: #fec709;
  /* height: 47px; */
  /* padding: 25px 8px 0px 8px; */
  font-size: 14px;
}

.menu-item:hover {
  color: #FFFFFF;
}

.btn--active {
  background: url(../style/img/yellow/sprites.png) no-repeat right -27px;
  height: 100%;
}

.btn--active div {
  color: #1f1f1f;
  height: 47px;
}

/*-- NAV ---------------------------------------------------------------*/
#nav li.current_page_item a{ color: #1f1f1f; }

/* sub nav */

#nav li ul{
	padding:0px;
	background: #fec709;
}

#nav>li>ul{
	margin: 47px 0px 0px 0px;
}

#nav li ul li{
	padding: 0px;
	margin: 0px;
	border-bottom: 1px solid #fff;
}

#nav li ul li:last-child{
	border-bottom: none;
}

#nav li ul li a{
	padding: 10px;
	margin: 0px;
	font-size: 14px;
	color: #1f1f1f;
}

#nav li ul li:hover{ background: #1f1f1f; }

#nav li ul li:hover a{ color: #fff; }

/* SEARCH ------------------------------------------------------------*/
.top-search {
  /*
  position: absolute;
  left: 1050px;
  top: 20px;
  */
  padding: 0px 20px;
}

.searchform {
  /*
  position: relative;
  width: 230px;
  height: 50px;
  */
}

.searchform input {
  color: #1f1f1f;
  font-size: 14px;
  width: 210px;
  height: 26px;
  margin: 0px 0px 5px 0px;
  padding: 0px 5px 0px 5px;
  border: 0;
  background: #d2d2d2 url(../style/img/bgs/strips-thin.png);
}

.searchform .input-group__input i {
  /* position: absolute; */
  /* top: 0px; */
  /* left: 220px; */
  width: 33px;
  height: 31px;
  border: 0px;
  background: url(../style/img/yellow/sprites.png) no-repeat  transparent -100px -92px;
}

.searchform .input-group__input i:hover {
  background-position: -137px -92px;
}
</style>
