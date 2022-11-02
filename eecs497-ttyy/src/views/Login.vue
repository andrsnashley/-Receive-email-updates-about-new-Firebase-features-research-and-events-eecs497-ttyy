<template>

  <main>
  <div id="app">
    <div id="alert" v-if="alert">{{ alert }}</div>
      <div class="bar">
        <div class="left">
            <h1> TTYY </h1>
        </div>
        <div class="right">
            <button v-on:click = "login()">Login</button>
            <button v-on:click = "createAccount()">Sign Up</button>
        </div>
    </div>

    <h2>Login </h2>
    <form @submit.prevent="loginWithPassword">
      <label>
        username
        <input type="text" v-model="emailOrUsername" />
      </label>
      <label>
        Password
        <input type="password" v-model="password" />
      </label>
      <button type="submit">Log in</button>
    </form>
  </div>
  </main>

</template>

<style scoped>


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
  export default { 
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