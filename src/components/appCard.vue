<script>
export default {
    props:{
        filmObj: Object,
        seriesObj: Object,
    },

}
</script>

<template>
    <div v-if="filmObj || seriesObj">
        <h2 v-if="filmObj">{{ filmObj.title }}</h2>
        <h3 v-if="filmObj">{{ filmObj.original_title }}</h3>
        <p v-if="filmObj">{{ filmObj.original_language }}</p>
        <p v-if="filmObj">{{ filmObj.vote_average }}</p>

        <h2 v-if="seriesObj">{{ seriesObj.name }}</h2>
        <h3 v-if="seriesObj">{{ seriesObj.original_name }}</h3>
        <p v-if="seriesObj">{{ seriesObj.original_language }}</p>
        <p v-if="seriesObj">{{ seriesObj.vote_average }}</p>
    </div>
  
</template>

<style lang="scss" scoped>


</style>