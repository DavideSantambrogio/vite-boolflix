<script>
import { store } from "../store";
export default {
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <section>
        <div v-for="film in store.filmsList">
            <h2>{{ film.title }}</h2>
            <h3>{{ film.original_title }}</h3>
            <p>{{ film.original_language }}</p>
            <p>{{ film.vote_average }}</p>
        </div>
    </section>
  
</template>

<style lang="scss" scoped>


</style>