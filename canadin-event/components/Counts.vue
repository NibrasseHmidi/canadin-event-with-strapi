<template>
  <section id="counts-sec">
    <div class="container">
      <div class="row">
        <div
          v-for="item in count.counts"
          :key="item.title"
          class="col-lg-3 col-md-3 col-sm-3 count-box"
        >
          <div class="milestone-counter">
            <i class="fa" :class="item.icon"></i>
            <h2 class="stat-count highlight">{{ item.value }}</h2>
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag'
const countsQuery= gql `
query countsQuery {
 count {
    data {
      attributes {
        counts
      }
    }
  }
}


`
export default {
  async fetch() {
  const countresult = await this.$apolloProvider.defaultClient.query({
    query: countsQuery,

  })

  this.count = countresult.data.count.data.attributes
   console.log(this.count);


},
  data() {
    return {
      count : {},

    }
  },
}
</script>
