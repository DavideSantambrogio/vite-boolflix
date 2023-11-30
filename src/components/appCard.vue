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
  },
};
  
</script>

<template>
    <div>
        <h2 v-if="title">{{ title }}</h2>
        <h3 v-if="originalTitle">{{ originalTitle }}</h3>
        <img v-if="languageCode && getFlagUrl(languageCode)" :src="getFlagUrl(languageCode)" alt="Language Flag" class="language-flag" />
        <p v-else-if="languageCode">{{ languageCode }}</p>
        <p v-if="voteAverage">{{ voteAverage }}</p>
    </div>
</template>

<style lang="scss" scoped>


</style>