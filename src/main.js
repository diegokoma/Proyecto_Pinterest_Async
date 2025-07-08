import './style.css'
import { mainpart, renderPhotos } from './api_petition_main_photo'
import { searchListener } from './search_module'
//Header
const headerpart = () => {
  const header_part = document.createElement('header')
  header_part.classList.add('header_part')
  document.body.insertBefore(header_part, document.body.firstChild)
  const main_h_container = document.createElement('div')
  main_h_container.classList.add('main_h_container')
  header_part.appendChild(main_h_container)
  const main_logo = document.createElement('a')
  main_logo.classList.add('main_logo')
  main_h_container.appendChild(main_logo)
  const main_logo_img = document.createElement('img')
  main_logo_img.classList.add('main_logo_img')
  main_logo_img.src = './public/assets/logo principal.png'
  main_logo.appendChild(main_logo_img)
  const main_nav = document.createElement('nav')
  main_nav.classList.add('main_nav')
  main_h_container.appendChild(main_nav)
  const main_nav_list_obj = document.createElement('ul')
  main_nav_list_obj.classList.add('main_nav_list_obj')
  main_nav.appendChild(main_nav_list_obj)
  for (let i = 0; i < 7; i++) {
    const header_objs = document.createElement('li')
    header_objs.classList.add(`Object-${i}`)
    if (i === 0) {
      const ini_pag = document.createElement('a')
      ini_pag.textContent = 'Inicio'
      header_objs.appendChild(ini_pag)
    } else if (i === 1) {
      const explore_pag = document.createElement('a')
      explore_pag.textContent = 'Explore'
      header_objs.appendChild(explore_pag)
    } else if (i === 2) {
      const create_pag = document.createElement('a')
      create_pag.textContent = 'Crear'
      header_objs.appendChild(create_pag)
    } else if (i === 3) {
      const img_lupa = document.createElement('img')
      img_lupa.src = './public/assets/lupa.png'
      img_lupa.alt = 'Lupa para buscar contenido'
      const search_bar = document.createElement('input')
      search_bar.type = 'search'
      search_bar.placeholder = 'Buscar'
      search_bar.id = 'search_bar'
      search_bar.name = 'search_bar'
      header_objs.appendChild(img_lupa)
      header_objs.appendChild(search_bar)
    } else if (i === 4) {
      const img_ring = document.createElement('img')
      img_ring.src = './public/assets/campanita.png'
      img_ring.alt = 'Marcar notificaciones'
      header_objs.appendChild(img_ring)
    } else if (i === 5) {
      const img_quote = document.createElement('img')
      img_quote.src = './public/assets/bocadillo.png'
      img_quote.alt = 'Abrir conversación'
      header_objs.appendChild(img_quote)
    } else if (i === 6) {
      const img_profile = document.createElement('a')
      img_profile.textContent = 'D'
      header_objs.appendChild(img_profile)
    }

    main_nav_list_obj.appendChild(header_objs)
  }
}
headerpart()
mainpart()
renderPhotos()
searchListener()
