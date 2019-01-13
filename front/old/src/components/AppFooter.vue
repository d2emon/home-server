<template>
  <v-footer :fixed="fixed" app>
    <!-- followus -->
    <ul class="follow-us">
      <li><span>FOLLOW US</span></li>
      <li ><a href="" class="icon twitter">link</a></li>
      <li ><a href="" class="icon vimeo">link</a></li>
      <li ><a href="" class="icon dribbble">link</a></li>
      <li ><a href="" class="icon flickr">link</a></li>
      <li ><a href="" class="icon facebook">link</a></li>
      <li></li>
    </ul>
    <!-- ENDS followus -->

    <div class="torn-bottom"></div>

    <!-- wrapper-footer -->
    <div class="wrapper-footer">
      <!-- footer-cols -->
      <ul class="footer-cols">
        <li class="col">
          <h6>LINKS</h6>
          <ul>
            <li><a href="">THEMEFOREST</a></li>
            <li><a href="">MOJO THEMES</a></li>
            <li><a href="">FREE RESOURCES</a></li>
          </ul>
        </li>
        <li class="col">
          <h6>PAGES</h6>
          <ul>
            <li><a href="#">HOW TO CUSTOMIZE THIS TEMPLATE</a></li>
            <li><a href="#">5 ESSENTIALS RULES</a></li>
            <li><a href="#">LOREM IPSUM DOLOR</a></li>
          </ul>
        </li>
        <li class="col">
          <h6>TORN WORDPRES</h6>
          <p>Torn Premium Wordpress is available <a href="">learn more</a>.</p>
        </li>			
      </ul>
      <!-- footer-cols -->

      <!-- footer-bottom -->
      <div class="footer-bottom">
        <p >Torn Template by <a href="" >luiszuno.com</a></p>
      </div>
      <!-- ENDS footer-bottom -->
    </div>
    <!-- ENDS wrapper-footer -->
    <span>&copy; 2017</span>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      fixed: false
    }
  },
  name: 'AppFooter'
}
</script>
