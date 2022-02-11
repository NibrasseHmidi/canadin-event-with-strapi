<template>
  <section id="main-banner-sec">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-12 col-sm-12">
          <div class="banner-left-bar">
            <ul class="time-location">
              <li>
                <i class="fa fa-calendar-o"></i>
                {{ main.eventDate }}
              </li>

              <li><i class="fa fa-map-marker"></i>
               {{ main.eventPlace }}
               </li>
            </ul>
            <h1>
              {{ main.title }}

            </h1>
            <hr />
            <h2 class="text-white">
              {{ main.description }}
              </h2>
            <div id="defaultCountdown" class="mt-5"></div>
            <ul class="social-icons mb-5">
              <li>
                <a :href="main.facebookLink" target="_blank"
                  ><i class="fa fa-facebook"></i
                ></a>
              </li>
              <li>
                <a :href="main.linkedinLink" target="_blank"
                  ><i class="fa fa-linkedin"></i
                ></a>
              </li>
              <li>
                <a :href="main.youtubeLink" target="_blank"
                  ><i class="fa fa-youtube"></i
                ></a>
              </li>
              <li>
                <a :href="main.instagramLink" target="_blank"
                  ><i class="fa fa-instagram"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-5 col-md-12 col-sm-12">
          <div class="register-form" style="height: 100%">
            <div class="form-title">
              <h4>{{ main.rightBox.title }}</h4>
            </div>
            <form
              id="contact"
              method="post"
              class="userform"
              action="thank-you.html"
              onsubmit="return validateForm()"
            >
              <br />
              <div>
                <span

                  class="text-white h4"
                  v-html="main.rightBox.description"
                ></span>
              </div>
              <br />
              <div id="contact_submit" class="input-box mr mt-5">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScQjWkFm0PpNP7WVNasNyUhuW5eHYM2OlrMEcJCU_vOa0x1QA/viewform?usp=pp_url&entry.1994969570=Option+n%C2%B0+1 "
                  class="send_btn submit-btn btn"
                  target="_blank"
                  type="submit"
                >
                  {{ main.rightBox.button }}
                </a>
              </div>
              <strong
                >Powered by C<span style="text-transform: lowercase"
                  >anadin </span
                >.. T<span style="text-transform: lowercase">he</span> s<span
                  style="text-transform: lowercase"
                  >ecret</span
                >
                g<span style="text-transform: lowercase">ate</span></strong
              >
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag'
const mainBannerQuery = gql `
query mainBannerQuery {
  mainBanner {
    data {
      attributes {
        eventDate
      eventPlace
        title
        description
        facebookLink
        linkedinLink
        youtubeLink
        instagramLink
        rightBox
      }
    }
  }
}

`
export default {
  async fetch() {
  const mainresult = await this.$apolloProvider.defaultClient.query({
    query: mainBannerQuery,

  })

  this.main = mainresult.data.mainBanner.data.attributes
   console.log(this.main);


},
  data() {
    return {
      main : {},

    }
  },
}
// export default Vue.extend({


//   props: {
//     data: {
//       type: Object,
//       default: null
//     }
//   },



// })
</script>
