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

        <v-flex xs6 v-for="(event, index) in events" v-bind:key="index">
          <v-card color="grey lighten-4" class="elevation-4">
            <v-card-media
              :src="image" height="200px">
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
      <v-btn class="blue" v-on:click="test">Test</v-btn>
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
      test: function() {
        var dis = this;
        var database = firebase.database();
        var eventsRef = database.ref('events');

        database.ref('events').on('value', function(snapshot) {
          dis.events = snapshot.val();
          console.info('Array:', dis.events);
        });

        var eventos = [{
          "name": "Churrass na Talbua",
          "descr": "Coming...",
          "open": false,
          "when": "15/12/2017"
        }, {
          name: "#2 Riachuleto",
          descr: "Segunda edição do churras mais TOP da Riachuelo!",
          open: true,
          when: "18/01/2018"
        }, {
          name: "Rafting Maroto",
          descr: "Rafting da Riachuelo!",
          open: true,
          when: "09/12/2017"
        }];

        eventos.forEach(function(event) {
          var updates = {};
          updates['/events/' + dis.newEventKey()] = event;
          console.log(database.ref().update(updates));
        });
      },

      newEventKey: function() {
        return firebase.database().ref().child('events').push().key;
      }
  }
};
</script>
