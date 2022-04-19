import Vue from 'vue'
import Router from 'vue-router'

import vProduct from '../components/v-product.vue'
import vBeard from '../components/v-beard.vue'

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'product',
            component: vProduct
        },
        {
            path: '/beard',
            name: 'beard',
            component: vBeard
        },
        
        
    ]
    
})

export default router;