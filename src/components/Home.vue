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
      grid-list-lg>
      <v-layout row wrap>

        <v-flex xs12 v-for="(event, index) in events" v-bind:key="index">
          <v-card color="grey lighten-4" class="elevation-4">
            <v-card-media
              :src="event.image ? event.image : image" height="200px">
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
              <v-btn class="orange" slot="activator" v-if="event.open">Join</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'home',

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
