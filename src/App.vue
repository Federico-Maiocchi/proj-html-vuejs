<script>
import FooterPage from './components/FooterPage.vue';
import HeaderPage from './components/HeaderPage.vue';
import HeroPage from './components/HeroPage.vue';
import MainPage from './components/MainPage.vue';
// import Subscribe from './components/Subscribe.vue';



export default {
    components: {
    HeaderPage,
    HeroPage,
    MainPage,
    FooterPage,

    },

    data() {
    return {

        }
    },


    mounted() {
    
    },


}
</script>

<template>
  <div class="img-bg">
    <HeaderPage />
    <HeroPage />
  </div>
  <MainPage />
  
  <FooterPage />
  
  
</template>

<style lang="scss" >
@use './styles/reset.scss';
@use './styles/general.scss';
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@700&family=Kdam+Thmor+Pro&family=Open+Sans:wght@500&family=Roboto:wght@700&display=swap');

.img-bg {
  background-image: url(/img/index-banner-bg.png);
  background-size: cover;
}

</style>


