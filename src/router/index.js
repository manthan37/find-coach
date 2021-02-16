import { createRouter, createWebHashHistory } from 'vue-router'
import CoachDetail from '../views/coaches/CoachDetails.vue';
import CoachesList from '../views/coaches/CoachesList.vue';
import CoachRegistration from '../views/coaches/CoachRegistration.vue';
import ContactCoach from '../views/requests/ContactCoach.vue';
import RequestReceived from '../views/requests/RequestReceived.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    redirect: '/coaches'
  },
  {
    path: '/coaches',
    name: 'Coaches',
    component: CoachesList
  },
  {
    path: '/coaches/:id',
    component: CoachDetail,
    children: [
      { path: '/contact', component: ContactCoach}
    ]
  },
  {
    path: '/register',
    component: CoachRegistration
  },
  {
    path: '/request',
    component: RequestReceived
  },
  {
    path: '/:notFound(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
