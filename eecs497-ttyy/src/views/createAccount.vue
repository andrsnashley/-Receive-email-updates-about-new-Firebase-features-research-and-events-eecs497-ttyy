<template>
    <main>
    
    <Header />

    <h2>Sign Up </h2>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Username</label>
        <input v-model="username" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Password</label>
        <input v-model="password" class="form-control" required />
      </div>
  
      <h3>What are your dietary restricttions? </h3>
  
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
      <label for="vehicle1"> vegetarian</label><br>
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
      <label for="vehicle2"> vegan</label><br>
      <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
      <label for="vehicle3"> peanut-free</label><br><br>
       
      <button type="submit" class="btn btn-success mt-3">
        Create User
      </button>
    </form>

    </main>
  
</template>

<style scoped>
  .grid-container {
    display: grid;
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
  
      }
    },
    methods: {
      onSubmit: async function () {

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