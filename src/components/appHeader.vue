<script>
// Importazione dello store per accedere ai dati globali
import { store } from "../store";

export default {
  data() {
    return {
      // Utilizzo del dato 'store' per accedere allo store
      store
    };
  },
  methods: {
    // Funzione per ricaricare la pagina
    reloadPage() {
      location.reload();
    }
  },
  // Dichiarazione degli eventi personalizzati emessi dal componente
  emits: ["film-search"]
};

</script>

<template>
  <header class="d-flex align-items-center">
    <div class="my-container d-flex justify-content-between">
      <!-- Logo cliccabile per ricaricare la pagina -->
      <img @click="reloadPage" src="../assets/img/logo.png" alt="">
      <div class="search d-flex align-items-center">                
        <!-- Input per la ricerca film con emissione dell'evento 'film-search' al premere del tasto 'Enter' -->
        <input @keyup.enter="$emit('film-search')" type="text" id="search" v-model="store.searchText">
        <!-- Bottone per avviare la ricerca film con emissione dell'evento 'film-search' al clic -->
        <button @click="$emit('film-search')">cerca</button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: black;
  height: var(--header-height);
}
</style>