<script>
export default {
    props:{
        filmObj: Object,
    },

}
</script>

<template>
    <div class="card">
        <h2>{{ filmObj.title }}</h2>
        <h3>{{ filmObj.original_title }}</h3>
        <p>{{ filmObj.original_language }}</p>
        <p>{{ filmObj.vote_average }}</p>
    </div>
  
</template>

<style lang="scss" scoped>


</style>