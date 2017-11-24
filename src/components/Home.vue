<template>
  <div id="e3"
    style="max-width: 1980px; margin: auto;">

    <v-toolbar color="orange">
      <v-toolbar-title>Churrascumbras</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon v-on:click="logout">Logout</v-toolbar-side-icon>
    </v-toolbar>

    <v-container fluid
      style="min-height: 0;"
      grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 sm6 v-for="(event, index) in events" v-bind:key="index">
          <my-event :event="event" :index="index"></my-event>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import firebase from 'firebase'
import Event from './Event.vue'

export default {
  name: 'home',

  components: {
    'my-event' : Event
  },

  data: function() {
    return {
      events: [],
      image: "http://edcampmagic.com/wp-content/uploads/2015/10/coming-soon-lg-rotate.png",
      msg: "Welcome to ChurrasCumbras!"
    }
  },
  methods: {
      logout: function() {
        var dis = this;
        firebase.auth().signOut().then(() => {
          dis.$router.replace('login');
        });
      },
      loadEvents: function() {
        var dis = this;
        var user = firebase.auth().currentUser;
        var refEvents = firebase.database().ref('events');

        refEvents.once('value').then(function(snapshot) {
          dis.events = snapshot.val();
        });

        refEvents.on('value', function(snapshot) {
          dis.events = snapshot.val();
        });
      }
  },
  mounted() {
    //Run after the instance has just been mounted
    this.loadEvents();

    //Run right before the mounting begins: the render function is about to be called for the first time.
    //this.beforeMount()
  }
};
</script>
