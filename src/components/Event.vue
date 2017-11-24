<template>
  <v-card color="grey lighten-4" class="elevation-4" height="100%">
    <v-card-media
      :src="event.image ? event.image : image" height="300">
    </v-card-media>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{event.name}}</h3>
        <p><h5>{{event.when}}</h5></p>
      </div>
    </v-card-title>
    <v-card-text>
      <div class="text-xs-left grey--text">{{event.descr}}</div>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="orange" slot="activator" v-if="event.open" @click.native="join">{{show ? 'Hide' : 'Join'}}</v-btn>
    </v-card-actions>
    <v-slide-y-transition>
      <v-card-text v-show="show">
        <event-form :event="event" :index="index" :userEvent="userEvent"></event-form>
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
import firebase from 'firebase'
import EventForm from './EventForm.vue'

export default {
  name: 'event',
  components: {
    EventForm
  },
  props: {
    event : {
      type : Object
    },
    index : {
      type : String
    },
    userEvent : {
      type : Object
    }
  },
  data: function() {
    return {
      show: false,
      image: "http://edcampmagic.com/wp-content/uploads/2015/10/coming-soon-lg-rotate.png"
    }
  },
  methods: {
      join: function() {
        var dis = this;
        dis.show = !dis.show;
      }
  }
};
</script>
