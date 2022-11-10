<template>
    <main>
    
    <Header />

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

    </main>
  
</template>

<style scoped>
</style>

<script>
  import Header from '@/components/Header.vue'
  export default {
    components: {
      Header
    },
    setup() {

    }
  }

</script>