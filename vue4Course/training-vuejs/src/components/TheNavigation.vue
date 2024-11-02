<template>
     <div id="nav" >
 

      <AppLink v-for="destination in destinations":key="destination.id":to="{name: 'destination.show' ,params:{id:destination.id,slug:destination.slug}}">
            <p>{{ destination.name }}</p>
           
        </AppLink>
        <AppLink :to="{name:'protected'}">Dashboard</AppLink>
        <AppLink to="https://vueschool.io">Vue school</AppLink>
    </div>
</template>

<script >
import sourceData from '@/data.json'
import AppLink from './AppLink.vue';

export default {

  data(){
    return {
      destinations:sourceData.destinations
    }
  }

}

</script>


