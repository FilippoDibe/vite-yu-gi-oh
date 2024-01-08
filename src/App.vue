<script >
// import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './components/AppHeader.vue';
import ListaCarte from './components/ListaCarte.vue';
export default {
  components: {
    AppHeader,
    ListaCarte,
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
