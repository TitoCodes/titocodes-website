<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container is-size-1">
          Hello World! My name is Reb and I run
          <strong>TitoCodes</strong>.
        </div>
      </div>

      <h3>
        <strong class="is-size-3">When I'm not</strong>
      </h3>
      <div>
        <ul>
          <li>Estimating effort for client project proposals.</li>
          <li>(again) Estimating for cost estimates for client project proposals.</li>
          <li>Implementing new features.</li>
          <li>Bug fixing.</li>
          <li>Drafting solution architecture for projects.</li>
          <li>Communicating with clients and trying to understand what they want.</li>
        </ul>
        <br />
        <h3>
          <strong class="is-size-3">I'm probably</strong>
        </h3>

        <ul>
          <li>Live streaming about programming.</li>
          <li>Trying new web frameworks.</li>
          <li>Doing photography.</li>
          <li>Looking if my e-mail has new breaches.</li>
          <li>Practicing Videography</li>
          <li>Watching interesting series, thought provoking movies and coding tutorials.</li>
          <li>Reading self-help books.</li>
          <li>Training my dog named "Docker" ( He has an instagram).</li>
          <li>Playing Nintendo switch, PC "Master Race" games</li>
          <li>Dabbing into front-end frameworks and javascript development.</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
const aboutDescription = "Know your tito.";
const imagePath = "http://localhost:8082/img/main-logo.687a6f89.png";

export default {
  name: "About",
  metaInfo: function () {
    return {
      title: `About Page - ${this.$website_name}`,
      link: [{ rel: "canonical", href: this.$website_address }],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: "og:title", content: `About Page- ${this.$website_name}` },
        { property: "og:site_name", content: `About Page- ${this.$website_name}` },
        { property: "og:type", content: "website" },
        {
          property: "og:url",
          content: this.$website_address,
        },
        {
          property: "og:image",
          content: imagePath,
        },
        { property: "og:description", content: aboutDescription },
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:site",
          content: this.$website_address,
        },
        { name: "twitter:title", content: `About Page- ${this.$website_name}` },
        {
          name: "twitter:description",
          content: aboutDescription,
        },
        { itemprop: "name", content: `About Page- ${this.$website_name}` },
        { itemprop: "description", content: aboutDescription },
        {
          itemprop: "image",
          content: imagePath,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/global.scss";

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
