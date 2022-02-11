<template>
  <section id="event-schedule-sec">
    <div class="container">
      <div class="row text-center sec-black-hadding">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <h2>{{ schedule.title }}</h2>
          <hr />
        </div>
      </div>
      <div id="exTab1">
        <ul class="nav nav-pills">
          <li
            v-for="(item, index) in schedule.List"
            :key="index"
            :class="{ active: index === 0 }"
          >
            <button>
              <a :href="'#' + index + 'a'" data-toggle="tab">
                {{ item.topTitle }}
                <span>{{ item.date }}</span>
              </a>
            </button>
          </li>
        </ul>

        <div class="tab-content clearfix">
          <div
            v-for="(item, index) in schedule.List"
            :id="index + 'a'"
            :key="index"
            :class="{ active: index === 0 }"
            class="tab-pane"
          >
            <h4 class="text-center my-3">{{ item.title }}</h4>
            <div class="tab-content">
              <div class="tab-pane active">
                <div class="schedule">
                  <div class="schedule-content col-md-12 col-lg-6">
                    <div v-for="speaker in schedule.Speakers1" :key="speaker.title">
                      <Speaker :speaker="speaker" :index="index" />
                    </div>
                  </div>
                  <div class="schedule-content col-md-12 col-lg-6">
                    <div v-for="speaker in schedule.Speakers2" :key="speaker.title">
                      <Speaker :speaker="speaker" :index="index" />
                    </div>
                  </div>
                </div>
                <div class="schedule justify-content-center">
                  <div class="schedule-content col-md-12 col-lg-6">
                    <div v-for="speaker in schedule.Speakers3" :key="speaker.title">
                      <Speaker :speaker="speaker" :index="index" />
                    </div>
                  </div>
                  <div class="schedule-content col-md-12 col-lg-6">
                    <div v-for="speaker in schedule.Speakers4" :key="speaker.title">
                      <Speaker :speaker="speaker" :index="index" />
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
const scheduleQuery = gql `
query scheduleQuery {
  schedule {
    data {
      attributes {
        List {
          topTitle
          date
          title
        }
        Speakers1 {
          time
          name
          image {
            data {
              attributes {
                url
              }
            }
          }
          disabledImage {
            data {
              attributes {
                url
              }
            }
          }
          linkedin
          visibleIndex
        }
        Speakers2 {
          time
          name
          image {
            data {
              attributes {
                url
              }
            }
          }
          disabledImage {
            data {
              attributes {
                url
              }
            }
          }
          linkedin
          visibleIndex
        }
        Speakers3 {
          time
          name
          image {
            data {
              attributes {
                url
              }
            }
          }
          disabledImage {
            data {
              attributes {
                url
              }
            }
          }
          linkedin
          visibleIndex
        }
        Speakers4 {
          time
          name
          image {
            data {
              attributes {
                url
              }
            }
          }
          disabledImage {
            data {
              attributes {
                url
              }
            }
          }
          linkedin
          visibleIndex
        }
      }
    }
  }
}

`
export default {
  async fetch() {
  const scheduleresult = await this.$apolloProvider.defaultClient.query({
    query: scheduleQuery,

  })

  this.schedule = scheduleresult.data.schedule.data.attributes



},
  data() {
    return {
      schedule : {},

    }
  },
}


</script>
