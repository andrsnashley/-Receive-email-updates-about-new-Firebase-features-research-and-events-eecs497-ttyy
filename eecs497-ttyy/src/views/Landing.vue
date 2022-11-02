<template>

    <main>
        <div class="bar">
              <div class="left">
                  <a href="/">
                      </a>
              </div>
              <div class="right">
                  <button v-on:click = "login()">Login</button>
                  <h4 class="divider">|</h4>
                  <a href="/explore/">Sign Up</a>
              </div>
          </div>
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
    background-image: url("assets/landing_page_background.png");
  }
  
  #landing_page_1_text {
    text-align: center;
    font-weight: 1000;
    color: #463538;
  }
  
  </style>
  
  <script>
  import router from "@/router";
  export default {
    setup(){
      function login(){
          router.push("/login");
      }
      
      return { login, }
    },
  }
  </script>