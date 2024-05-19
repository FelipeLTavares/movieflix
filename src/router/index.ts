import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import FilmesView from '../views/FilmesView.vue'
// import SeriesView from '../views/SeriesView.vue'
import FavoritosView from '@/views/FavoritosView.vue'
// import SerieView from '@/views/SerieView.vue'
// import FilmeView from '@/views/FilmeView.vue'
import MediasView from '@/views/MediasView.vue'
// import CONSTANTS from '@/constants'
import SingleMediaView from '@/views/SingleMediaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MediasView,
      props: { type: 'all' }
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: FavoritosView
    },
    {
      path: '/filmes',
      name: 'filmes',
      component: MediasView,
      props: { type: 'movie' }
    },
    {
      path: '/series',
      name: 'series',
      component: MediasView,
      props: { type: 'tv' }
    },

    {
      path: '/serie/:id',
      name: 'serie',
      component: SingleMediaView,
      props: { type: 'tv' }
    },

    {
      path: '/filme/:id',
      name: 'filme',
      component: SingleMediaView,
      props: { type: 'movie' }
    },
  ]
})

export default router
