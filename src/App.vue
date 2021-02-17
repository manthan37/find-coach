<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
  components: {
    TheHeader
  },
  computed:{
    didAutoLogout(){
      return this.$store.getters.didAutoLogout;
    }
  },
  created(){
    this.$store.dispatch('tryLogin');
  },
  watch:{
    didAutoLogout(curVal, oldVal){
      if(curVal && curVal !== oldVal){
        this.$router.replace('/coaches');
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
  margin: 0;
}

.route-enter-from{
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to{
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active{
  transition: all 0.3s ease-in;
}



.route-enter-to,
.route-leave-from{
  opacity: 1;
  transform: translateY(0px);
}

</style>
