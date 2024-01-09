<script >
// axios 
import axios from 'axios';
// componenti 
import AppHeader from './components/AppHeader.vue';
import ListaCarte from './components/ListaCarte.vue';
import RicercaCarte from './components/RicercaCarte.vue'

// store 
import { store } from './store';

export default {
  components: {
    AppHeader,
    ListaCarte,
    RicercaCarte,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCarta() {
      axios
        .get(this.store.apiURL)
        .then((response => {
          console.log(response);
          this.store.listacarte = response.data.data.slice(0, 20);

        }))
        .catch((err) => {
          console.log("errori", err);
        });
    }
  },
  created() {
    this.getCarta();
  }



}
</script>

<template>
  <AppHeader />
  <main>
    <RicercaCarte />
    <ListaCarte />
  </main>
</template>

<style lang="scss" >
@use './styles/general.scss';

main {
  background-color: orange;
  padding-top: 50px;
}
</style>
