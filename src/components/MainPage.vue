<script >
// import { ref } from 'vue'
import MainServices from './MainServices.vue'

export default {
    components: {
        MainServices,
    },

    data() {
    return {
        services: [
            {
                img: '/img/features-icon-1.png',
                title:'Live streaming',
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum, sapiente labore recusandae voluptate tenetur.',
            },
            {
                img: '/img/features-icon-2.png',
                title:'Great tournament',
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum, sapiente labore recusandae voluptate tenetur.',
            },
            {
                img: '/img/features-icon-3.png',
                title:'Gaming news',
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum, sapiente labore recusandae voluptate tenetur.',
            }
        ],

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
    <div class="main-page">
        <MainServices :service="services"/>
        

    </div>
    
  

</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


</style>