<template>
  <div>
    <section class="hero is-fluid is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="is-size-2">
            Hello World! My name is Reb and I run
            <strong>TitoCodes</strong>.
          </div>
          <br />
          <h3>
            <strong class="is-size-3">When I'm not</strong>
          </h3>
          <div>
            <ul>
              <li>- Implementing new features</li>
              <li>- Writing tests</li>
              <li>- Bug fixing</li>
              <li>- Creating CI/CD pipelines</li>
              <li>- Transforming legacy programs into cutting edge maintainable projects</li>
              <li>- Help transition organization into cloud</li>
              <li>- Drafting solution architecture for projects</li>
            </ul>
            <br />
            <h3>
              <strong class="is-size-3">I'm probably</strong>
            </h3>

            <ul>
              <li>- Creating videos about programming</li>
              <li>- Trying new web frameworks</li>
              <li>- Learning various cloud resources</li>
              <li>- Exploring other programming languages</li>
              <li>- Looking for ways to optimize my workflow</li>
              <li>- Practicing Videography</li>
              <li>- Reading self-help books</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const aboutDescription = 'Know your tito.';
const imagePath = 'http://www.titocodes.com/img/main-logo.687a6f89.png';

export default {
  name: 'About',
  metaInfo: function () {
    return {
      title: `About Page - ${this.$website_name}`,
      link: [{ rel: 'canonical', href: this.$website_address }],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: aboutDescription },
        { property: 'og:description', content: aboutDescription },
        { property: 'og:title', content: `About Page- ${this.$website_name}` },
        {
          property: 'og:site_name',
          content: `About Page- ${this.$website_name}`,
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
        { property: 'og:description', content: aboutDescription },
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'twitter:site',
          content: this.$website_address,
        },
        { name: 'twitter:title', content: `About Page- ${this.$website_name}` },
        {
          name: 'twitter:description',
          content: aboutDescription,
        },
        { itemprop: 'name', content: `About Page- ${this.$website_name}` },
        { itemprop: 'description', content: aboutDescription },
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
