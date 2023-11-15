

<script >
// import { ref } from 'vue'
import HeaderMenu from './HeaderMenu.vue';

export default {
    components: {
        HeaderMenu
    },

    data() {
        return {
            navHeader: [
                {
                    text: 'home',
                    href: '#',
                    icon: ''
                },
                {
                    text: 'Games',
                    href: '#',
                    icon: "fa-solid fa-angle-down",
                },
                {
                    text: 'shop',
                    href: '#',
                    icon: "fa-solid fa-angle-down",
                },
                {
                    text: 'Pages',
                    href: '#',
                    icon: "fa-solid fa-angle-down",
                },
                {
                    text: 'Blog',
                    href: '#',
                    icon: "fa-solid fa-angle-down",
                },
                {
                    text: 'Contanct',
                    href: '#',
                    icon: ''
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
    <div class="header-page">
      <div class="container-medium">
          <nav class="nav-bar row">
              <div class="logo">
                <img src="/img/logo.png" alt="">
              </div>
              <HeaderMenu :itemMenu="navHeader"/>
              <div class="menu-left-header">
                <ul class="row gap-10">
                    <li><a href="#">i-carrello</a></li>
                    <button class="btn">Live streaming</button>
                </ul>
              </div>
          </nav>
        </div>
    </div>
  </template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.header-page {
    color: $color-light;
    background-color: black;
    padding: 20px 0;

    .row{
        justify-content: space-between;
        align-items: center;

    }
}

.btn {
    background-color: green ;
    color: white;
    font-size: 18px;
    border: none;
    border-radius: 999px;
    line-height: 30px;
    padding: 0px 6px;

}

.gap-10 {
    gap: 10px;
}
</style>