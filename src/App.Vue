<template>
  <v-app light>
    <div class="corpo">
     <transition name="pagina">
        <router-view></router-view>
     </transition>

    </div>
  </v-app>
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
    /*background-color: #ffc691;*/
    background-color: #ededed;
  }
</style>
