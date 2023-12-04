import { reactive } from "vue";

export const store = reactive({
  filmsList: [],
  seriesList: [],
  searchText: "",
  apiKey: "cb25bcdd927925fc72eeeb993ce375da",
  apiBase: "https://api.themoviedb.org/3/",
  loading: false,
});

