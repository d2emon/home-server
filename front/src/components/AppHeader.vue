<template>
  <v-jumbotron
    id="header"
    color="grey darken-4"
    height="135px"
    dark
  >
    <v-container>
      <v-layout row>
        <v-flex xs-3>
          <v-layout col align-end>
            <h1 id="logo">
              <v-btn to="/" block><img src="/static/style/torn/img/logo.png" :alt="title" /></v-btn>
            </h1>
          </v-layout>
        </v-flex>

        <v-flex align-content-space-between>
          <v-layout
            row
            reverse
            mb-auto
          >
            <v-flex md6>
              <v-layout row class="top-search">
              <v-text-field
                box
                v-model="search"
                label="Search..."
                single-line
                append-icon="search"
                :append-icon-cb="doSearch"
                class="searchform"
                color="primary"
                light
              />
              </v-layout>
            </v-flex>
            <v-flex>
              <v-btn
                icon
                small
                @click.stop="drawer = !drawer"
                class="menu-item"
              >
                <v-icon small>menu</v-icon>
              </v-btn>
              <v-btn
                icon
                small
                @click.stop="miniVariant = !miniVariant"
                class="menu-item"
              >
                <v-icon small v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
              </v-btn>
              <v-btn
                icon
                small
                @click.stop="clipped = !clipped"
                class="menu-item"
              >
                <v-icon small>web</v-icon>
              </v-btn>
              <v-btn
                icon
                small
                @click.stop="fixed = !fixed"
                class="menu-item"
              >
                <v-icon small>remove</v-icon>
              </v-btn>
              <v-btn
                icon
                small
                @click.stop="rightDrawer = !rightDrawer"
                class="menu-item"
              >
                <v-icon small>menu</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex
              class="main-menu"
            >
              <v-btn
                v-for="(i, id) in items"
                :key="id"
                flat
                class="menu-item"
                :to="i.to"
              >
                {{ i.title }}
              </v-btn>
            </v-flex>
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

<style lang="less">
#header {
  /* background: #1f1f1f url(/static/style/torn/img/bgs/strips-bold.png); */
  background-color: #1f1f1f;
  /* border-bottom: 6px dashed #ffffff; */
  /* -moz-border-image: url(../style/img/borders/torn-top.png) 30 round round; */
  /* -webkit-border-image: url(../style/img/borders/torn-top.png) 30 round round; */
  /* -o-border-image: url(../style/img/borders/torn-top.png) 30 round round; */
  /* border-image: url(../style/img/borders/torn-top.png) 30 round round; */
  font-size: 14px;
  height: 135px;
  overflow: hidden;
  padding-top: 4px;
  .container {
    padding-left: 0px;
    padding-bottom: 0px;
    /* width: 100%; */
    max-width: 100%;
    height: 131px;
  }
  #logo {
    height: 116px;
    .btn {
      height: 116px;
      margin: 0px;
      margin-left: -32px;
    }
  }
  &:after {
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
  /* SEARCH ------------------------------------------------------------*/
  .top-search {
    height: 26px;
    /* height: 48px; */
    /* height: 50px; */
    .searchform {
      padding: 0px;
      /*
      position: relative;
      width: 230px;
      height: 50px;
      */
      height: 26px;
      label {
        top: 0px;
      }
      input {
        /* color: #1f1f1f; */
        /* font-size: 14px; */
        /* width: 210px; */
        /* height: 26px; */
        /* margin: 0px 0px 5px 0px; */
        /* padding: 0px 5px 0px 5px; */
        /* border: 0; */
        /* background: #d2d2d2 url(../style/img/bgs/strips-thin.png); */
      }
      .input-group__input {
        min-height: 26px;
      }
      .input-group__input i {
        /* position: absolute; */
        /* top: 0px; */
        /* left: 220px; */
        /* width: 33px; */
        /* height: 31px; */
        /* border: 0px; */
        /* background: url(../style/img/yellow/sprites.png) no-repeat  transparent -100px -92px; */
      }
    }
  }
  /*-- NAV ---------------------------------------------------------------*/
  .main-menu {
    height: 72px;
    text-align: right;
    .btn {
      /* display: block; */
      /* float: left; */
      height: 100%;
      margin-left: 2px;
      margin-right: 2px;
      div {
        color: #fec709;
        /* height: 47px; */
        /* padding: 25px 8px 0px 8px; */
        font-size: 14px;
        &:hover {
          color: #FFFFFF;
        }
      }
    }
    .btn--active {
      background: url(../style/img/yellow/sprites.png) no-repeat right -27px;
      /* height: 100%; */
      div {
        color: #1f1f1f;
        /* height: 47px; */
        &:hover {
          color: #1f1f1f;
        }
      }
    }
  }
}
</style>
<style>
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
</style>
