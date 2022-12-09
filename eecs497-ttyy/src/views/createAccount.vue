<template>
    <main>
    
    <Header />
    <div id="create_background">

    <div id="create">
      <br>
      <h2>Sign Up </h2>
      <br>
      <form @submit.prevent="createWithPassword">
        <div>
        <label>
          Email
          <input type="text" v-model="email" />
        </label>
        </div>
        <br>
        <div>
        <label>
          Username
          <input type="text" v-model="username" />
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
        <div>
        <label>
          Re-Type Password
          <input type="password" v-model="passwordAgain" />
        </label>
        </div>
        <br>
        <button type="submit" v-on:click="login()">Sign Up</button>
      </form>
    </div>
    </div>
    </main>
  
</template>

<style scoped>

#create_background {
  padding-top: 200px;
  width: 100%;
  height: 600px;
  display: block;
  background-image: url("../assets/landing_page_background.png");
}

#create{
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
  import { createUser } from '@/firebase'
  import { reactive } from 'vue'
  import Header from '@/components/Header.vue'
  export default {
    components: {
      Header
    },
    data() {
      return {
        username: "",
        password: "",
        retype: "",
  
      }
    },
    methods: {
      onSubmit: async function () {
        if(this.password != this.retype){
          alert("Passwords don't match!");
        }
        var user = {
          "username": this.username,
          "password": this.password
        };
        console.log(user);
        await createUser({ user })
      }
    }
  }
</script>