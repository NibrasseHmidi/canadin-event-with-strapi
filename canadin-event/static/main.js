/* eslint-disable @typescript-eslint/no-unused-vars */
function openModalModal() {
  document.getElementById('myModal').style.display = 'block'
}

function closeModalModal() {
  document.getElementById('myModal').style.display = 'none'
}

let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
  showSlides((slideIndex += n))
}

function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  let i
  const slides = document.getElementsByClassName('mySlides')
  const dots = document.getElementsByClassName('demo')
  const captionText = document.getElementById('caption')
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex - 1].style.display = 'block'
}
