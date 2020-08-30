<template>
  <div>
    <section class="hero is-fluid is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="is-size-2">Privacy Policy for TitoCodes</div>
          <br />
          <div class="privacy-container">
            <p>This Privacy Policy document contains types of information collected and recorded by TitoCodes and how we use it. Your privacy is important to us. It's TitoCodes' policy to respect your privacy regarding any information we may collect from you across our website, https://titocodes.com, and other sites we own and operate.</p>
            <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.</p>
            <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft and unauthorized access, disclosure, copying, use, or modification.</p>
            <p>We don't share any personally identifying information publicly or with third-parties, except when required to by law.</p>
            <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over these sites' content and practices and cannot accept responsibility or liability for their respective privacy policies.</p>
            <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
            <div class="is-size-3">Email</div>
            <p>TitoCodes uses social authentication (Google) to uniquely identify you. Part of the authentication process records your email registered with the given service for account linking. The email recorded during authentication is NOT accessible publicly, is not used for email marketing, and is not shared with any 3rd party service.</p>
            <div class="is-size-3">Log Files</div>
            <p>TitoCodes follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any personally identifiable information. The purpose of the data is to analyze trends, administer the site, track users' movement on the website, and gather demographic information.</p>
            <div class="is-size-3">Children's Information</div>
            <p>TitoCodes does not knowingly collect any Personal Identifiable Information from children under the age of 13. Suppose you think that your child provided this kind of information to our website. In that case, we strongly encourage you to contact us immediately, and we will do our best to promptly remove such information from our records.</p>
            <div class="is-size-3">Online Privacy Policy Only</div>
            <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website regarding the information that they shared and/or collect in TitoCodes. This policy does not apply to any information collected offline or via channels other than this website.</p>
            <div class="is-size-3">Consent</div>By using our website, you, at this moment, consent to our Privacy Policy and agree to its Terms and Conditions. This policy is effective as of August 30, 2020.
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const page = "Privacy Policy";
const privacyDescription = `${page}.`;
const imagePath = "http://www.titocodes.com/img/main-logo.687a6f89.png";

export default {
  name: "Privacy",
  metaInfo: function () {
    return {
      title: `${page} - ${this.$website_name}`,
      link: [{ rel: "canonical", href: this.$website_address }],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: privacyDescription },
        { property: "og:description", content: privacyDescription },
        { property: "og:title", content: `${page} - ${this.$website_name}` },
        {
          property: "og:site_name",
          content: `${page} - ${this.$website_name}`,
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
        { property: "og:description", content: privacyDescription },
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:site",
          content: this.$website_address,
        },
        { name: "twitter:title", content: `${page} - ${this.$website_name}` },
        {
          name: "twitter:description",
          content: privacyDescription,
        },
        { itemprop: "name", content: `${page} - ${this.$website_name}` },
        { itemprop: "description", content: privacyDescription },
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

.privacy-container {
  color: $green;
}

.is-size-3,
.is-size-2 {
  color: $orange;
}

p {
  margin-bottom: 1rem;
}
</style>
