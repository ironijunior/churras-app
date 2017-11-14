<template>
  <div class="corpo">
   <md-toolbar>
          <h2 class="md-title" style="flex: 1">Churrascumbras</h2>
   </md-toolbar>
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
  .pagina-enter, .pagina-leave-active {
    opacity: 0
  }
</style>
