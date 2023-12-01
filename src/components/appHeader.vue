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
    <header class="d-flex align-items-center">
        <div class="my-container d-flex justify-content-between">
            <img src="../assets/img/logo.png" alt="">
            <div class="search d-flex align-items-center">                
                <input @keyup.enter="$emit('film-search')"  type="text" id="search" v-model="store.searchText">
                <button @click="$emit('film-search')">cerca</button>
            </div>
        </div>
    </header>
  
</template>

<style lang="scss" scoped>
header {
    background-color: black;
    height: var(--header-height);
}


</style>