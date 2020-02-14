<template>
  <ion-grid>
      <ion-row>
          <ion-col size-md="4" offset-md="4">
              <ion-card>
                  <ion-card-header color="secondary">
                      <ion-card-tittle>
                          New Product
                      </ion-card-tittle>
                  </ion-card-header>
                  <ion-card-content>
                      <ion-item class="ion-margin-vertical">
                          <ion-label position="floating">
                              Correo
                          </ion-label>
                          <ion-input id="productName" type="text"></ion-input>
                      </ion-item>
                      <ion-item>
                          <ion-label position="floating">
                              Contraseña
                          </ion-label>
                          <ion-input id="productPrice" type="number"></ion-input>
                      </ion-item>
                      <ion-button id="buttonSave">
                          <ion-icon name="add-circle" slot="start"></ion-icon>
                          Save
                      </ion-button>
                      <ion-button id="buttonCancel" color="danger" fill="outline">
                          <ion-icon name="trash" slot="start"></ion-icon>
                          Clear
                      </ion-button>
                  </ion-card-content>
              </ion-card>
          </ion-col>
      </ion-row>
      <ion-row>
          <ion-col size-md="4" offset-md="4">
              <ion-list id="productList">

              </ion-list>
          </ion-col>
      </ion-row>
  </ion-grid>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      posts: []
    };
  },
  async mounted() {
    const response = await axios.get(
      "https://www.reddit.com/r/marvelstudios.json"
    );
    this.posts = response.data.data.children;
  },
  methods: {
    viewMore(post) {
      this.$router.push({name: 'detail', params: {post}})
    }
  }
};
</script>
</script>
