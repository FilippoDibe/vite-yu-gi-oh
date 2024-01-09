<script >
// axios 
import axios from 'axios';
// componenti 
import AppHeader from './components/AppHeader.vue';
import ListaCarte from './components/ListaCarte.vue';
import RicercaCarte from './components/RicercaCarte.vue'
import ConteggioCarte from './components/ConteggioCarte.vue';
// store 
import { store } from './store';

export default {
  components: {
    AppHeader,
    ListaCarte,
    RicercaCarte,
    ConteggioCarte
  },
  data() {
    return {
      store,
      isLoading: true,
    }
  },
  methods: {
    getCarta() {
      this.isLoading = true;
      axios
        .get(this.store.apiURL)
        .then((response => {
          console.log(response);
          this.store.listacarte = response.data.data;
          this.isLoading = false;

        }))
        .catch((err) => {
          console.log("errori", err);
          this.isLoading = false;
        });
    }
  },
  created() {
    this.getCarta();
  }




}
</script>

<template>
  <div class="d-flex justify-content-center align-items-center" v-if="isLoading" style="height: 100vh;">
    <div class="text-center">
      <div class="spinner-border text-primary" role="status">

      </div>
      <h1 class="mt-3">Caricamento in corso...</h1>
    </div>
  </div>
  <div v-else>
    <AppHeader />
    <main>
      <RicercaCarte />
      <ConteggioCarte />
      <ListaCarte />
    </main>
  </div>
</template>

<style lang="scss" >
@use './styles/general.scss';



main {
  background-color: orange;
  padding-top: 50px;
}
</style>
