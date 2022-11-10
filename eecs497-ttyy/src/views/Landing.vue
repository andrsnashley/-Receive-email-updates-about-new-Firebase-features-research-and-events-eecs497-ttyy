<template>
  <main>

    <Header />

    <div id="landing_page_1">
      <div id="landing_page_1_text">
        <h2>Find your next</h2>
        <h2 id="changeText">favorite meal.</h2>
      </div>
    </div>
      
  </main>
</template>
  
<style scoped>
  
  main {
    font-size: 40px;
    text-align: center;
  }
  
  #landing_page_1 {
    padding-top: 200px;
    width: 100%;
    height: 600px;
    display: block;
    background-image: url("../assets/landing_page_background.png");
  }
  
  #landing_page_1_text {
    text-align: center;
    font-weight: 1000;
    color: #463538;
  }

</style>
  
<script>
  import Header from '@/components/Header.vue'
  export default {
    components: {
      Header
    },
    setup() {

    },
    mounted() {
      var text = ["new recipe to try.",
                  "dessert idea.",
                  "datenight dinner.",
                  "favorite meal."];
      var colors = ["#045F62",
                    "#e7806f",
                    "#76b56e",
                    "#463538"];

      var counter = 0;
      var elem = document.getElementById("changeText");
      setInterval(change, 3000);

      function change() {
          elem.innerHTML = text[counter];
          elem.style.color = colors[counter];
          elem.title = text[counter];
          counter++;
          if (counter >= text.length) {
              counter = 0;
          }
      }
    }
  }
</script>