<script >
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
  <div class="wrapper">
    <AppHeader @film-search="search"/>
    <AppMain/>
  </div>
  
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css"; 

.wrapper{
  width: 100%;
  height: 100vh;
}
</style>
