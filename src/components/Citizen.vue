<template>
<div>
    <Header/>
  <v-container class="container">
    <div class="format">
    <div class="prompt">Citizen</div>
    <div class="big-big-container">
      <v-icon class="icon-style" color="#00666C">fa-location-arrow</v-icon>
      <div class="address-container">
        <div class="uppercase">Address</div>
        <div class="number bluish">{{number}}</div>
        <div class="subPrompt bluish">{{street}}</div>
        <div class="zipcode2">{{zipcode}}</div>
      </div>
    </div>
    <div class="big-big-container">
      <v-icon  class="icon-style" color="#00666C">fa-building</v-icon>
      <div class="hood-container">
        <div class="uppercase">Neighborhood</div>
        <div>{{hood}}asdfsd</div>
      </div>
    </div>
    <div class="big-big-container">
      <v-icon  class="icon-style" color="#00666C">fa-user</v-icon>
        <div class="citizen-container another-one">    
        <div class="uppercase">Citizens</div>  
        <div class="another-one">
          <div>{{adultNumber}}</div>
         <div class="zipcode">Adults</div>
         </div>

        <div>{{childNumber}}</div>
        <div class="zipcode">Children</div> 
   
      </div>
    </div> 

    <div class="btn-divider">
    <v-btn color="#25719F" depressed outline round @click="btnAction">Call Dispatch</v-btn> 
    <v-btn class="blue-btn" color="#25719F" depressed round @click="btnAction">Done</v-btn> 
    </div>
    </div>
  </v-container>
</div>
</template>

<script>
import Header from './Header.vue'

  export default {
    name: 'citizen',
    components:{
      Header
    },
    data(){
      return{
        number:'518',
        street:'Boylston Street',
        city:'Boston',
        zipcode:'40325',
        status:'5',
        adultNumber:1,
        childNumber: 2

      }
    },
    methods:{
      btnAction(){
        this.$router.push({name: 'loading'})
      }
    }
  }
</script>

<style scss scoped>
.address-container{
  margin-bottom:30px;
}
.citizen-container{
  display: flex;
 flex-direction: row; 
}
.another-one{
  flex-direction: column; 
}
.icon-style{
  margin:0px 20px 90px 10px;
}


</style>