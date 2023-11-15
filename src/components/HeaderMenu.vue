

<script >
// import { ref } from 'vue'

export default {
    props: {
        itemMenu: Object,
    },

    data() {
    return {

        }
    },

    created() {
       
    },

    methods: {
        
    },

    mounted() {
    
    },


}

</script>

<template>
  <div class="menu-header ">
        <ul class="row gap-10">
            <li v-for="item in itemMenu">
                <a href="#">{{item.text}}</a>
                <span v-if="item.icon !== '' "><font-awesome-icon :icon=" item.icon "/></span>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.gap-10 {
    gap: 10px;
}

</style>