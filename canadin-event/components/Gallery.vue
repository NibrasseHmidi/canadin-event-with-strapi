<template>
  <section id="previous-event-sec">
        <div class="previous-event-heading-bg white-heading">
          <div class="container">
            <div class="row text-center">
              <div class="col-lg-12 col-md-12 col-sm-12 heading-col">
                <h2>Galleries</h2>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div class="previous-event-gallery">
          <div   class="gallery">
            <div  v-for="item in Image" :key="item.id" class="gallery-img">
              <img :src="`http://localhost:1337` + item.attributes.url" />
            </div>

          </div>

          <div  class="gallery">
            <div v-for="item in Image1" :key="item.id" class="gallery-img">
              <img :src="`http://localhost:1337` + item.attributes.url" />
            </div>

          </div>

          <div class="gallery">
            <div v-for="item in Image2" :key="item.id" class="gallery-img">
             <img :src="`http://localhost:1337` + item.attributes.url" />
            </div>

          </div>
        </div>

        <!-- <div id="myModal" class="modalModal">
          <span class="close cursor" onclick="closeModalModal()">&times</span>
          <div class="modalModal-content fadeInDown">
            <div class="mySlides">
              <img src="images/gallery1/1.jpg" class="zoomIn" />
            </div>

            <div class="mySlides">
              <img src="images/gallery1/2.jpg" class="zoomIn" />
            </div>

            <div class="mySlides">
              <img src="images/gallery1/3.jpg" class="zoomIn" />
            </div>

            <div class="mySlides">
              <img src="images/gallery1/4.jpg" class="zoomIn" />
            </div>
            <div class="mySlides">
              <img src="images/gallery1/5.jpg" class="zoomIn" />
            </div>

            <div class="mySlides">
              <img src="images/gallery1/6.jpg" class="zoomIn" />
            </div>

            <div class="mySlides">
              <img src="images/gallery1/7.jpg" class="zoomIn" />
            </div>

            <div class="mySlides">
              <img src="images/gallery1/8.jpg" class="zoomIn" />
            </div>
            <div class="mySlides">
              <img src="images/gallery1/9.jpg" class="zoomIn" />
            </div>
            <div class="mySlides">
              <img src="images/gallery1/10.jpg" class="zoomIn" />
            </div>
            <div class="mySlides">
              <img src="images/gallery1/11.jpg" class="zoomIn" />
            </div>
            <div class="mySlides">
              <img src="images/gallery1/12.jpg" class="zoomIn" />
            </div>
            <a class="prev" onclick="plusSlides(-1)">&#10094</a>
            <a class="next" onclick="plusSlides(1)">&#10095</a>
          </div>
        </div> -->
      </section>
</template>
<script>
import gql from 'graphql-tag'
const galleryQuery = gql `
query galleryQuery {
  gallery {
    data {
      attributes {
        images {
          data {
            id
            attributes {
              url
            }
          }
        }
        images2 {
          data {
            id
            attributes {
              url
            }
          }
        }
        images3 {
          data {
            id
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
  const galleryresult = await this.$apolloProvider.defaultClient.query({
    query: galleryQuery ,

  })

  this.Image = galleryresult.data.gallery.data.attributes.images.data
  this.Image1 = galleryresult.data.gallery.data.attributes.images2.data
  this.Image2 = galleryresult.data.gallery.data.attributes.images3.data



},
  data() {
    return {
      Image : {},

    }
  },
}
</script>
