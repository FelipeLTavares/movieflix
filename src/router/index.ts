import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FilmesView from '../views/FilmesView.vue'
import SeriesView from '../views/SeriesView.vue'
import FavoritosView from '@/views/FavoritosView.vue'
import SerieView from '@/views/SerieView.vue'
import FilmeView from '@/views/FilmeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/filmes',
      name: 'filmes',
      component: FilmesView
    },
    {
      path: '/series',
      name: 'series',
      component: SeriesView
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: FavoritosView
    },
    {
      path: '/serie/:id',
      name: 'serie',
      component: SerieView
    },
    {
      path: '/filme/:id',
      name: 'filme',
      component: FilmeView
    },
  ]
})

export default router
