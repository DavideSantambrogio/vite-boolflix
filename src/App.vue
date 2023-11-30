<script >
  import AppHeader from './components/AppHeader.vue';
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
        store
      }
    },
    methods: {
      search() {
        axios
        .get(`${this.store.apiBase}/search/movie`, {
          params:{
            api_key: this.store.apiKey,
            query: this.store.searchText
          },          
        })
        .then((resp) => {
          this.store.filmsList = resp.data.results;
        });

        axios
        .get(`${this.store.apiBase}/search/tv`, {
          params:{
            api_key: this.store.apiKey,
            query: this.store.searchText
          },          
        })
        .then((resp) => {
          this.store.seriesList = resp.data.results;
        });
      },
    },
    

    
};

</script>

<template>
<AppHeader @film-search="search"/>
<AppMain/>
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css"; 
</style>
