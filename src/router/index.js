import { createRouter, createWebHistory } from 'vue-router'
import CoachDetail from '../views/coaches/CoachDetails.vue';
import CoachesList from '../views/coaches/CoachesList.vue';
import CoachRegistration from '../views/coaches/CoachRegistration.vue';
import ContactCoach from '../views/requests/ContactCoach.vue';
import RequestReceived from '../views/requests/RequestReceived.vue';
import NotFound from '../views/NotFound.vue';
import UserAuth from '../views/auth/UserAuth.vue';
import store from '../store/index.js'

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
    props: true,
    children: [
      { path: 'contact', component: ContactCoach }
    ]
  },
  {
    path: '/register',
    component: CoachRegistration,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/requests',
    component: RequestReceived,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/auth',
    component: UserAuth,
    meta: {
      requiresUnauth: true
    }
  },
  {
    path: '/:notFound(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(function(to, _, next){
  if(to.meta.requiresAuth && !store.getters.isAuthenticated){
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else{
    next();
  }
});

export default router
