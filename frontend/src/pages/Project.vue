<template>
  <div>
    <section class="hero is-fluid is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="title is-size-1">Here are the projects we had so far!</div>
          <b-table class="table-container" :data="data" :columns="columns"></b-table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const projectDescription = `Projects we've made so far.`;
const imagePath = 'http://www.titocodes.com/img/main-logo.687a6f89.png';

export default {
  name: 'Project',
  data: function () {
    return {
      data: [
        {
          first_name: 'Jesse',
          last_name: 'Simmons',
          date: '2016-10-15 13:43:27',
        },
        {
          first_name: 'John',
          last_name: 'Jacobs',
          date: '2016-12-15 06:00:53',
        },
        {
          first_name: 'Tina',
          last_name: 'Gilbert',
          date: '2016-04-26 06:26:28',
        },
        {
          first_name: 'Clarence',
          last_name: 'Flores',
          date: '2016-04-10 10:28:46',
        },
        {
          first_name: 'Anne',
          last_name: 'Lee',
          date: '2016-12-06 14:38:38',
        },
      ],
      columns: [
        {
          field: 'first_name',
          label: 'Project',
        },
        {
          field: 'last_name',
          label: 'Description',
        },
        {
          field: 'date',
          label: 'Date Started',
          centered: true,
        }
      ],
    };
  },
  metaInfo: function () {
    return {
      title: `Projects Page - ${this.$website_name}`,
      link: [{ rel: 'canonical', href: this.$website_address }],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: projectDescription },
        { property: 'og:description', content: projectDescription },
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
        { property: 'og:description', content: projectDescription },
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'twitter:site',
          content: this.$website_address,
        },
        { name: 'twitter:title', content: `About Page- ${this.$website_name}` },
        {
          name: 'twitter:description',
          content: projectDescription,
        },
        { itemprop: 'name', content: `About Page- ${this.$website_name}` },
        { itemprop: 'description', content: projectDescription },
        {
          itemprop: 'image',
          content: imagePath,
        },
      ],
    };
  },
}
</script>

<style lang='scss' scoped>
@import '../scss/global.scss';

.table-wrapper {
  background-color: $dark-purple;
  color: $green;
}
</style>
