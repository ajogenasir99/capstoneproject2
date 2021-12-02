
import home from '../components/home.vue'
import CartPage from '../components/CartPage.vue'



export default [
    {
      path: '',
      name: 'home',
      component: home
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage
    },
]