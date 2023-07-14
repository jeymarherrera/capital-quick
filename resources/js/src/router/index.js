import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/index.vue';
import store from '../store';

// Vue.use(VueRouter);
// import { createApp } from 'vue';
// const app = createApp();
// app.use(createRouter);

const routes = [
    //dashboard
    { path: '/', name: 'Home', component: Home },

    {
        path: '/index2',
        name: 'index2',
        component: () => import(/* webpackChunkName: "index2" */ '../views/others/index2.vue'),
    },
    {
        path: '/calculadora',
        name: 'calculadora',
        component: () => import(/* webpackChunkName: "apps-invoice-add" */ '../views/calculadora.vue'),
    },
    {
        path: '/balance',
        name: 'balance',
        component: () => import(/* webpackChunkName: "index2" */ '../views/balance.vue'),
    },
    {
        path: '/balance_detalles',
        name: 'Detalles Balance',
        component: () => import(/* webpackChunkName: "index2" */ '../views/balance_detalles.vue'),
    },
    {
        path: '/estado',
        name: 'estado',
        component: () => import(/* webpackChunkName: "index2" */ '../views/estado.vue'),
    },
    {
        path: '/estado_detalles',
        name: 'Detalles Estado',
        component: () => import(/* webpackChunkName: "index2" */ '../views/estado_detalles.vue'),
    },



    //calcular activos fijos

    {
        path: '/activos_fijos',
        name: 'activos fijos',
        component: () => import(/* webpackChunkName: "index2" */ '../views/activosfijos.vue'),
    },




    //components
    {
        path: '/components/ventas/:id',
        name: 'Ventas_Finales',
        component: () => import(/* webpackChunkName: "components-Ventas" */ '../views/components/Ventas.vue'),
    },
    {
        path: '/components/Compras/:id',
        name: 'Compras',
        component: () => import(/* webpackChunkName: "components-Compras" */ '../views/components/Compras.vue'),
    },
    {
        path: '/components/CostoOpe/:id',
        name: 'CostoOpe',
        component: () => import(/* webpackChunkName: "components-CostoOpe" */ '../views/components/CostoOpe.vue'),
    },
    {
        path: '/components/flujoD/:id',
        name: 'DisenoFlujo',
        component: () => import(/* webpackChunkName: "components-cards" */ '../views/components/flujoD.vue'),
    },
   

    {
        path: '/components/FlujoCaja/:id',
        name: 'FlujoCaja',
        component: () => import(/* webpackChunkName: "components-countdown" */ '../views/components/Flujo_Caja.vue'),
    },
    {
        path: '/components/Rfinaciera/:id',
        name: 'Rfinaciera',
        component: () => import(/* webpackChunkName: "components-counter" */ '../views/components/Rfinaciera.vue'),
    },
    {
        path: '/components/SelectFinanza/:id',
        name: 'Finanzas',
        component: () => import(/* webpackChunkName: "components-sweetalert" */ '../views/components/SelectFinanza.vue'),
    },

    {
        path: '/impuesto/:id/editar',
        name: 'Impuesto',
        component: () => import(/* webpackChunkName: "components-counter" */ '../views/impuesto.vue'),
    },
    {
        path: '/proforma/:id/balance',
        name: 'IProforma Balance',
        component: () => import(/* webpackChunkName: "components-counter" */ '../views/proforma_balance.vue'),
    },
    {
        path: '/proforma/:id/estado',
        name: 'Proforma Estado',
        component: () => import(/* webpackChunkName: "components-counter" */ '../views/proforma_estado.vue'),
    },

    //balance
   
    {
        path: '/SeleccionBalance',
        name: 'Seleccion',
        component: () => import(/* webpackChunkName: "font-icons" */ '../views/components/SelectBalance.vue'),
    },
    //pages
 

    //auth
    {
        path: '/auth/login-boxed',
        name: 'login-boxed',
        component: () => import(/* webpackChunkName: "auth-login-boxed" */ '../views/auth/login_boxed.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/register-boxed',
        name: 'register-boxed',
        component: () => import(/* webpackChunkName: "auth-register-boxed" */ '../views/auth/register_boxed.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/lockscreen-boxed',
        name: 'lockscreen-boxed',
        component: () => import(/* webpackChunkName: "auth-lockscreen-boxed" */ '../views/auth/lockscreen_boxed.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/pass-recovery-boxed',
        name: 'pass-recovery-boxed',
        component: () => import(/* webpackChunkName: "auth-pass-recovery-boxed" */ '../views/auth/pass_recovery_boxed.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "auth-login" */ '../views/auth/login.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "auth-register" */ '../views/auth/register.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/lockscreen',
        name: 'lockscreen',
        component: () => import(/* webpackChunkName: "auth-lockscreen" */ '../views/auth/lockscreen.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/pass-recovery',
        name: 'pass-recovery',
        component: () => import(/* webpackChunkName: "auth-pass-recovery" */ '../views/auth/pass_recovery.vue'),
        meta: { layout: 'auth' },
    },
    
];

const router = new createRouter({
    // mode: 'history',
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
});

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.layout && to.meta.layout == 'auth') {
        store.commit('setLayout', 'auth');
    } else {
        store.commit('setLayout', 'app');
    }
    next(true);
});

export default router;
