<template>
  <section id="sponsors-sec">
    <div class="sponsors-heading-bg white-heading">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <h2>Nos partenaires</h2>
            <hr />
          </div>
        </div>
      </div>
    </div>
    <div class="sponsors-list-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="sponsors-bg">
              <div id="sponsers-logo-slider">
                <div class="owl-carousel owl-theme">
                  <div class="item">
                    <div class="sponsors-col-inn block1">
                      <figure>
                        <img :src="`http://localhost:1337` +sponsor.block1.data.attributes.url" alt="Sponsers logo" />
                      </figure>
                    </div>

                    <div class="sponsors-col-inn block2">
                      <figure>
                        <img :src="`http://localhost:1337` + sponsor.block2.data.attributes.url " alt="Sponsers logo" />
                      </figure>
                    </div>
                  </div>
                  <div class="item">
                    <div class="sponsors-col-inn block1">
                      <figure>
                        <img
                          :src="`http://localhost:1337` + sponsor.block3.data.attributes.url "
                          alt="Sponsers logo"
                        />
                      </figure>
                    </div>

                    <div class="sponsors-col-inn block2">
                      <figure>
                        <img :src="`http://localhost:1337` + sponsor.block4.data.attributes.url " alt="Sponsers logo" />
                      </figure>
                    </div>
                  </div>
                  <div class="item">
                    <div class="sponsors-col-inn block1">
                      <figure>
                        <img :src="`http://localhost:1337` + sponsor.block5.data.attributes.url " alt="Sponsers logo" />
                      </figure>
                    </div>

                    <div class="sponsors-col-inn block2">
                      <figure>
                        <img :src="`http://localhost:1337` + sponsor.block6.data.attributes.url " alt="Sponsers logo" />
                      </figure>
                    </div>
                  </div>
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
const sponsorsQuery= gql `
query sponsorsQuery {
  sponsor {
    data {
      attributes {
        block1 {
          data {
            attributes {
              url
            }
          }
        }
         block2 {
          data {
            attributes {
              url
            }
          }
        }
         block3 {
          data {
            attributes {
              url
            }
          }
        }
         block4 {
          data {
            attributes {
              url
            }
          }
        }
         block5 {
          data {
            attributes {
              url
            }
          }
        }
         block6 {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}


`

export default {
  async fetch() {
  const sponsorresult = await this.$apolloProvider.defaultClient.query({
    query: sponsorsQuery,

  })

  this.sponsor = sponsorresult.data.sponsor.data.attributes


},
  data() {
    return {
      sponsor : {},

    }
  },
}
</script>
