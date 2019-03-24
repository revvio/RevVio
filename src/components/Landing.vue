<template>
  <v-container>
    <div class="landing">
    <img class="img" src="https://raw.githubusercontent.com/revvio/Picchas/master/logomark-03.png"/>
    <div class="title">RevVio</div>
    <div class="uppercase">Responder</div>
    </div>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    name: 'landing',
    mounted(){
        setTimeout(()=>{ this.goToLogin() }, 5000);
        this.$store.dispatch('getCitizens').then('here').catch(e =>e)

    },
    methods:
    {
    ...mapActions(['getCitizens']),

        goToLogin(){
            this.$router.push({name:'login'})
        }
    }
  }
</script>

<style scss scoped>
.uppercase{
    
    font-size:20px
}
.landing{
    text-align:center;
    margin:60% 113px 0px 113px;
}
.container{
  background-color: #000FA8;
  color: #FFFFFF;
}
.img{
 width: 150px;
 /* margin: 300px 113px 10px 113px; */
}
</style>