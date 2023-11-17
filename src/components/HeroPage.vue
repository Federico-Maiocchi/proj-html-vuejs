<script >
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
            <div class="hero-info">
                <div>
                    <h3 class="sub-title">Game with live streaming</h3>
                    <h1 class="title">Future of <br> esports</h1>
                    <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias pariatur hic vel?</p>
                </div>
                <div class="row-card">
                    <span class="border-out"><button class="btn">Explore games <font-awesome-icon icon="fa-solid fa-angles-right" /></button></span>
                    <span class="border-out"><span class="icon"><font-awesome-icon icon="fa-solid fa-play" /></span></span> 
                </div>
            </div>   
        </div>
        <div class="image-bg">
            <img src="/img/game-controler-2.png" alt="">
        </div>
        <div class="img-bg-big">
            <img class="img-hero" src="/img/index-banner-illus.png" alt="">
        </div> 
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.hero {
    color: white;
    position: relative;
    padding: 100px 0 250px 0;  
}

.hero-info {
    padding-top: 70px;
    position: relative;
    z-index: 2;

    .sub-title {
        font-size: 22px;
        margin-bottom: 20px;
        color:#94cb53;
        text-transform: capitalize;
        z-index: 2;
    }

    .title {
        font-size: 60px;
        line-height: 1em;
        margin-bottom: 20px;
        text-transform: capitalize;
        z-index: 2;
    }

    .paragraph {
        margin-bottom: 20px;
        color: grey;
        max-width: 400px;
        
    }

}

.icon {
    display: flex;
    align-items: center;
    color: #08cb7b;
    background-color: white;
    display: inline-block;
    font-size: 24px;
    border-radius: 50%;
    vertical-align: middle;
    padding: 0 12px;
    cursor: pointer;
}

.icon:hover {
    color: white;
    background-color: #94cb53;
}

.border-out {
    padding: 6px;
    border:1px solid #08cb7b;
    border-radius: 999px;
}



.row-card {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    height: 100%;

}

.image-bg {
    position: absolute;
    z-index: 0;
    object-fit: contain;
    filter: opacity(0.3);
    top: 310px;
    left: 57px;

    img {
        width: 300px;
    }
}

.img-bg-big {
    position: absolute;
    right: 0;
    bottom: -25px;
    width: 800px;
    z-index: 0;
}
</style>