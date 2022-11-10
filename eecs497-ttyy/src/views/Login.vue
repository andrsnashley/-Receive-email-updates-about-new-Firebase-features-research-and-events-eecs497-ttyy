<template>
  <main>
    
    <Header />

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