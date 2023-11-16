<script >
// import { ref } from 'vue'
import MainServices from './MainServices.vue'
import MainBattle from './MainBattle.vue'
import MainData from './MainData.vue'
import MainBody from './MainBody.vue'

export default {
    components: {
    MainServices,
    MainBattle,
    MainData,
    MainBody
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

        battleMatch: [
            {
                squad1: '/img/game-img-1.png',
                squad2: '/img/game-img-2.png',
                tournament:'call of duty',
                date:'Decmber 25.2022 4:00 PM',
            },
            {
                squad1: '/img/game-img-3.png',
                squad2: '/img/game-img-4.png',
                tournament:'Legendary battle',
                date:'Decmber 25.2022 4:00 PM',
            },
            {
                squad1: '/img/game-img-5.png',
                squad2: '/img/game-img-6.png',
                tournament:'call of duty',
                date:'Decmber 25.2022 4:00 PM',
            },
            {
                squad1: '/img/game-img-7.png',
                squad2: '/img/game-img-8.png',
                tournament:'Nay corral gundown',
                date:'Decmber 25.2022 4:00 PM',
            },
        ],

        data: [
            {
                numData: 1135,
                titleData: 'Twitch streams',
                
            },
            {
                numData: 44,
                titleData: 'Total games',
                
            },
            {
                numData: 982,
                titleData: 'Youtube streams',
                
            },
            {
                numData: 40,
                titleData: 'Pro team',
                
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
        <MainBattle :itemBattle="battleMatch"/>
        <MainData :itemData="data" />
        <MainBody />

    </div>
    
  

</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


</style>