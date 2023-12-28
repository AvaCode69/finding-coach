import { createRouter, createWebHashHistory } from 'vue-router';

import CoachDetails from './pages/coaches/CouchDetail.vue';
import CoachList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/coaches',
    },
    {
      path: '/coaches',
      component: CoachList,
    },
    {
      path: '/coaches/:id',
      component: ContactCoach,
      children: [
        {
          path: '/contact',
          component: CoachDetails,
        },
      ],
    },
    {
      path: '/register',
      component: CoachRegistration,
    },
    {
      path: '/requests',
      component: RequestsReceived,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});

export default router;
