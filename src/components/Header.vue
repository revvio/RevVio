<template>
<div class="header">
    <v-icon color="#006686">fa-align-left</v-icon>
    <div class="bigStatus">
        <div class="bigBig">
        <v-icon color="#00666C">{{statusIcon()}}</v-icon> 
    {{updatedStatus()}}
    </div>
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex'

  export default {
    name: 'header',
    methods:{
      ...mapState(['status']),
      updatedStatus(){
          return this.status ? 'in field' : 'active'
      },
      statusIcon(){
         return this.status ? 'fa-user' : 'fa-check'
      }
    }

  }
</script>

<style scss scoped>

</style>