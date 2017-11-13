<template>
  <div class="corpo">
    <transition name="pagina">
      <router-view></router-view>
    </transition>

  </div>
</template>
<script>

import { routes }  from './routes';

export default { 
  data() {
    return {
      routes
    }
  }
}
</script>
<style>

  .corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
  }


  .pagina-enter, .pagina-leave-active {
    opacity: 0
  }
</style>