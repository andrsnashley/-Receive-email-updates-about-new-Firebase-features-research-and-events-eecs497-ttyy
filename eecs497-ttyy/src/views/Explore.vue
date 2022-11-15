
<template>

  <div v-if="!loading">Loading</div>

  <div v-else>
    <div class = "grid-container">

      <div v-for = "recipe in recipes">

        <div>{{recipe.label}}</div>
        <img v-bind:src="recipe.image">

      </div>
        
    </div>
  </div>
    
    

</template>

<style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

</style>

<script>
  import LoggedInHeader from '@/components/LoggedInHeader.vue'
  import axios from 'axios'
  // import ref from 'vue'
  export default {
    components: {
      LoggedInHeader
    },
    data() {
      return {
        loading: false,
        recipes: [],
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData: function() {
        var url = "https://api.edamam.com/api/recipes/v2?type=public&app_id=7cf5b75d&app_key=07afc6fea9813514801d3191aea1f100&mealType=Lunch&random=true";

        fetch(url)
          .then(response => response.json())
          .then(data => {

            this.recipes = data["hits"];
            console.log(this.recipes);

            for (let i = 0; i < this.recipes.length; i++) {
              this.recipes[i] = this.recipes[i]['recipe'];
              this.recipes[i]["id"] = i;
            }
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => this.loading = true)

        
      }
    
    },
  }


</script>


