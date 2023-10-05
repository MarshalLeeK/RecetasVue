<template >
    <div class="category_container">
        <img @click="openMealsDetails"  v-bind:src="meal.strMealThumb" v-bind:alt="meal.strMeal" width="300">
        <p><b>{{meal.strMeal}}</b></p>
       <h6><b>Categoría</b>:{{meal.strCategory}} | Orígen : {{meal.strCategory}}</h6>
      
      </div>
    </template>  
    
    <script>
    
    export default {
        props:["meal"],
        methods:{
            openMealsDetails(){
            this.$router.push("/meal/" + this.meal.idMeal);
            //console.log(this.category.strCategory);
        }
    }
    }
    </script>
    