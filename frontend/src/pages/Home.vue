<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h2 class="title is-size-2">Welcome to my internet space.</h2>
          <h6 class="subtitle is-size-6">Just a little lot investment here in the interwebs.</h6>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const axios = require("axios").default;

axios
  .get("http://localhost:8081/project")
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle errorƒ
    console.log(error);
  })
  .then(function () {
    // always executed
  });

export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
</style>
