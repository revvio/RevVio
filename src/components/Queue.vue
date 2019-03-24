<template>
  <div>
    <Header/>
    <v-container class="container">
    <div class="prompt">Your Queue</div>
    <div class="myCard" @click="goToCitizenPage">
      <div class="information"> 
        <div class="number">{{number}}</div>
        <div class="subPrompt">{{street}}</div>
        <div class="zipcode">{{city}} {{zipcode}}</div>
      </div>
      <div class="status">
        <v-icon class="caret" color="#C92637">fas fa-caret-up</v-icon>
        {{status}}
     </div>
    </div>
    <div class="btn-divider">
    <v-btn class="gray-btn" round @click="btnAction">Load More</v-btn> 
    </div>
  </v-container>
  </div>
</template>

<script>
import Header from './Header.vue'
  export default {
    name: 'current-citizen',
    components:{
      Header    
    },
    data(){
      return{
        number:'518',
        street:'Boylston Street',
        city:'Boston',
        zipcode:'40325',
        status:'5'
      }
    },
    methods:{
      btnAction(){
        this.$router.push({name: 'status'})
      },
      goToCitizenPage(){
        this.$router.push({name: 'citizen'})
      }
    }
  }
</script>

<style scss scoped>
.information{
  margin:20px;
  align-content: left;
}

.caret{
  margin-bottom:5px
}
.status{
 margin: 13px 20px 20px 20px;
 font-weight: 600;
 font-size: 28px;
 color: #C92637;
}

.myCard{
  display:flex;
  justify-content: space-between;
  flex-flow: row wrap;
  padding:33px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.48);
  border-radius: 5px;
  padding:5px !important;
  min-width:315px !important;
  min-height:190px !important;
  border-left-color: red !important;
  border-left-style: thick !important;
  border-left-width: 100px !important;
}
</style>