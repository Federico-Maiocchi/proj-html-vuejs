<script >

export default {
    props: {
        title: String,
        links: Array
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
    <div>
        <h4 class="title-list-contact">{{ title }}</h4>
        <ul>
            <li v-for="(link, index) in links" :key="index"><a :href="link.href">{{ link.text }}</a></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


.title-list-contact {
    font-size: 20px;
    color: white;
    text-transform: capitalize;
    font-weight: 100;
    padding-bottom: 20px;
}

li {
    color: gray;
    text-transform: capitalize;
    font-size: 14px;
    padding-bottom: 15px;
}

li:hover {
    color: #94cb53;
}
</style>