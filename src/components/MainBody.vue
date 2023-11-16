<script >
// import { ref } from 'vue'

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
    <div class="main-body">
        <div class="container-xs">
            <div class="text-center">
                <h3 class="sub-title">Live streaming</h3>
                <h1 class="title">Watch the streams</h1>
                <p class="par-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi unde alias laboriosam iure fuga odit quo quasi autem officiis inventore!</p>
            </div>
        </div>
        <div class="container-medium text-center">
            <figure class="card-figure">
                <img class="img-stream" src="/img/stream-bg-3.png" alt="">
                <div class="badge"><font-awesome-icon class="icon-bandge" icon="fa-solid fa-wifi" />  Live</div>
                <span class="icon"><font-awesome-icon icon="fa-solid fa-play" /></span>
                <div class="info-stream row">
                    <span><span class="color-light-green">356.599</span> Viewers</span>
                    <span><span class="color-light-green">23.599</span> Likes</span>
                </div>
            </figure>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


.info-stream {
    position: absolute;
    bottom: 50px;
    left:20px;
    gap: 15px;
}
.color-light-green {
    color: #94cb53;
}
.card-figure {
    position: relative;
} 

.icon {
    font-size: 35px;
    line-height: 60px;
    color: #94cb53;
    background-color: white;
    padding: 0 18px;
    border-radius: 999px;
    border: 18px solid #30405f;
    outline: solid #94cb53 2px;
    position: absolute;
    
    left: 50%;
    bottom: 50%;
    transform: translate(-30%, -0%);
}

.badge {
    display: inline-block;
    background-color: orange;
    padding: 0px 20px;
    line-height: 25px;
    font-size: 18px;
    color: black;
    // font-weight: 600;
    border-radius: 999px;
    position: absolute;
    right:50px;
    top: 15px;
}

.main-body {
    background-image: url(/img/live-streaming-bg.png);
    background-size:contain;
    background-color: black;
    background-repeat: no-repeat;
    background-position:top  ;
    color: white;
    padding: 70px 0px;

    .container-xs {
        margin-bottom: 50px;
    }
    .text-center{
        text-align: center;
    }
    .sub-title {
        font-size: 20px;
        margin-bottom: 20px;
        color:#94cb53;
        text-transform: capitalize;
        
    }

    .title {
        font-size: 40px;
        line-height: 55px;
        margin-bottom: 20px;
        text-transform: capitalize;
    }

    .par-card {
        font-size: 16px;
        margin-bottom: 20px;
        color: grey;
        
    }  
    
    .img-stream {
        width: 100%;
        aspect-ratio: 16/9 ;
        filter: brightness(0.4);
    }
}

</style>