import home from '.App'
import create from '.CreateAccount'
import { component } from 'vue/types/umd'

export const routes = [
    { path:'/', name: 'homepage', component: home},
    { path:'/', create: 'CreateAccount', component: create}
]