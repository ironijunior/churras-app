<template>
    <div style="margin-top: 10px">
      <md-card>
        <md-card-media>
          <img src="https://abrilvip.files.wordpress.com/2016/09/churras5.jpg?quality=70&strip=info&w=620" alt="People">
        </md-card-media>

        <md-card-header>
          <div class="md-title">#2 Riachuleto</div>
          <div class="md-subhead">Segunda edição do Riachuleto, o churras da Riachuelo!</div>
        </md-card-header>
      </md-card>

      <br />
      <md-card class="md-accent">
        <md-card-header>
          <div class="md-title">Confirme sua presença!</div>
        </md-card-header>
        <md-card-content>
          <p><md-checkbox
            id="my-test2"
            name="my-test2"
            v-model="checkbox"
            class="md-primary">
            Vai beber? (bebida alcoólica)
          </md-checkbox></p>
          <p><md-checkbox
            id="my-test1"
            name="my-test1"
            v-model="checkbox"
            class="md-primary">
            Vai comer?
          </md-checkbox></p>
          <md-button class="md-raised md-primary">Participar</md-button>
        </md-card-content>
      </md-card>

      <br />
      <md-card>
        <md-card-header>
          <div class="md-title">Participantes</div>
        </md-card-header>
          <md-list class="custom-list md-double-line">
            <md-list-item v-for="person in people">
              <md-avatar>
                <img src="https://placeimg.com/40/40/people/1" alt="People">
              </md-avatar>

              <div class="md-list-text-container">
                <span>{{ person.name }}</span>
                <span>{{ person.floor }}°</span>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon class="md-primary">phone</md-icon>
              </md-button>
              <md-divider class="md-inset"></md-divider>
            </md-list-item>
        </md-list>
      </md-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: [
        {
          name: "Ironi",
          floor: 2
        },
        {
          name: "Italo",
          floor: 2
        },
        {
          name: "Zotto",
          floor: 4
        },
        {
          name: "Henrique",
          floor: 2
        },
        {
          name: "Cesar",
          floor: 1
        }
      ],
      msg: "Welcome to ChurrasCumbras!"
    };
  }
};
</script>


