<template>
  <div id="e3"
    style="max-width: 1980px; margin: auto;">

    <v-toolbar class="orange">
      <v-toolbar-title>Churrascumbras</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon></v-toolbar-side-icon>
    </v-toolbar>

    <v-container fluid
      style="min-height: 0;"
      grid-list-lg>
      <v-layout row wrap>

        <v-flex xs12 v-for="event in events">
          <v-card>
            <v-card-media
              :src="event.image" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{event.name}}</h3>
              </div>
            </v-card-title>
            <v-card-text>
              <div class="text-xs-left grey--text">{{event.descr}}</div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="orange" slot="activator" v-if="event.open"  @click.native="show = !show">Join</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          name: "#2 Riachuleto",
          descr: "Segunda edição do churras mais TOP do time da Riachuelo!",
          image: "https://revistasaboresdosul.com.br/wp-content/uploads/2015/09/semana-farroupilha-no-peixe-urbano-traz-grandes-ofertas-2.jpg",
          open: true
        },
        {
          name: "Rafting Maroto",
          descr: "Rafting do time da Riachuelo!",
          image: "https://www.raftingtara.com/files/rafting/rafting-10.jpg",
          open: true
        },
        {
          name: "Churras na Tálbua",
          descr: "Coming...",
          image: "http://edcampmagic.com/wp-content/uploads/2015/10/coming-soon-lg-rotate.png",
          open: false
        }
      ],
      msg: "Welcome to ChurrasCumbras!"
    };
  }
};
</script>
