<template>
    <v-app >
    <Nav />
    <v-content class="mx-15 mb-15">
      <router-view></router-view>
    </v-content>
      
  </v-app>
</template>

<script>
import Nav from '@/components/Nav'
export default {
  name: 'App',
  components:{
    Nav
  },
}
</script>

<style scoped>

</style>