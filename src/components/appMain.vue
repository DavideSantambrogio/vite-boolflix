<script>
import { store } from "../store";
import AppCard from "./appCard.vue";
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
    <main>
        <section class="my-container card-container">
            <div class="row">
                <div class="col" v-for="film in store.filmsList">
                    <AppCard :filmObj="film"/>
                </div>
                <div class="col" v-for="series in store.seriesList">
                    <AppCard :seriesObj="series"/>
                </div>
            </div>
        </section>
    </main>
    
  
</template>

<style lang="scss" scoped>
main {
    background-color: gray;
    height: calc(100vh - var(--header-height));
    overflow-y: auto;
}
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

</style>