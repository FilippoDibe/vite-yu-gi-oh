<script>

import { store } from '../store';
export default {
    name: 'ConteggioCarte',
    computed: {
        // Calcola il numero di carte basato sullo stato attuale di store.listacarte
        numeroCarte() {
            return store.listacarte.length;
        }
    }
}
</script>

<template>
    <div class="container">
        <h1>Numero di carte trovate: {{ numeroCarte }}</h1>
    </div>
</template>

<style lang="scss" scoped>
div {
    background-color: black;
    color: white;
}
</style>
