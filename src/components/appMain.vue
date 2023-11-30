<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";
export default {
    components:{
        AppCard
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <section>
        <div  v-for="film in store.filmsList">
            <AppCard :filmObj="film"/>
        </div>
    </section>
  
</template>

<style lang="scss" scoped>


</style>