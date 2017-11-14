<template>
    <div>
          <form action="/">
            <h2 class="md-title card-heading">Login</h2>

            <div class="error-message" v-if="error">
              <p>{{ error }}</p>
            </div>

            <md-input-container>
              <label>Email</label>
              <md-input
                  class="field-line"
                  placeholder="Email"
                  v-model="credentials.email">
              </md-input>
            </md-input-container>

            <md-input-container md-has-password>
              <label>Password</label>
              <md-input
                  class="field-line"
                  placeholder="Password"
                  type="password"
                  v-model="credentials.password">
              </md-input>
            </md-input-container>

            <md-button
                class="md-raised md-primary button-line"
                @click="submit()">
              Login
            </md-button>

            <md-card-content>
              Don't have an account?
              <router-link :to="'/signup'">Create one</router-link>.
            </md-card-content>
          </form>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          credentials: {
            email: '',
            password: ''
          },
          error: ''
        }
      },
      methods: {
        submit() {
          var credentials = {
            email: this.credentials.email,
            password: this.credentials.password
          }
          console.log(this.credentials);
          auth.login(this.credential, 'secret');
        }
      }
    }
</script>
