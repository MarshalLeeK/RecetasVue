
<template>
     <h3>¿Deseas buscar una receta?</h3>
   <hr />
   <input type="text" v-model="search" v-on:keyup.enter="searchData" placeholder="Buscar Receta" class="search-input" />

   <div class="text-center">
      ...
   </div>

   <h3>0 busca por categoria</h3>

   <!---<Category 
  v-for="category in categories" 
  v-bind:key="category.idCategory"
  v-bind:category="category"
  />-->
   <Meal v-for="meal in meals" v-bind:key="meal.idMeal" v-bind:meal="meal" />

   <Category v-for="category in paginated" v-bind:key="category.idCategory" v-bind:category="category" />

   <div class="text-center">
      Actual:{{current}}
   </div>

   <div class="text-center">
      <a @click="prev()">Anterior </a>
      |
      <a @click="next()">Siguiente </a>
   </div>
</template>

<script>
  import axios from "axios";
   import Swal from "sweetalert";
   import Category from "./Category.vue";
   import Meal from "./Meal.vue";
   export default {
      name: "App",
      components: {
         Category,
         Meal,
      },
      data() {
         return {
            categories: [],
            meals: [],
            search: null,
            //Paginacion
            current: 1,
            pageSize: 5,
         };
      },

      mounted() {
         axios
            .get("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((res) => {
               //console.log(res.data.categories);
               this.categories = res.data.categories;
               //idCategory
               //strCategory
               //strCategoryDescription
               //strCategoryThumb
            })
            .catch((err) => {
               console.log(err);
            });
      },
      computed: {
         indexStart() {
            return (this.current - 1) * this.pageSize;
         },
         indexEnd() {
            return this.indexStart + this.pageSize;
         },
         paginated() {
            return this.categories.slice(this.indexStart, this.indexEnd);
         },
      },

      methods: {
         searchData() {
            //Verificar si el campo de busqueda tiene texto
            if (this.search) {
               axios
                  .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + this.search)
                  .then((res) => {
                     //console.log('oprimiste enter creo');
                     //console.log('se esta buscando '+ res.data.meals);
                     this.meals = res.data.meals;
                  })
                  .catch((err) => {
                     console.log(err);
                  });
            } else {
               swal({
                  title: "Atención!!!!!",
                  text: "Se debe ingresar texto para realizar la busqueda",
                  icon: "error",
               });
               //alert("Debes ingresar un texto");
            }
         },
         prev() {
            this.current--;
         },
         next() {
            this.current++;
         },
      },
   };
</script>
