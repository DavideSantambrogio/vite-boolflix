<script>
export default {
  // Proprietà che definiscono i dati in ingresso al componente
  props: {
    filmObj: Object,
    seriesObj: Object,
  },
  data() {
    return {
      // Array di lingue supportate per le bandiere
      flags: ["en", "it", "es"]
    };
  },
  computed: {
    // Proprietà calcolate per ottenere dati specifici dai film o dalle serie TV
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
    roundedRating() {
      return Math.ceil(this.filmObj ? this.filmObj.vote_average / 2 : this.seriesObj.vote_average / 2);
    },
    overview() {
      return this.filmObj ? this.filmObj.overview : this.seriesObj.overview;
    }
  },
  methods: {
    // Funzione per ottenere l'URL della bandiera in base al codice lingua
    getFlagUrl(language) {
      if (this.flags.includes(language)) {        
        return new URL(`../assets/img/${language}.png`, import.meta.url).href;        
      } else {
        return "";
      }
    },
    // Funzione per ottenere l'URL del poster dell'oggetto (film o serie TV)
    getPosterUrl(obj) {
      if (obj && obj.poster_path) {
        const baseUrl = "https://image.tmdb.org/t/p/";
        return `${baseUrl}w342/${obj.poster_path}`;
      } else {
        return "src/assets/img/image-not-found.jpg";
      }
    },   
  },
};
</script>

<template>
  <!-- Struttura HTML del componente -->
  <div class="card mt-4 text-center">
    <img class="poster" :src="getPosterUrl(filmObj || seriesObj)" alt="Poster"/>     
    <div class="card-txt p-2">
      <h6><strong>Titolo: </strong>{{ title }}</h6>
      <h6><strong>Titolo Originale: </strong>{{ originalTitle }}</h6>  
      <div class="flag">
        <!-- Visualizzazione della bandiera o del codice lingua -->
        <img v-if="getFlagUrl(languageCode)" :src="getFlagUrl(languageCode)" alt="Language Flag"  />
        <p v-else="languageCode">{{ languageCode }}</p>
      </div>
      <p><strong>Overview: </strong>{{ overview }}</p>       
      <div>
        <!-- Visualizzazione delle stelle per il rating -->
        <span v-for="i in 5" >
          <i v-if="i <= roundedRating" class="fas fa-star"></i>
          <i v-else class="far fa-star"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flag img {
  width: 50px;
}
.poster {
  position: relative;
  object-fit: cover;
  object-position: top;
  aspect-ratio: 9/16;
}
.card-txt {
  background-color: black;
  position: absolute;
  display: none;
  color: white;
  height: 100%;
  width: 100%;
  overflow-y: auto; 
}
.card-txt::-webkit-scrollbar { 
    display: none;  /* Nasconde la barra di scorrimento su Safari e Chrome */
}
.poster:hover + .card-txt, .card-txt:hover {
  display: block;
}
</style>