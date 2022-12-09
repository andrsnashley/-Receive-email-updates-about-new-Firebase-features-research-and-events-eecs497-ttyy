<template>
  <main>
    
    <Header />

    <div id="login_background">

    
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