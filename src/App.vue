<script >
// axios 
import axios from 'axios';
// componenti 
import AppHeader from './components/AppHeader.vue';
import ListaCarte from './components/ListaCarte.vue';

// store 
import { store } from './store';

export default {
  components: {
    AppHeader,
    ListaCarte,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCarta() {
      axios
        .get(store.apiURL)
        .then((res => {
          console.log(res.data.results);
          store.listacarte = res.data.results;
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
    <!-- bottone per cambiare le modalita di ricerca delle carte  -->
    <ListaCarte />
  </main>
</template>

<style lang="scss" >
@use './styles/general.scss';

main {
  padding-top: 20px;

}
</style>
