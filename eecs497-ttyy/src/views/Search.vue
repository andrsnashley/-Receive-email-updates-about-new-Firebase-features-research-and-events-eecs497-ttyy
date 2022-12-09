<template>
  <logged-in-header/>
    <form action="/action_page.php">
        <div class="row">
            <div class="column">
                <div id="diet">
                    <h2>Diet</h2>
                    <input type="checkbox" id="diet1" name="diet1" value="Balanced">
                    <label for="diet1"> Balanced</label><br>
                    <input type="checkbox" id="diet2" name="diet2" value="High-fiber">
                    <label for="diet2"> High-fiber</label><br>
                    <input type="checkbox" id="diet3" name="diet3" value="High-protein">
                    <label for="diet3"> High-protein</label><br>
                    <input type="checkbox" id="diet4" name="diet4" value="Low-carb">
                    <label for="diet4"> Low-carb</label><br>
                    <input type="checkbox" id="diet5" name="diet5" value="Low-fat">
                    <label for="diet5"> Low-fat</label><br>
                    <input type="checkbox" id="diet6" name="diet6" value="Low-sodium">
                    <label for="diet6"> Low-sodium</label><br><br>
                </div>
                <div id="mealType">
                    <h2>Meal Type</h2>
                    <input type="checkbox" id="type1" name="type1" value="Breakfast">
                    <label for="type1"> Breakfast</label><br>
                    <input type="checkbox" id="diet2" name="diet2" value="Brunch">
                    <label for="diet2"> Brunch</label><br>
                    <input type="checkbox" id="diet3" name="diet3" value="Lunch/Dinner">
                    <label for="diet3"> Lunch/Dinner</label><br>
                    <input type="checkbox" id="diet4" name="diet4" value="Snack">
                    <label for="diet4"> Snack</label><br>
                    <input type="checkbox" id="diet5" name="diet5" value="Teatime">
                    <label for="diet5"> Teatime</label><br>
                </div>
            </div>
            <div class="column">
                <div id="DishType">
                    <h2>Dish Type</h2>
                    <input type="checkbox" id="type1" name="type1" value="Breakfast">
                    <label for="type1"> Alcohol Cocktail</label><br>
                    <input type="checkbox" id="diet2" name="diet2" value="Brunch">
                    <label for="diet2"> Biscuits and Cookies</label><br>
                    <input type="checkbox" id="diet3" name="diet3" value="Lunch/Dinner">
                    <label for="diet3"> Bread</label><br>
                    <input type="checkbox" id="diet4" name="diet4" value="Snack">
                    <label for="diet4"> Cereals</label><br>
                    <input type="checkbox" id="diet5" name="diet5" value="Teatime">
                    <label for="diet5"> Condiments and Sauces</label><br>
                    <input type="checkbox" id="type1" name="type1" value="Breakfast">
                    <label for="type1"> Desserts</label><br>
                    <input type="checkbox" id="diet2" name="diet2" value="Brunch">
                    <label for="diet2"> Drinks</label><br>
                    <input type="checkbox" id="diet3" name="diet3" value="Lunch/Dinner">
                    <label for="diet3"> Eggs</label><br>
                    <input type="checkbox" id="diet4" name="diet4" value="Snack">
                    <label for="diet4"> Ice cream and custard</label><br>
                    <input type="checkbox" id="diet5" name="diet5" value="Teatime">
                    <label for="diet5"> Main course</label><br>
                    <input type="checkbox" id="diet5" name="diet5" value="Teatime">
                    <label for="diet5"> Pancake</label><br>
                    <input type="checkbox" id="type1" name="type1" value="Breakfast">
                    <label for="type1"> Pasta</label><br>
                    <input type="checkbox" id="diet2" name="diet2" value="Brunch">
                    <label for="diet2"> Pastry Pies and Tarts</label><br>
                    <input type="checkbox" id="diet3" name="diet3" value="Lunch/Dinner">
                    <label for="diet3"> Pizza</label><br>
                    <input type="checkbox" id="diet4" name="diet4" value="Snack">
                    <label for="diet4"> Salad</label><br>
                    <input type="checkbox" id="diet5" name="diet5" value="Teatime">
                    <label for="diet5"> Sandwich</label><br>
                    <input type="checkbox" id="diet2" name="diet2" value="Brunch">
                    <label for="diet2"> Side dish</label><br>
                    <input type="checkbox" id="diet3" name="diet3" value="Lunch/Dinner">
                    <label for="diet3"> Soup</label><br>
                    <input type="checkbox" id="diet4" name="diet4" value="Snack">
                    <label for="diet4"> Special Occasions</label><br>
                    <input type="checkbox" id="diet5" name="diet5" value="Teatime">
                    <label for="diet5"> Sweets</label><br>
                </div>
            </div>
            <div class="column">
                <div id="CuisineType">
                    <h2>Cuisine Type</h2>
                    <input type="checkbox" id="type1" name="type1" value="Breakfast">
                    <label for="type1"> American</label><br>
                    <input type="checkbox" id="diet2" name="diet2" value="Brunch">
                    <label for="diet2"> Asian</label><br>
                    <input type="checkbox" id="diet3" name="diet3" value="Lunch/Dinner">
                    <label for="diet3"> British</label><br>
                    <input type="checkbox" id="diet4" name="diet4" value="Snack">
                    <label for="diet4"> Caribbean</label><br>
                    <input type="checkbox" id="diet5" name="diet5" value="Teatime">
                    <label for="diet5"> Central Europe</label><br>
                    <input type="checkbox" id="type1" name="type1" value="Breakfast">
                    <label for="type1"> Chinese</label><br>
                    <input type="checkbox" id="diet2" name="diet2" value="Brunch">
                    <label for="diet2"> Eastern Europe</label><br>
                    <input type="checkbox" id="diet3" name="diet3" value="Lunch/Dinner">
                    <label for="diet3"> French</label><br>
                    <input type="checkbox" id="diet4" name="diet4" value="Snack">
                    <label for="diet4"> Greek</label><br>
                    <input type="checkbox" id="diet5" name="diet5" value="Teatime">
                    <label for="diet5"> Indian</label><br>
                    <input type="checkbox" id="diet5" name="diet5" value="Teatime">
                    <label for="diet5"> Italian</label><br>
                    <input type="checkbox" id="type1" name="type1" value="Breakfast">
                    <label for="type1"> Japanese</label><br>
                    <input type="checkbox" id="diet2" name="diet2" value="Brunch">
                    <label for="diet2"> Korean</label><br>
                    <input type="checkbox" id="diet3" name="diet3" value="Lunch/Dinner">
                    <label for="diet3"> Mediterranean</label><br>
                    <input type="checkbox" id="diet4" name="diet4" value="Snack">
                    <label for="diet4"> Mexican</label><br>
                    <input type="checkbox" id="diet5" name="diet5" value="Teatime">
                    <label for="diet5"> Middle Eastern</label><br>
                    <input type="checkbox" id="diet2" name="diet2" value="Brunch">
                    <label for="diet2"> Nordic</label><br>
                    <input type="checkbox" id="diet3" name="diet3" value="Lunch/Dinner">
                    <label for="diet3"> South American</label><br>
                </div>
                <div>
                    <input type="radio" id="contactChoice1" name="contact" value="email" />
                    <label for="contactChoice1"> Novice</label><br>
                    <input type="radio" id="contactChoice2" name="contact" value="phone" />
                    <label for="contactChoice2"> Intermediate</label><br>
                    <input type="radio" id="contactChoice3" name="contact" value="mail" />
                    <label for="contactChoice3"> Advanced</label><br>
                </div>
            </div>
        </div>
        <a href="/explore">
            <input type="submit" value="Submit" v-on:click="search()">
        </a>
    </form> 
    
</template>

<style scoped>

.column {
  float: left;
  width: 33.33%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

</style>

<script>
  import Header from '@/components/Header.vue'
  import router from "@/router";
  export default {
    components: {
      Header
    },
    setup() {
      function search(){
            router.push("/results");
        }
        return { search }
    }
  }
</script>