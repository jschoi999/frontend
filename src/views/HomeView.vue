<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  async mounted() {
    console.log(12341234);
    const {data} = await axios.get("/api/test");
    console.log(data);
  }
}
</script>
