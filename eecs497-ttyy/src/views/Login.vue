<template>
  <main>
    
    <Header />

    <div id="login_background">

    <div id="login">
      <br>
      <h2>Login </h2>
      <br>
      <form @submit.prevent="loginWithPassword">
        <div>
        <label>
          Username
          <input type="text" v-model="emailOrUsername" />
        </label>
        </div>
        <br>
        <div>
        <label>
          Password
          <input type="password" v-model="password" />
        </label>
        </div>
        <br>
        <button type="submit" v-on:click="login()">Log in</button>
      </form>
    </div>
    </div>
  </main>
  
</template>

<style scoped>

#login_background {
  padding-top: 200px;
  width: 100%;
  height: 600px;
  display: block;
  background-image: url("../assets/landing_page_background.png");
}

#login{
  margin: auto;
  text-align: center;
  background-color: moccasin;
  width: 20%;
  height: 300px;
  position: relative;
  top: -70px;
  border-radius: 20px;
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
      function login(){
            router.push("/explore");
        }
        return { login }
    }
  }
</script>