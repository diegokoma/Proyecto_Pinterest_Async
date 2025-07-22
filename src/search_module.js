import { render } from './api_petition_main_photo.js'
import { apiKey } from './api_petition_main_photo.js'
const search_function = (palabra) => {
  fetch(`https://api.unsplash.com/search/photos?query=${palabra}&per_page=30&client_id=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
      const imageGrid = document.querySelector('.image_grid')
      if (imageGrid) {
        imageGrid.innerHTML = ''
      }
      render(data.results)
    })
    .catch((error) => {
      console.error('Error en la busqueda:', error)
      alert('Ocurrió un error al buscar imágenes. Intenta nuevamente.')
    })
}

export const searchListener = () => {
  const input = document.querySelector('#search_bar')
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const palabra = e.target.value.trim()
      if (palabra.length > 0) {
        search_function(palabra)
        input.value = ''
      }
    }
  })
}
