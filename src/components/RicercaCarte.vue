<script>
import axios from 'axios';
import { store } from '../store'

export default {
    name: 'RicercaCarte',
    data() {
        return {
            archetypes: [],
            selectedArchetype: null
        };
    },
    watch: {
        selectedArchetype(newVal) {
            if (newVal) {
                store.updateListacarte(newVal.archetype_name);
            }
        }
    },
    mounted() {
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
            .then(response => {
                this.archetypes = response.data;
            })
            .catch(error => {
                console.error('Errore durante il recupero degli archetipi:', error);
            });
    }
};
</script>



<template>
    <div class="container archetipo">
        <select class="form-control" id="archetypeSelect" v-model="selectedArchetype">
            <option value="" disabled selected>Seleziona un Archetype</option>
            <option v-for="(archetype, index) in archetypes" :key="index" :value="archetype">
                {{ archetype.archetype_name }}
            </option>
        </select>
    </div>
</template>
<style lang="scss" scoped>
.archetipo {
    padding-bottom: 50px;
}

select {
    width: 300px;

}
</style>