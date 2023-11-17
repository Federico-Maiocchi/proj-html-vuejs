<script >

export default {
    props: {
        itemBattle:Object,
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
    <div class="battle">
        <div class="container-xs">
            <div class="text-center">
                <h3 class="sub-title">Trending battle</h3>
                <h1 class="title">Keep eyes & manage <br> upcoming battle</h1>
                <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi unde alias laboriosam iure fuga odit quo quasi autem officiis inventore!</p>
            </div>
        </div>
        <div class="container-medium">
            <div class="row">
                <div v-for="battle in itemBattle" class="col-6">
                    <div class="card-battle">
                        <div class="header-card-battle row-card">
                            <img class="img-card" :src="battle.squad1" alt="">
                            <span class="versus-icon">VS</span>
                            <img class="img-card"  :src="battle.squad2" alt="">
                        </div>
                        <div class="tournament">
                            <h4 class="title-bat">{{ battle.tournament }}</h4>
                            <p class="date-bat">{{ battle.date }}</p>
                        </div>
                        <div class="social row">
                            <span class="row align-center"><img src="/img/youtube-icon.png" alt="">Youtube</span>
                            <span class="row align-center"><img src="/img/twitch-icon.png" alt="">twitch</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="button">
                <div class="row justify-center">
                    <span class="border-out"><button class="btn">View all match <font-awesome-icon icon="fa-solid fa-angles-right" /></button></span>
                </div>
            </div> 
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.battle {
    color: white;
    background-color: #212733 ;
    padding: 70px 0px;

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

    .paragraph {
        font-size: 16px;
        margin-bottom: 20px;
        color: grey;
        
    }    
}

.col-6 {
    padding: 10px;
}
.card-battle {
    background-color: white;
    border: 2px solid #30415f;
    border-radius: 24px;

    .header-card-battle {
        padding: 20px;
        background-color: #28344a ;
        border-radius: 20px 20px 0px 0px;
        
    }

    .row-card {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
                
    }
    .img-card {
        width: 100px;
        aspect-ratio: 1;
    }

    .versus-icon {
        font-size: 60px;
        color: #94cb53;
    }
}


.tournament {
    text-align: center;
    background-color: #30415f ;
    
    
    padding: 20px 0;
    .title-bat{
        color: white;
        font-size: 25px;
        padding-bottom: 10px;
        text-transform: capitalize;
    }

    .date-bat {
        color: #94cb53;
    }
}

.button {
    padding-top: 35px;
}


.social {
    background-color: #28344a ;
    padding: 20px 0;
    border-radius: 0px 0px 20px 20px;
    &.row {
        align-items: center;
        justify-content: space-evenly;
    }
}
</style>