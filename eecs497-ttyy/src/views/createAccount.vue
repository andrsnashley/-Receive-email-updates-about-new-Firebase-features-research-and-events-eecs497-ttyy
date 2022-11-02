<template>

    <main>
    <div id="app">
        <div class="bar">
        <div class="left">
            <h1> TTYY </h1>
        </div>
        <div class="right">
            <button v-on:click = "login()">Login</button>
            <button v-on:click = "createAccount()">Sign Up</button>
        </div>
        </div>
        <h2>Sign Up </h2>
        <form @submit.prevent="loginWithPassword">
            <label>
                username
                <input type="text" v-model="emailOrUsername" />
            </label>
            <label>
                Password
                <input type="password" v-model="password" />
            </label>
        
            <h3>What are your dietary restricttions? </h3>
        
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
            <label for="vehicle1"> vegetarian</label><br>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
            <label for="vehicle2"> vegan</label><br>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
            <label for="vehicle3"> peanut-free</label><br><br>
            

            <button type="submit">Create Account</button>
        </form>
    </div>
    </main>
  
</template>

// <script>
//   import router from "@/router";

//   export default {

//     setup(){
//       function login(){
//           router.push("/login");
//       }

//       function createAccount(){
//           router.push("/create");
//       }
      
//       return { login, createAccount}
//     },
//   }
// </script>

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
