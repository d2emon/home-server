<template>
  <div class="top-search">
    <v-form>
      <v-text-field
        id="searchField"
        label="Search..."
        box
        append-outer-icon="search"
      />
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
};
</script>

<style scoped>
  /*
  .top-search {
    width: 230px;
    height: 50px;
  }
  .v-text-field {
    color: #1f1f1f;
    font-size: 14px;
    width: 210px;
    height: 26px;
    margin: 0px 0px 5px 0px;
    padding: 0px 5px 0px 5px;
    border: 0;
    background: #d2d2d2 url(/images/bg/strips-thin.png);
  }
  */
</style>
