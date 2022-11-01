import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(App).mount('#app')

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


