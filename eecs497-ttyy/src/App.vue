<template>

  <router-view/>
  

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
    function createAccount(){
        router.push("/create");
    }

    
    return { login, createAccount,}
  },
}
</script>