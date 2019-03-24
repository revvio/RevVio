<template>
  <v-container class="container">
    <div class="format">
    <div class="prompt">Please confirm your status</div>
    <div class="big-big-container">
    <v-switch v-model="isActive" color="#00666C"></v-switch>
     <div class="greenish toggleIt">{{toggleMessage}}</div>
     </div>
    <div class="btn-divider">
    <v-btn class="gray-btn" round @click="btnAction">Confirm</v-btn> 
    </div>
    </div>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'

  export default {
    name: 'need',
    data(){
      return{
        isActive: false
      }
    },
    computed:{
      toggleMessage(){
       return !this.isActive ? 'Not active' : 'In the field'
      }
    },
    methods:{
      ...mapState(['selectedCitizen']),
      btnAction(){
        this.$router.push({name: 'queue'})
      }
    }
  }
</script>

<style scss scoped>

.container{
  color: #FFFFFF;
}
.toggleIt{
  margin-top:15px;
  padding-top: 4px;
}
</style>
