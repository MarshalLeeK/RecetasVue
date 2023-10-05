import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Home from './components/Home.vue';
import CategoryDetails from './components/CategoryDetails.vue';
import MealsDetails from './components/MealsDetails.vue';

//importar el router
import {createWebHistory, createRouter} from 'vue-router';


//Definimos las rutas

const routes=[
    {
        path:"/",
        name:"Home",
        component:Home
    },
    {

        path:"/category/:title",
        name:"Category",
        component:CategoryDetails
    },
    {
        path:"/meal/:id",
        name:"Meal",
        component:MealsDetails
    },
]
const router=createRouter({
     history:createWebHistory(),
     routes

});

export default router;

createApp(App).use(router).mount('#app')
