<script>
import { store } from "../store";
export default {
    data() {
        return {
            store
        }
    },
    emit: ["film-search"]
}
</script>

<template>
    <div>
        <label for="search">cerca</label>
        <input @keyup.enter="$emit('film-search')"  type="text" id="search" v-model="store.searchText">
        <button @click="$emit('film-search')">cerca</button>
    </div>
  
</template>

<style lang="scss" scoped>


</style>