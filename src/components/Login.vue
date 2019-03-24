<template>
<v-container class="container">
  <div class="title login-title ">RevVio</div>
          <v-flex xs12 sm6 md3>
            <div class="uppercase">username</div>
         <v-text-field
            label="Solo"
            placeholder="username"
            solo
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md3>
          <div class="uppercase">password</div>
          <v-text-field
            label="Solo"
            placeholder="password"
            type="password"
            append-icon="fa-eye"
            solo
          ></v-text-field>
        </v-flex>
          <v-btn @click="btnAction" class="login" round >Login</v-btn> 
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

.container{
  background-color: #00666C !important;
  color: #FFFFFF;
}
</style>
