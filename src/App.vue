<script >
// import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './components/AppHeader.vue';
export default {
  components: {
    AppHeader,
  }

}
</script>

<template>
  <main>
    <AppHeader />
  </main>
</template>

<style lang="scss" >
@use './styles/general.scss';

main {
  padding-top: 20px;
}
</style>
