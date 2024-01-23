import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { useApplicationStore } from '@/stores/application.js';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            // component: HomeView,
            component: () => import('../views/HomeView.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('../views/ProfileView.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/aimodotes',
            name: 'aimodotes',
            component: () => import('../views/AimodotesView.vue'),
            meta: { requiresAuth: true }
        },
        // {
        //     path: '/aimodotes/:id',
        //     name: 'aimodotis',
        //     component: () => import('../views/AimodotisView.vue'),
        //     meta: { requiresAuth: true }
        //     children:[
        //         {
        //             path:'',
        //             name:'aimodotis-details',
        //             component: () => import('../views/AimodotisDetailsView.vue'),
        //             meta: { requiresAuth: true }
        //         }
        //     ]
        // },
        {
            path: '/appforms/new',
            name: 'appform-new',
            component: () => import('../views/CreateAppFormView.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/appforms/secretary/pending',
            name: 'appforms-pending',
            component: () => import('../views/ShowPendingAppFormsView.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/appforms/secretary/pending/:id',
            name: 'appform-pending',
            component: () => import('../views/ShowPendingAppFormView.vue'),
            meta: { requiresAuth: true },
            children:[
                {
                    path: '',
                    name: 'appform-pending-details',
                    component: () => import('../views/ShowPendingAppFormDetailsView.vue'),
                    meta: { requiresAuth: true }
                }
                // {
                //     path: '/accept',
                //     name: 'appform-pending-accept',
                //     //component: () => import('../views/ShowPendingAppFormDetailsView.vue'),
                //     meta: { requiresAuth: true }
                // },
                // {
                //     path: '/decline',
                //     name: 'appform-pending-decline',
                //     //component: () => import('../views/ShowPendingAppFormDetailsView.vue'),
                //     meta: { requiresAuth: true }
                // }
            ]
        },
        {
            path: '/admin',
            name: 'admin-users',
            component: () => import('../views/UsersView.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/admin/user/new',
            name: 'admin-newuser',
            component: () => import('../views/CreateNewUserView.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/donationrequests',
            name: 'donationrequests',
            component: () => import('../views/DonationRequestsView.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: '/logout',
            name: 'logout',
            component: () => import('../views/LogoutView.vue'),
            meta: { requiresAuth: true }
        }
    ]
});

router.beforeEach((to, from, next) => {
    const { isAuthenticated } = useApplicationStore();
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

    if (requiresAuth && !isAuthenticated) {
        console.log('user not authenticated. redirecting to /login');
        next('/login');
    } else {
        next();
    }
});

export default router;