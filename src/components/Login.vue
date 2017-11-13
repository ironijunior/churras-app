<template>
    <div>
      <md-toolbar>
          <h2 class="md-title" style="flex: 1">Churrascumbras</h2>
      </md-toolbar>
      <md-card class="container" style="margin-top: 90px; padding: 10px">
          <form action="/">
            <h2 class="md-title card-heading">Login</h2>

            <md-input-container>
              <label>Email</label>
              <md-input class="field-line" placeholder="Email"></md-input>
            </md-input-container>

            <md-input-container md-has-password>
              <label>Password</label>
              <md-input class="field-line" placeholder="Password" type="password"></md-input>
            </md-input-container>

            <md-button class="md-raised md-primary button-line">Login</md-button>

            <md-card-content>Don't have an account? <a v-link="'signup'">Create one</a></md-card-content>
          </form>
      </md-card>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          quote: ''
        }
      },
      methods: {
        getQuote() {
          this.$http.get('echo.jsontest.com/id/1/nome/italinho/email/iojasijoasi', (data) => {
            this.quote = data;
          }).error((err) => { console.log(err); })
        }
      }
    }
</script>
