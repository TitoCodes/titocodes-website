<template>
  <div id="app">
    <b-navbar>
      <template slot="start">
        <b-navbar-item tag="router-link" to="/">Home</b-navbar-item>
        <b-navbar-item href="#">Projects</b-navbar-item>
        <b-navbar-item tag="router-link" to="/about">About</b-navbar-item>
        <b-navbar-dropdown label="Developer Links">
          <b-navbar-item target="_blank" href="https://github.com/TitoCodes">Github</b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || "TitoCodes";
      },
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
