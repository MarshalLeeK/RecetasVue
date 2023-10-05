<script setup>
   import HelloWorld from "./components/HelloWorld.vue";
   import axios from "axios";
   import Swal from "sweetalert";
   import Category from "./components/Category.vue";
   import Meal from "./components/Meal.vue";
</script>

<template>
   <div>
      <a href="https://vitejs.dev" target="_blank">
         <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
         <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
   </div>

   <div id="nav">
    <router-link to="/">Inicio</router-link>

   </div>
   <router-view> </router-view>
   <!---<HelloWorld msg="Probando apis en vue" />-->
  
</template>

<script>
   export default {
      name: "App",
   };
</script> 

<style scoped>
   .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
   }
   .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
   }
   .logo.vue:hover {
      filter: drop-shadow(0 0 2em #42b883aa);
   }

   .category_container {
      border: 1px solid rgb(255, 240, 31);
      padding: 50px;
   }

   .search-input {
      border: none;
      border-bottom: 1px solid rgb(255, 240, 31);
      min-height: 20px;
      margin-top: 20px;
      margin-bottom: 20px;
   }
   * {
      font-family: monospace;
   }
</style>
