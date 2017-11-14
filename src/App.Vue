<template>
  <div class="corpo">
   <md-toolbar>
          <h2 class="md-title" style="flex: 1">Churrascumbras</h2>
   </md-toolbar>
   <md-card class="container" style="margin-top: 90px; padding: 10px">
    <transition name="pagina">
      <router-view></router-view>
    </transition>
    </md-card>

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