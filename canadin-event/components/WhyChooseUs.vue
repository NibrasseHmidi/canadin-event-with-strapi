<template>
  <section id="our-conference-sec">
    <div class="conference-heading-bg white-heading">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <h2>{{ choose.title }}</h2>
            <hr />
          </div>
        </div>
      </div>
    </div>
    <div class="conference-list-bg">
      <div class="container">
        <div class="row">
          <div class="confrence-bg">
            <div class="row">
              <div
                v-for="item in choose.list"
                :key="item.title"
                class="col-lg-6 col-md-6 col-sm-6 confrence-col"
              >
                <div class="confrence-col-inn">
                  <div class="confrence-title">
                    <i class="fa fa-check icon-box" aria-hidden="true"></i>
                    <h3>{{ item.title }}</h3>
                  </div>
                  <p v-html="item.content"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag'
const whyChooseUsQuery = gql `
query whyChooseUsQuery {
  whyChooseUs {
    data {
      attributes{title
      list}
    }
  }
}
`
export default {
  async fetch() {
  const chooseresult = await this.$apolloProvider.defaultClient.query({
    query: whyChooseUsQuery,

  })

  this.choose = chooseresult.data.whyChooseUs.data.attributes



},
  data() {
    return {
      choose : {},

    }
  },
}
</script>
