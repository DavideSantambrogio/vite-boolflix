<script >
  import AppHeader from './components/AppHeader.vue';
  import axios from 'axios';
  import { store } from "./store";
  export default {
    components: {
    AppHeader,
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
          console.log(resp);
        })
      }
    },
    

    
};

</script>

<template>
<AppHeader @film-search="search"/>

</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css"; 
</style>
