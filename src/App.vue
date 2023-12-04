<script>
  // Importazione dei componenti e delle risorse esterne necessarie
  import AppHeader from './components/appHeader.vue';
  import axios from 'axios';
  import { store } from "./store";
  import AppMain from './components/appMain.vue';

  export default {
    components: {
      AppHeader,
      AppMain
    },    
    data() {
      return {
        // Utilizzo del dato 'store' per accedere ai dati globali
        store
      }
    },
    methods: {
      // Funzione di ricerca che effettua chiamate API per film e serie TV
      search() {
        // Chiamata API per la ricerca di film
        axios
        .get(`${this.store.apiBase}/search/movie`, {
          params:{
            api_key: this.store.apiKey,
            query: this.store.searchText
          },          
        })
        .then((resp) => {
          // Aggiornamento della lista dei film nello store con i risultati della ricerca
          this.store.filmsList = resp.data.results;
        });

        // Chiamata API per la ricerca di serie TV
        axios
        .get(`${this.store.apiBase}/search/tv`, {
          params:{
            api_key: this.store.apiKey,
            query: this.store.searchText
          },          
        })
        .then((resp) => {
          // Aggiornamento della lista delle serie TV nello store con i risultati della ricerca
          this.store.seriesList = resp.data.results;
        });
      },
    },
};
</script>

<template>
  <!-- Struttura HTML del componente principale -->
  <div class="wrapper">
    <!-- Inclusione del componente dell'intestazione con la gestione dell'evento 'film-search' -->
    <AppHeader @film-search="search"/>
    <!-- Inclusione del componente principale -->
    <AppMain/>
  </div>
</template>

<style lang="scss">
  // Importazione di stili generali e icone FontAwesome
  @use "./style/general.scss";
  @import "@fortawesome/fontawesome-free/css/all.css"; 

  // Stile per il wrapper che occupa l'intera altezza della viewport
  .wrapper{
    width: 100%;
    height: 100vh;
  }
</style>