<script>
export default {
    name: 'CartaSingola',
    props: {
        info: Object
    }

}
</script>

<template>
    <div class="card text-center">
        <img :src="info.card_images[0].image_url" class="card-img-top" :alt="info.name">
        <div class="card-body">
            <h5 class="card-title">{{ info.name }}</h5>
            <p class="card-text">{{ info.archetype }} </p>
        </div>
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

.card {
    padding: 5px;
    background-color: orange;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


}

.card {

    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: none;
    margin-bottom: 1rem;

    .card-img-top {
        width: 100%;
        height: auto;
    }

    .card-title {
        font-size: 1rem;
        margin-bottom: .5rem;
        color: white;
    }

    .card-text {
        font-size: .875rem;
    }
}
</style>