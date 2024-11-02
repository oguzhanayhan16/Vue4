<script >
</script>

<template>
  <div>
    <TheNavigation/>
    <div class="container">
      <router-view class="view left-sidebar" name="LeftSideBar" ></router-view>
      <router-view :key="$route.path" class="main-view"></router-view>

    </div>
    
  </div>

</template>
<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: { TheNavigation },
};
</script>
