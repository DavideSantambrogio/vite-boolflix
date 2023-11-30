<script>
export default {
  props: {
    filmObj: Object,
    seriesObj: Object,
  },
  data() {
    return {
      flags: ["en", "it", "es"]
    };
  },
  computed: {
    title() {
      return this.filmObj ? this.filmObj.title : this.seriesObj.name;
    },
    originalTitle() {
      return this.filmObj ? this.filmObj.original_title : this.seriesObj.original_name;
    },
    languageCode() {
      return this.filmObj ? this.filmObj.original_language : this.seriesObj.original_language;
    },
    voteAverage() {
      return this.filmObj ? this.filmObj.vote_average : this.seriesObj.vote_average;
    },
  },
  methods: {
    getFlagUrl(language) {
      if (this.flags.includes(language)) {        
        return new URL(`../assets/img/${language}.png`, import.meta.url).href;        
      } else {
        return "";
      }
    },
    getPosterUrl(obj) {
      if (obj && obj.poster_path) {
        const baseUrl = "https://image.tmdb.org/t/p/";
        return `${baseUrl}w342/${obj.poster_path}`;
      } else {
        return "";
      }
    },
    
  },
};
  
</script>

<template>
    <div>
        <img v-if="getPosterUrl(filmObj)" :src="getPosterUrl(filmObj)" alt="Poster"/>
        <img v-if="getPosterUrl(seriesObj)" :src="getPosterUrl(seriesObj)" alt="Poster"/>      
        <h2 >{{ title }}</h2>
        <h3>{{ originalTitle }}</h3>        
        <img v-if="getFlagUrl(languageCode)" :src="getFlagUrl(languageCode)" alt="Language Flag"  />
        <p v-else-if="languageCode">{{ languageCode }}</p>
        <p>{{ voteAverage }}</p>
    </div>
</template>

<style lang="scss" scoped>


</style>