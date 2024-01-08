<script>
export default {
    name: 'CartaSingola',
    props: {
        info: Object
    }

}
</script>

<template>
    <div class="carta text-center">
        <img :src="info.card_image.image_url" class="img-fluid mb-3" :alt="info.name">
        <h4>info.name</h4>
        <div class="font-weight-bold">info.archetype</div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

h4 {
    text-transform: capitalize;

    &::after {
        content: '';
        display: block;
        width: 40px;
        height: 1px;
        margin: 1rem auto;
    }
}

img {
    box-shadow: 0 0 6px 3px rgba(#000, 0.15);
}
</style>