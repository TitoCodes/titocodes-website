<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">Your friendly tito programmer;</h1>
          <br />
          <div class="subtitle is-size-5">
            Clone the featured projects from
            <a
              href="https://github.com/TitoCodes"
              target="_blank"
            >Github</a>!
          </div>
          <div class="subtitle is-size-5">
            Pull docker images here
            <a
              href="https://hub.docker.com/u/titocodes"
              target="_blank"
            >DockerHub</a>!
          </div>
          <div class="subtitle is-size-5">
            Tune into programming livestream in
            <a
              href="https://www.twitch.tv/titocodes"
              target="_blank"
            >Twitch</a>!
          </div>
          <div class="subtitle is-size-5">
            Like the
            <a href="https://www.facebook.com/titocodes" target="_blank">Facebook</a> for news and announcements!
          </div>
          <div class="subtitle is-size-5">
            Watch previous streams and highlights in
            <a
              href="https://www.youtube.com/channel/UCaq_ors4apTVD-ERZHf93wA?view_as=subscriber"
              target="_blank"
            >Youtube</a> channel!
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
@import "../scss/global.scss";

a {
  color: $orange;
}

a:hover {
  color: $darker-orange;
}
</style>
