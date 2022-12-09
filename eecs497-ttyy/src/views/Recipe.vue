<template>
  <ExploreHeader />
  <div style="display: inline;">
    <img style="display: inline;" class="image__img" v-bind:src="recipe.image">
    <div style="display: inline;">
      <h1 > {{recipe.label}} </h1>
      <a :href="recipe.url" class="button" >Instructions Page</a>
    </div>
  </div>

  <h3 > Dietary Labels </h3>
  
  <div v-for = "diet_label in recipe['dietLabels']">
    <ul>
      <li>{{diet_label}}</li>
    </ul>
  </div>

  <h3 > Ingredients </h3>
  <div v-for = "ingredient in recipe['ingredientLines']">
    <ul>
      <li>{{ingredient}}</li>
    </ul>
  </div>

  <h3 >{{recipe.calories}} calories</h3>
    
</template>

<style>
  .button {
    background-color: #1c87c9;
    border: none;
    color: white;
    padding: 20px 34px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin: 4px 2px;
    cursor: pointer;
  }
</style>

<script>
import ExploreHeader from '@/components/ExploreHeader.vue'
import axios from 'axios'

export default {
    components:{
      ExploreHeader
    },
    data() {
      return {
        loading: false,
        id:'',
        recipe: {},
      }
    },

    created() {
      this.id = this.$route.params.id
      this.fetchData()
    },
    methods:{
        fetchData: function() {
            // var url = `/api/recipes/v2/${this.id}`
            var url = `https://api.edamam.com/api/recipes/v2/${this.id}?type=public&app_id=7cf5b75d&app_key=07afc6fea9813514801d3191aea1f100&field=uri&field=label&field=image&field=images&field=source&field=url&field=shareAs&field=yield&field=dietLabels&field=healthLabels&field=cautions&field=ingredientLines&field=ingredients&field=calories&field=glycemicIndex&field=totalCO2Emissions&field=co2EmissionsClass&field=totalWeight&field=totalTime&field=cuisineType&field=mealType&field=dishType&field=totalNutrients&field=totalDaily&field=digest&field=tags`
            console.log(url)
            // var url = "https://api.edamam.com/api/recipes/v2/_232e9cb43477ccaaffb63e8603d10fb2?type=public&app_id=7cf5b75d&app_key=07afc6fea9813514801d3191aea1f100&field=label&field=image&field=dietLabels&field=healthLabels&field=ingredientLines&field=ingredients&field=calories&field=co2EmissionsClass&field=tags"
            fetch(url)
            .then(response => response.json())
            .then(data => {
                this.recipe = data["recipe"];
                console.log(this.recipe);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => this.loading = true)   
        }
    }

}
</script>
