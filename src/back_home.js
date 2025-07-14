import { renderPhotos } from './api_petition_main_photo.js'

export const backHome = () => {
  const logo_back_home = document.querySelector('.main_logo_img')
  if (!logo_back_home) return
  logo_back_home.addEventListener('click', () => {
    const imageGrid = document.querySelector('.image_grid')
    if (imageGrid) {
      imageGrid.innerHTML = ''
    }
    const input = document.querySelector('#search_bar')
    if (input) input.value = ''
    renderPhotos()
  })
}
