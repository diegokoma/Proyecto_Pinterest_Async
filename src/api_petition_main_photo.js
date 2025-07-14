export const mainpart = () => {
  const main_part = document.createElement('main')
  main_part.classList.add('main_part')
  document.body.appendChild(main_part)
  const image_grid = document.createElement('div')
  image_grid.classList.add('image_grid')
  main_part.appendChild(image_grid)
}

let initialPhotos = []
export const renderPhotos = () => {
  const image = document.querySelector('.image_grid')
  image.innerHTML = ''
  if (initialPhotos.length > 0) {
    render(initialPhotos)
    return
  }
  fetch('https://api.unsplash.com/photos/random?count=30&client_id=RPV193cILr0m9_9Cq82WrvRNbFWG1yvxRbsvoVTzAbc')
    .then((res) => res.json())
    .then((photos) => {
      initialPhotos = photos
      render(photos)
    })
}

const render = (photos) => {
  const image = document.querySelector('.image_grid')
  photos.forEach((photo) => {
    const photo_container = document.createElement('div')
    photo_container.classList.add('photo_container')

    const img_container = document.createElement('div')
    img_container.classList.add('img_container')

    const img_container_info = document.createElement('div')
    img_container_info.classList.add('img_container_info')

    const img = document.createElement('img')
    img.classList.add('img_principal')
    img.src = photo.urls.regular
    img.alt = photo.description

    const user_img = document.createElement('img')
    user_img.classList.add('user_img')
    user_img.src = photo.user.profile_image.medium

    const user_name = document.createElement('p')
    user_name.classList.add('user_name')
    user_name.textContent = photo.user.name

    const user_photo_share = document.createElement('img')
    user_photo_share.classList.add('user_photo_share')
    user_photo_share.src = './public/assets/share-ios.png'

    const user_date = document.createElement('p')
    user_date.classList.add('user_date')
    user_date.textContent = photo.user.updated_at.slice(0, 10)

    const color_border = colorAleatorio()
    user_img.style.border = `5px solid ${color_border}`
    user_img.style.boxShadow = `0 0 10px ${color_border}, 0 0 10px ${color_border}`

    const statics_photo_container = document.createElement('div')
    statics_photo_container.classList.add('statics_photo_container')

    const statics_photo_container_num = document.createElement('p')
    statics_photo_container_num.classList.add('statics_photo_container_num')
    statics_photo_container_num.textContent = `+${photo.user.total_photos}`

    const statics_photo_container_img = document.createElement('img')
    statics_photo_container_img.classList.add('statics_photo_container_img')
    statics_photo_container_img.src = './public/assets/camara.png'

    const statics_like_photo_container = document.createElement('div')
    statics_like_photo_container.classList.add('statics_like_photo_container')

    const statics_like_photo_container_img = document.createElement('img')
    statics_like_photo_container_img.classList.add('statics_like_photo_container_img')
    statics_like_photo_container_img.src = './public/assets/corazón.png'

    const statics_like_photo_container_num = document.createElement('p')
    statics_like_photo_container_num.classList.add('statics_like_photo_container_num')
    statics_like_photo_container_num.textContent = `${photo.likes}`

    const visit_container_button = document.createElement('div')
    visit_container_button.classList.add('visit_container_button')

    const visit_container_button_accion = document.createElement('button')
    visit_container_button_accion.classList.add('visit_container_button_accion')
    visit_container_button_accion.textContent = 'Visitar'

    let stats_container
    let visit_container

    Array.from({ length: 2 }).forEach((_, index) => {
      const div = document.createElement('div')
      div.classList.add(`Contenido${index}`)
      if (index === 0) stats_container = div
      else visit_container = div
      img_container.appendChild(div)
    })

    stats_container.append(statics_photo_container, statics_like_photo_container)
    visit_container.appendChild(visit_container_button)
    statics_photo_container.append(statics_photo_container_img, statics_photo_container_num)
    statics_like_photo_container.append(statics_like_photo_container_img, statics_like_photo_container_num)
    visit_container_button.appendChild(visit_container_button_accion)
    img_container.appendChild(img)
    img_container_info.append(user_img, user_name, user_photo_share, user_date)
    photo_container.append(img_container, img_container_info)
    image.appendChild(photo_container)
  })
}

const colorAleatorio = () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}
