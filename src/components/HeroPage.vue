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
    <div class="hero">
        <div class="container-medium">
            <div class="row">
                <div class="col-5">
                    <div>
                        <h3 class="sub-title">Game with live streaming</h3>
                        <h1 class="title">Future of esports</h1>
                        <p class="par-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias pariatur hic vel?</p>
                    </div>
                    <div class="row-card">
                        <button class="btn">Explore games <font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                        <span class="icon"><font-awesome-icon icon="fa-solid fa-play" /></span>
                    </div> 
                </div>
                <div class="image-bg">
                    <img src="/img/game-controler-2.png" alt="">
                </div>
                <div class="col-7">
                    <img class="img-hero" src="/img/index-banner-illus.png" alt="">
                </div>
            </div>    
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.hero {
    color: white;
    position: relative;

    .col-5 {
        align-self: center;
        justify-self: flex-end;
        position: relative;
        z-index: 2;

        .sub-title {
            font-size: 22px;
            margin-bottom: 20px;
            color:#94cb53;
        }

        .title {
            font-size: 60px;
            line-height: 1em;
            margin-bottom: 20px;
        }

        .par-card {
            margin-bottom: 20px;
            color: grey;
        }

        .icon {
            font-size: 20px;
            line-height: 35px;
            color:#94cb53;
            background-color: white;
            padding: 0 10px;
            border-radius: 999px;
            border: 4px solid #30405f;
            outline:solid #94cb53 2px;
        }

        

    }

    .row-card {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 20px;
        height: 100%;

        .col-6 {
            height: 100%;
            flex-grow: 1;
        }
    }

    .image-bg {
        position: absolute;
        z-index: 0;
        object-fit: contain;
        filter: opacity(0.3);
        top:220px;
        left: 20px;

        img {
            width: 350px;
        }
    }

}





figure {
    width:100%;
}
.img-hero {
    object-fit: contain;

    // width: 500px;
}


</style>