<template>
  <div>
    <section class="hero is-fluid is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">
             <span class="icon">
                  <i class="fas fa-terminal" aria-hidden="true"></i>
             </span>
            {{title}}</h1>
          <br>

          <div class="subtitle is-size-5">
             <span class="icon has-text-black">
                  <i class="fab fa-github" aria-hidden="true"></i>
             </span>
            Clone the featured projects from
            <a
              href="https://github.com/TitoCodes"
              target="_blank"
            >Github</a>!
          </div>
          <div class="subtitle is-size-5">
             <span class="icon has-text-info">
                  <i class="fab fa-docker" aria-hidden="true"></i>
             </span>
            Pull docker images here
            <a
              href="https://hub.docker.com/u/titocodes"
              target="_blank"
            >DockerHub</a>!
          </div>
          <div class="subtitle is-size-5">
            <span class="icon has-text-light">
                  <i class="fab fa-twitch" aria-hidden="true"></i>
             </span>
            Tune into programming livestream in
            <a
              href="https://www.twitch.tv/titocodes"
              target="_blank"
            >Twitch</a>!
          </div>
          <div class="subtitle is-size-5">
             <span class="icon has-facebook-color">
                  <i class="fab fa-facebook-f" aria-hidden="true"></i>
             </span>
            Like the
            <a href="https://www.facebook.com/titocodes" target="_blank">Facebook</a> for news and announcements!
          </div>
          <div class="subtitle is-size-5">
             <span class="icon has-yt-color">
                  <i class="fab fa-youtube" aria-hidden="true"></i>
             </span>
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
const homeDescription = '$ Your friendly tito programmer'
const imagePath = 'http://www.titocodes.com/img/main-logo.687a6f89.png'

export default {
  name: 'Home',
  data: function () {
    return {
      title: homeDescription,
    };
  },
  metaInfo: function () {
    return {
      title: `Home Page - ${this.$website_name}`,
      link: [{ rel: 'canonical', href: this.$website_address }],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: homeDescription },
        { property: 'og:title', content: `Home Page - ${this.$website_name}` },
        { property: 'og:description', content: homeDescription },
        {
          property: 'og:site_name',
          content: `Home Page - ${this.$website_name}`,
        },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:url',
          content: this.$website_address,
        },
        {
          property: 'og:image',
          content: imagePath,
        },
        { property: 'og:description', content: homeDescription },
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'twitter:site',
          content: this.$website_address,
        },
        {
          name: 'twitter:title',
          content: `Home Page - ${this.$website_name}`,
        },
        {
          name: 'twitter:description',
          content: homeDescription,
        },
        { itemprop: 'name', content: `Home Page - ${this.$website_name}` },
        { itemprop: 'description', content: homeDescription },
        {
          itemprop: 'image',
          content: imagePath,
        },
      ],
    };
  },
};
</script>

<style lang='scss' scoped>
@import '../scss/global.scss';

a {
  color: $orange
}

a:hover {
  color: $darker-orange
}

.has-twitch-color{
  color:#6441A4
}

.has-facebook-color{
  color:#4267B2
}
.has-yt-color{
  color:#FF0000
}
</style>
