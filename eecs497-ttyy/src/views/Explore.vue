
<template>
  
  <div v-if="!loading">Loading</div>

  <div v-else>
    <div class = "grid-container">

      <div v-for = "recipe in recipes">
        <div class="image">
          <img class="image__img" v-bind:src="recipe.image">
          <div class="image__overlay">
            <div class="image__title">{{recipe.label}}</div>
            <div class="image__cal">
              <font-awesome-icon style="display: inline; padding-right: 5px;" icon="fa-solid fa-fire" size="2x" />
              <p style="display: inline;">{{recipe.calories}} cal.</p>
            </div>
            <div class="image__ingr">
              <font-awesome-icon style="display: inline; padding-right: 5px;" icon="fa-solid fa-cart-shopping" size="2x"/>
              <p style="display: inline;">{{recipe.ingredientLines.length}} ingr.</p>
          </div>
          </div>
        </div>
      </div>
        
    </div>
  </div>
    
    

</template>

<style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

  .image{
    position: relative;
  }

  .image__img{
    display: block;
    width: 100%;
  }

  .image__overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    padding: 20px;
    text-align: center;
    transition: opacity 0.25s;
  }

  .image__overlay:hover{
    opacity: 1;
  }

  .image__title{
    font-size: 1.5em;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .image__cal{
    white-space: nowrap;
    padding-bottom: 10px;
  }

</style>

<script>
  import LoggedInHeader from '@/components/LoggedInHeader.vue'
  import axios from 'axios'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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


