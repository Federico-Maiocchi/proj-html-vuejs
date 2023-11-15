

<script >
// import { ref } from 'vue'

export default {
    components: {
        
    },

    data() {
        return {
            navHeader: [
                {
                    text: 'home',
                    href: '#'
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
                    href: '#'
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
              <div class="menu-header ">
                <ul class="row gap-10">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Games</a>
                        <span><font-awesome-icon icon="fa-solid fa-angle-down" /></span>
                    </li>
                    <li>
                        <a href="#">Shop</a>
                        <span><font-awesome-icon icon="fa-solid fa-angle-down" /></span>
                    </li>
                    <li>
                        <a href="#">Pages</a>
                         <span><font-awesome-icon icon="fa-solid fa-angle-down" /></span>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                        <span><font-awesome-icon icon="fa-solid fa-angle-down" /></span>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
              </div>
              <div class="menu-left-header">
                <ul class="row gap-10">
                    <li><a href="#">i-carrello</a></li>
                    <button>Live streaming</button>
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

        .main-header { 

        }
    }
}

.gap-10 {
    gap: 10px;
}
</style>