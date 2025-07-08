const search_function = (palabra) => {
  fetch(`https://api.unsplash.com/search/photos?query=${palabra}&per_page=30&client_id=RPV193cILr0m9_9Cq82WrvRNbFWG1yvxRbsvoVTzAbc`)
    .then((res) => res.json())
    .then((data) => {
      const contenedores = document.querySelectorAll('.img_container')
      contenedores.forEach((container) => {
        const img = container.querySelector('.img_principal')
        if (img) img.remove()
      })
      data.results.forEach((photo, index) => {
        const container = contenedores[index]
        if (container) {
          const img = document.createElement('img')
          img.classList.add('img_principal')
          img.src = photo.urls.regular
          img.alt = photo.description || 'Nueva imagen'
          container.appendChild(img)
        }
      })
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
