<template>
  <section id="our-speakers-sec">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="event-speakers">
            <span>{{ toolsbox.subtitle }}</span>
            <h3>{{ toolsbox.title }}</h3>
            <hr />
            <div class="info_height">
              <div v-html="toolsbox.description"></div>
            </div>
          </div>
        </div>
        <div
          v-for="item in toolsbox.Tools"
          :key="item.title"
          class="col-lg-4 col-md-6 col-sm-6"
        >
          <figure class="speaker-box">
            <img :src="`http://localhost:1337` + item.image.data.attributes.url" :alt="item.title" />
            <figcaption style="right: 0; left: 0">
              <h4>{{ item.title }}</h4>
              <p v-html="item.content"></p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag'
const toolsBoxQuery= gql `
query toolsBoxQuery {
  toolsBox {
    data {
      attributes {
        title
        subtitle
        description
        Tools {
          title
          image {
            data {
              attributes {
                url
              }
            }
          }
          content
        }
      }
    }
  }
}


`

export default {
  async fetch() {
  const toolsresult = await this.$apolloProvider.defaultClient.query({
    query: toolsBoxQuery,

  })

  this.toolsbox = toolsresult.data.toolsBox.data.attributes



},
  data() {
    return {
      toolsbox : {},

    }
  },
}
</script>
