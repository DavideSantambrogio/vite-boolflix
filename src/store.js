import { reactive } from "vue";

export const store = reactive({
  films: [],
  series: [],
  searchText: "",
  apiKey: "cb25bcdd927925fc72eeeb993ce375da",
  apiStart: "https://api.themoviedb.org/3/search/movie",
});

