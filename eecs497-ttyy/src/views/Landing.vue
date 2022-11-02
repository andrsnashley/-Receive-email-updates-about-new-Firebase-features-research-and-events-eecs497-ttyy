<template>
    <main>
    <div class="bar">
        <div class="left">
            <h1> TTYY </h1>
        </div>
        <div class="right">
            <button v-on:click = "login()">Login</button>
            <button v-on:click = "createAccount()">Sign Up</button>
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

      .bar {
        margin-top: 45px;
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        border-bottom: #4d4d4f;
    }


    .bar .left {
        position: absolute;
        left: 50px;
        padding-top: 18px;
        padding-bottom: 25px;
    }

.bar .right {
    position: absolute;
    right: 50px;
    /* font-weight: bold;
    color: #4d4d4f; */
}
  
  </style>
  
  <script>
  import router from "@/router";
  import header from "./Header.vue";
  export default {
    components: header, 
    setup(){
      function login(){
          router.push("/login");
      }

      function createAccount(){
          router.push("/create");
      }
      
      return { login, createAccount}
    },
  }
  </script>