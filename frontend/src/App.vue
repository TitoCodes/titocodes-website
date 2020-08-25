<template>
  <div id="app">
    <b-navbar>
      <template slot="start">
        <b-navbar-item tag="router-link" to="/">
          <img src="./assets/main-logo.png" />
        </b-navbar-item>
        <!-- <b-navbar-item href="#">Projects</b-navbar-item> -->
        <b-navbar-item tag="router-link" to="/about">About</b-navbar-item>
      </template>
    </b-navbar>

    <router-view class="dark-purple"></router-view>
    <footer class="footer">
      <div>
        <p>
          <span>© {{ new Date().getFullYear() }} TitoCodes</span>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  watch: {
    $route: {
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./scss/global.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
img {
  width: auto;
  height: auto;
}
.dark-purple {
  background-color: $dark-purple;
}
.navbar-burger {
  color: $green !important;
}
.navbar-menu {
  background: $dark-purple;
}
.navbar-item,
.navbar-menu.is-active {
  background-color: $dark-purple !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
</style>