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
