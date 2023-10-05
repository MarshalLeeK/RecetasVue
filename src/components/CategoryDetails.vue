<template>
   <div>
    <h3>{{category_title}}</h3>
    <Meal v-for="meal in meals" v-bind:key="meal.idMeal" v-bind:meal="meal" />
   </div>
</template>

<script>
 import axios from 'axios';
 import Meal from './Meal.vue';

 export default{
    name:'CategoryDetails',
    components:{
        Meal
    },
    data(){
        return {
            category_title:this.$route.params.title,
            meals:[],
            page:1,
            pages:1
        }
    },
    mounted(){
        console.log(this.$route.params);
        axios
                  .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + this.category_title)
                  .then((res) => {
                     //console.log('oprimiste enter creo');
                     //console.log('se esta buscando '+ res.data.meals);
                     this.meals = res.data.meals;
                  })
                  .catch((err) => {
                     console.log(err);
                  });
    }
 }
</script>
