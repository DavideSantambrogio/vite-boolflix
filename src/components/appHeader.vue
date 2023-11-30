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
        <input type="text" id="search" v-model="store.searchText">
        <button @click="$emit('film-search')">cerca</button>
    </div>
  
</template>

<style lang="scss" scoped>


</style>