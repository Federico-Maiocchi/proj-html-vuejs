<script>

export default {
    props: {
        
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
    <div class="menu">
        <ul>
            <li>Games</li>
            <li>Games Details</li>
            <li>Match details</li>
        </ul>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.menu {
    background-color: #1b212d ;
    border: 1px solid black;
    display: none;
    position: absolute;
    width: 120px;
}


li {
    color: white;
    border-bottom: lightgray;
}

</style>