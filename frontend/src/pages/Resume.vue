<template>
  <div>
    <section class="hero is-fluid is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="is-size-2">
            Resume<strong>Coming soon!</strong>
          </div>
          <br />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const resumeDescription = 'My Resume';
const imagePath = 'http://www.titocodes.com/img/main-logo.687a6f89.png';

export default {
  name: 'Resume',
  metaInfo: function () {
    return {
      title: `Resume - ${this.$website_name}`,
      link: [{ rel: 'canonical', href: this.$website_address }],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: resumeDescription },
        { property: 'og:description', content: resumeDescription },
        { property: 'og:title', content: `Resume Page- ${this.$website_name}` },
        {
          property: 'og:site_name',
          content: `Resume Page- ${this.$website_name}`,
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
        { property: 'og:description', content: resumeDescription },
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'twitter:site',
          content: this.$website_address,
        },
        { name: 'twitter:title', content: `Resume Page- ${this.$website_name}` },
        {
          name: 'twitter:description',
          content: resumeDescription,
        },
        { itemprop: 'name', content: `Resume Page- ${this.$website_name}` },
        { itemprop: 'description', content: resumeDescription },
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

h1,
h2,
h3,
h6,
strong,
.subtitle,
.container {
  color: $green !important;
}
li {
  color: $orange;
}
</style>
