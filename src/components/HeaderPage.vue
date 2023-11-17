

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
                    icon: '',
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
                    icon: '',
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
                <div class="row gap-35">
                    <HeaderMenu :itemMenu="navHeader"/>
                </div>
            </nav>
        </div>
    </div>
  </template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.header-page {
    color: $color-light;
    padding-top: 20px;

    .row{
        justify-content: space-between;
        align-items: center;

    }

    li:hover {
        color: #94cb53;
    }
}

.gap-10 {
    gap: 10px;
}

.gap-35 {
    gap: 35px
}
</style>