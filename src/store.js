import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    listacarte: [],
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php",

    async updateListacarte(archetype = '') {
        try {
            const url = `${this.apiURL}${archetype ? `?archetype=${encodeURIComponent(archetype)}` : ''}`;
            const response = await axios.get(url);
            this.listacarte = response.data.data;
        } catch (error) {
            console.error('Errore durante il recupero delle carte:', error);
        }
    }
});


