<script>
import CartaSingola from './CartaSingola.vue';
import { store } from '../store'
export default {
    name: 'ListaCarte',
    components: {
        CartaSingola,
    },
    data() {
        return {
            store,
        }
    }

}
</script>

<template>
    <section class="container">
        <div class="row">
            <div v-for="carta in store.listacarte" :key="carta.id" class="col-6 col-md-4 col-lg-3 mb-5">
                <CartaSingola :info="carta" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>