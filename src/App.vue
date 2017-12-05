<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  body, ul, li, dl, dt, dd, p, ol, h1, h2, h3, h4, h5, h6, form, img, table, fieldset, legend {
    margin: 0;
    padding: 0;
  }

  ul, li, ol {
    list-style: none;
  }

  img {
    border: 0;
  }

  img {
    display: block;
  }

  a {
    text-decoration: none;
    color: #333;
  }
  .el-dropdown-menu {
    top: 25px!important;
  }
</style>
