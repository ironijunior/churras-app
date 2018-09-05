<template>
  <v-layout>
    <v-flex xs12 ma-5>
      <v-card class="elevation-9" color="grey lighten-4" flat>
        <v-card-title primary-title class="text-xs-center">
          <div style="width:-webkit-fill-available" class="text-xs-center">
            <h3 class="text-xs-center headline mb-0">Event</h3>
          </div>
        </v-card-title>
        <v-card-text>

          <v-alert v-show="errors.message" color="error">
            {{errors.message}}
          </v-alert>

          <v-alert v-show="success.message" color="success">
            {{success.message}}
          </v-alert>
          <br />

          <v-form v-model="valid" ref="form" lazy-validation v-on:submit.prevent="newevent">
            <v-layout column>
              <v-flex>
                <v-text-field
                  name="name"
                  label="Name"
                  id="name"
                  type="text"
                  v-model="event.name"
                  required></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  name="when"
                  label="Quando"
                  id="when"
                  type="text"
                  v-model="event.when"
                  required></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  name="descr"
                  label="Description"
                  id="descr"
                  type="textarea"
                  v-model="event.descr"
                  required></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  name="image"
                  label="Image URL"
                  id="image"
                  type="text"
                  v-model="event.image">
                </v-text-field>
              </v-flex>
              <v-flex>
                <v-switch label="Open"
                  v-model="event.open"
                  color="orange darken-3"
                  hide-details></v-switch>
              </v-flex>
              <v-flex class="text-xs-center" mt-3>
                <v-btn type="submit" color="primary">Save</v-btn>
              </v-flex>
            </v-layout>
          </v-form>
          <br />
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
    import firebase from 'firebase'

    export default {
      name: 'newevent',
      data: function() {
        return {
          event: {
            name: '',
            when: '',
            descr: '',
            image: '',
            open: false
          },
          e2: true,
          errors: {},
          success: {},
          valid: false
        }
      },
      methods: {
        newevent: function() {
          var dis = this;
          var form = this.$refs.form;

          if(form.validate()) {
            var database = firebase.database();

            var updates = {};
            dis.event.created_at = -1 * new Date();
            updates['/events/' + dis.newEventKey()] = dis.event;
            database.ref().update(updates).then(
              () => {
                form.reset();
                dis.success = {
                  message: "Event has been saved."
                }
              },
              (err) => {
                errors.message = err;
              }
            );
          }
        },

        newEventKey: function() {
          return firebase.database().ref().child('events').orderByChild('created_at').push().key;
        },
      }
    }
</script>
