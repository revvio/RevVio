
<template>
  <v-app >
    <v-dialog v-model="loading"></v-dialog>

    <transition transition name="slide-left">
   <router-view />
   </transition>
  </v-app>
</template>

<script>

export default {
  name: 'App'
}
</script>
<style>
.slide-x-transition{    animation: slide 0.5s forwards;
    animation-delay: 2s;}
</style>

