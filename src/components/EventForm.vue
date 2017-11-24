<template>
  <v-form v-model="valid" ref="form" lazy-validation v-on:submit.prevent="participate">
    <v-layout column>
      <v-flex>
        <v-switch label="Vai beber?"
          v-model="userEvent.drink"
          color="orange darken-3"
          hide-details></v-switch>
      </v-flex>
      <v-flex>
        <v-switch label="Vai comer?"
          v-model="userEvent.eat"
          color="orange darken-3"
          hide-details></v-switch>
      </v-flex>
      <v-flex class="text-xs-center" mt-3>
        <v-btn type="submit" color="orange">Participate</v-btn>
      </v-flex>
    </v-layout>
    <v-snackbar
      :timeout="1200"
      color="success"
      :vertical="true"
      v-model="snackbar">
      Salvo!
    </v-snackbar>
  </v-form>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'eventForm',
  props: {
    event : {
      type : Object
    },
    index : {
      type : String
    }
  },
  data: function() {
    return {
      userEvent : {
        drink: false,
        eat: false
      },
      valid: false,
      snackbar : false
    }
  },
  methods: {
      participate: function() {
        var dis = this;
        var form = dis.$refs.form;
        var user = firebase.auth().currentUser;
        var database = firebase.database();

        if(form.validate()) {
          var updates = {};
          updates['/user-events/' + user.uid + "/" + dis.index] = dis.userEvent;
          database.ref().update(updates).then(() => {
            dis.snackbar = true;
          });
        }
      },

      fillUserEvent: function(snapshot) {
        var dis = this;
        if(snapshot.val() !== null) {
          dis.userEvent = snapshot.val();
        } else {
          dis.userEvent = {
            drink: false,
            eat: false
          }
        }
      }
  },

  mounted : function() {
    var dis = this;
    var user = firebase.auth().currentUser;

    var refUserEvents = firebase.database().ref('user-events').child(user.uid).child(dis.index);

    refUserEvents.once('value').then(function(snapshot) {
      dis.fillUserEvent(snapshot);
    });

    refUserEvents.on('value', function(snapshot) {
      dis.fillUserEvent(snapshot);
    });
  }
};
</script>
