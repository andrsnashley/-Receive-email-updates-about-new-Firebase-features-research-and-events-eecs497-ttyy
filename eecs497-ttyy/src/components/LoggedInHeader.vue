<template>
    <main>
  
      <div class="bar">
          <div class="left">
              <h1> TTYY </h1>
          </div>
          <div class="right">
            <button class="button-23" style = "margin-right: 40px;" v-on:click = "explore()">Explore</button>
          </div>
      </div>
        
    </main>
  </template>
    
  <style scoped>
    
    main {
      font-size: 40px;
      text-align: center;
    }
  
    .bar {
      margin-top: 45px;
      margin-bottom: 50px;
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
        right: 100px;
        /* font-weight: bold;
        color: #4d4d4f; */
    }
    
    .button-23 {
      background-color: #FFFFFF;
      border: 1px solid #222222;
      border-radius: 8px;
      box-sizing: border-box;
      color: #222222;
      cursor: pointer;
      display: inline-block;
      font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;
      font-size: 16px;
      font-weight: 600;
      line-height: 20px;
      margin: 0;
      outline: none;
      padding: 13px 23px;
      position: relative;
      text-align: center;
      text-decoration: none;
      touch-action: manipulation;
      transition: box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s;
      user-select: none;
      -webkit-user-select: none;
      width: auto;
    }
  
    .button-23:focus-visible {
      box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
      transition: box-shadow .2s;
    }
  
    .button-23:active {
      background-color: #F7F7F7;
      border-color: #000000;
      transform: scale(.96);
    }
  
    .button-23:disabled {
      border-color: #DDDDDD;
      color: #DDDDDD;
      cursor: not-allowed;
      opacity: 1;
    }
  
  </style>
    
  <script>
    import router from "@/router";
    export default {
      setup() {
  
        function explore(){
            router.push("/explore");
        }
        
        return { explore,}
      },
   
    }
  </script>