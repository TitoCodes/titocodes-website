<template>
  <div>
    <section class="hero is-fluid is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="title is-size-1">Projects we had so far!</div>
          <b-table class="table-container" :data="data" :columns="columns"
            ><b-loading
              :is-full-page="false"
              v-model="isProjectDataEmpty"
            ></b-loading>
          </b-table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

const projectDescription = `Projects we've made so far.`;
const imagePath = "http://www.titocodes.com/img/main-logo.687a6f89.png";

export default {
  name: "Project",
  data() {
    return {
      isProjectDataEmpty: true,
      data: [],
      columns: [
        {
          field: "name",
          label: "Project Name",
        },
        {
          field: "description",
          label: "Description",
        },
        {
          field: "url",
          label: "Link",
          cellClass: "table-link",
        },
      ],
    };
  },
  methods: {
    getAllProjects() {
      axios
        .get("https://api.github.com/users/titocodes/repos")
        .then((response) => {
          let projectList = response.data;
          if (projectList.length > 0) {
            projectList.forEach((project) => {
              let refinedProject = {
                name: project.name,
                description: project.description,
                url: `<a href="${project.html_url}" target="_blank">${project.html_url}</a>`,
              };
              this.data.push(refinedProject);
            });
            this.isProjectDataEmpty = false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getAllProjects();
  },
  metaInfo() {
    return {
      title: `Projects Page - ${this.$website_name}`,
      link: [{ rel: "canonical", href: this.$website_address }],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: projectDescription },
        { property: "og:description", content: projectDescription },
        { property: "og:title", content: `About Page- ${this.$website_name}` },
        {
          property: "og:site_name",
          content: `About Page- ${this.$website_name}`,
        },
        { property: "og:type", content: "website" },
        {
          property: "og:url",
          content: this.$website_address,
        },
        {
          property: "og:image",
          content: imagePath,
        },
        { property: "og:description", content: projectDescription },
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:site",
          content: this.$website_address,
        },
        { name: "twitter:title", content: `About Page- ${this.$website_name}` },
        {
          name: "twitter:description",
          content: projectDescription,
        },
        { itemprop: "name", content: `About Page- ${this.$website_name}` },
        { itemprop: "description", content: projectDescription },
        {
          itemprop: "image",
          content: imagePath,
        },
      ],
    };
  },
};
</script>

<style lang='scss' scoped>
@import "../scss/global.scss";

::v-deep a {
  color: $orange;
}

::v-deep a:hover {
  color: $darker-orange;
}
</style>
