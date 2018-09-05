<template>
  <v-layout>
    <v-flex xs12 ma-5>
      <v-card class="elevation-9" color="grey lighten-4" flat>
        <v-card-title primary-title class="text-xs-center">
          <div style="width:-webkit-fill-available" class="text-xs-center">
            <img src="../assets/images/logo.png" width="85px" height="85px" />
            <h3 class="text-xs-center headline mb-0">Sign up to ChurrasApp</h3>
          </div>
        </v-card-title>
        <v-card-text>

          <v-alert v-show="errors.message" error>
            {{errors.message}}
          </v-alert>
          <br />

          <v-form v-model="valid" ref="form" lazy-validation v-on:submit.prevent="signup">
            <v-layout column>
              <v-flex>
                <v-text-field
                  name="email"
                  label="Email"
                  id="email"
                  type="email"
                  :rules="emailRules"
                  v-model="email"
                  required></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  name="password"
                  label="Password"
                  hint="At least 6 characters"
                  v-model="password"
                  min="6"
                  id="password"
                  :rules="passRules"
                  :append-icon="e2 ? 'visibility' : 'visibility_off'"
                  :append-icon-cb="() => (e2 = !e2)"
                  :type="e2 ? 'password' : 'text'"
                  required
                  counter></v-text-field>
              </v-flex>
              <v-flex class="text-xs-center" mt-3>
                <v-btn type="submit" color="primary">Sign Up</v-btn>
              </v-flex>
            </v-layout>
          </v-form>
          <br />
          <p class="text-xs-center">Already have an account? <router-link to="/login">Log in</router-link>!</p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
    import firebase from 'firebase'

    export default {
      name: 'signup',
      data: function() {
        return {
          email: '',
          emailRules: [
            (v) => !!v || 'E-mail is required',
            (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
          ],
          password: '',
          passRules: [
            (v) => !!v || 'Password is required',
          ],
          e2: true,
          errors: {},
          valid: false
        }
      },
      methods: {
        signup: function() {
          var dis = this;

          if(this.$refs.form.validate()) {
              firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                  firebase.auth().signInWithEmailAndPassword(dis.email, dis.password).then(
    			          (user) => {
    	                dis.$router.replace('/home');
                    },
          					(err) => {
          						dis.errors = err;
          					}
    				      );
                },
                (err) => {
                  dis.errors = err;
                }
              );
          } else {
            this.errors = { message : "Verifique os campos em vermelho!" };
          }
        }
      }
    }
</script>
