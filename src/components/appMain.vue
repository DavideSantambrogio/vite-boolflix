<script>
import { store } from "../store";
import AppCard from "./appCard.vue";
import axios from 'axios';

export default {
  components: {
    AppCard
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    // Chiamare la funzione per cercare i film e le serie TV di tendenza
    this.searchForTrending();
  },
  methods: {
    searchForTrending() {
      // Utilizzare axios.all per effettuare richieste multiple in modo concorrente
      axios
        .all([
          axios.get(`${this.store.apiBase}/trending/movie/week`, {
            params: {
              api_key: this.store.apiKey,
            },
          }),
          axios.get(`${this.store.apiBase}/trending/tv/week`, {
            params: {
              api_key: this.store.apiKey,
            },
          }),
        ])
        // Utilizzare axios.spread per gestire le risposte dalle richieste multiple
        .then(axios.spread((trendingMovies, trendingSeries) => {
          // Aggiornare filmsList e seriesList nello store con i dati della risposta
          this.store.filmsList = trendingMovies.data.results;
          this.store.seriesList = trendingSeries.data.results;
        }))        
    },
  },
}
</script>

<template>
  <main>
    <section class="my-container card-container">
      <div class="row">
        <h2>Film</h2>
        <!-- Iterare attraverso filmsList e visualizzare ciascun film utilizzando il componente AppCard -->
        <div class="col-3" v-for="film in store.filmsList">
          <AppCard :filmObj="film"/>
        </div>
        <h2>Serie tv</h2>
        <!-- Iterare attraverso seriesList e visualizzare ciascuna serie utilizzando il componente AppCard -->
        <div class="col-3" v-for="series in store.seriesList">
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