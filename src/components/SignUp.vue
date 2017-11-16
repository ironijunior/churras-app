<template>
  <v-layout>
    <v-flex xs12 ma-5>
      <v-card class="elevation-9">
        <v-card-title primary-title class="text-xs-center">
          <div style="width:-webkit-fill-available" class="text-xs-center">
            <h3 class="text-xs-center headline mb-0">Sign Up</h3>
          </div>
        </v-card-title>
        <v-card-text>
          <form>
            <v-layout column>
              <v-flex>
                <v-text-field
                  name="name"
                  label="Name"
                  id="name"
                  type="text"
                  required></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  name="email"
                  label="Email"
                  id="email"
                  type="email"
                  required></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  name="password"
                  label="Password"
                  id="password"
                  type="password"
                  required></v-text-field>
              </v-flex>
              <v-flex class="text-xs-center" mt-3>
                <v-btn primary type="submit">Sign Up</v-btn>
              </v-flex>
            </v-layout>
          </form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
    export default {
      data() {
        return {
          data: ''
        }
      },

      methods: {

      }
    }
</script>
