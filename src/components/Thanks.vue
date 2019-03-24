<template>
<v-container class="container">
    <div class="thankYou"></div>
</v-container>
</template>

<script>
  export default {
    name: 'login-page',
    methods:{
      btnAction(){
        this.$router.push({name: 'status'})
      }
    }
  }
</script>

<style scss scoped>
.thankYou{
    font-size:20px;
}
.container{
  background-color: #00666C !important;
  color: #FFFFFF;
}
</style>
