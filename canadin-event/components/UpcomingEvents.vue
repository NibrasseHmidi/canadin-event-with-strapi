<template>
  <section id="upcoming-event-sec">
    <div class="container">
      <div class="row text-center sec-black-hadding">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <h2>{{ comingEvent.title }}</h2>
          <hr />
        </div>
      </div>
      <div class="row">
        <div v-for="item in comingEvent.list" :key="item.title" class="col-md-4 mt-2">
          <div class="item">
            <div class="news-block">
              <figure>
                <iframe
                  id="ytplayer"
                  style="width: 100%"
                  class="embed-responsive-item"
                  :src="item.link"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <figcaption>
                  <div class="date">{{ item.date }}</div>
                  <h3>
                    <a href="#">{{ item.title }}</a>
                  </h3>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import gql from 'graphql-tag'
const upcomingEventQuery = gql `
query upcomingEventQuery {
  upcomingEvent {
    data {
      attributes {
        title
        list
      }
    }
  }
}
`
export default {

  // data() {
  //   return {
  //     slideIndex: 1
  //   }
  // },
  // mounted() {
  //   this.showSlides(this.slideIndex)
  // },
  // methods: {
  //   showSlides(n : number) {
  //     let i
  //     const slides = document.getElementsByClassName('mySlides') as any
  //     const dots = document.getElementsByClassName('demo')
  //     if (n > slides.length) {
  //       this.slideIndex = 1
  //     }
  //     if (n < 1) {
  //       this.slideIndex = slides.length
  //     }
  //     for (i = 0; i < slides.length; i++) {
  //       slides[i].style.display = 'none'
  //     }
  //     for (i = 0; i < dots.length; i++) {
  //       dots[i].className = dots[i].className.replace(' active', '')
  //     }
  //     slides[this.slideIndex - 1].style.display = 'block'
  //   }
  // },
   async fetch() {
  const comingresult = await this.$apolloProvider.defaultClient.query({
    query: upcomingEventQuery,

  })

  this.comingEvent = comingresult.data.upcomingEvent.data.attributes



},
  data() {
    return {
     comingEvent : {},

    }
  }

}
</script>

<style scoped>
.news-block {
  border: 1px solid #e5e5e5;
}

.news-block figcaption {
  position: relative;
  padding: 25px 30px 35px;
}
.news-block .date {
  background: #ec1d23;
  color: #fff;
  font-size: 14px;
  text-align: center;
  width: 137px;
  height: 38px;
  line-height: 38px;
  font-family: 'Oswald', sans-serif;
  display: inline-block;
  position: absolute;
  top: -18px;
  margin-left: -7px;
}
.news-block figcaption h3 {
  color: #333;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  text-transform: inherit;
  line-height: 27px;
  margin: 15px 0;
}
.news-block figcaption h3 a {
  color: #333;
}
.news-block figcaption h3 a:hover {
  text-decoration: none;
}
.news-block figcaption .more {
  color: #ff3e00;
  font-size: 14px;
  font-weight: 700;
}
.news-block figcaption .more:hover {
  text-decoration: none;
}
.news-block figcaption .more i {
  display: inline-block;
  position: relative;
  left: 5px;
  transition: all 0.3s;
}
.news-block figcaption .more:hover i {
  left: 14px;
  transition: all 0.3s;
}

.news-block:hover {
  border: 1px solid #ec1d23;
}
</style>
