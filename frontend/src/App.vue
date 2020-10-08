<template>
  <div id="app">
    <b-navbar>
      <template slot="start">
        <b-navbar-item tag="router-link" to="/">
          <img src="./assets/main-logo.png" />
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/projects">Projects</b-navbar-item>
        <b-navbar-item tag="router-link" to="/about">About</b-navbar-item>
        <b-navbar-item tag="router-link" to="/privacy-policy">Privacy</b-navbar-item>
      </template>
    </b-navbar>

    <router-view></router-view>
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
  name: 'App'
}
</script>

<style lang='scss' scoped>
@import './scss/global.scss';
</style>