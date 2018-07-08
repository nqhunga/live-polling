import {
  DefaultPage,
  Polling,
  CreateNewPoll,
} from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'default-page',
      name: 'Default page',
      component: DefaultPage,
      isIndex: true,
    },
    { path: '/polling', name: 'Polling', component: Polling },
    { path: '/create-new', name: 'Create new poll', component: CreateNewPoll },
  ],
};
