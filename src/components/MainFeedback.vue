<script >
// import { ref } from 'vue'

export default {
    props: {
        itemFeedback: Object
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
    <div class="feedback">
        <div class="container-xs">
            <div class="text-center">
                <h3 class="sub-title">Futio feedback</h3>
                <h1 class="title">What our gamers say</h1>
                <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi unde alias laboriosam iure fuga odit quo quasi autem officiis inventore!</p>
            </div>
        </div>
        <div class="container-large">
            <div class="row">
                <div v-for="item in itemFeedback" class="col-3">
                    <div class="card">
                        <span v-for="star in item.vote" class="icon-star"><font-awesome-icon icon="fa-solid fa-star" /></span>
                        <p class="p-quote">{{ item.comment }}</p>
                        <div class="user-profile">
                            <div class="row no-wrap">
                                <div>
                                    <img class="user-photo" :src="item.img" alt="">
                                </div>
                                <div class="profile">
                                    <h4 class="user">{{ item.name }}</h4>
                                    <p class="from">{{ item.country }}</p>
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row justify-between">
                        <div class="block-1">block-left</div>
                        <div class="block-2">block-right</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


.feedback {
    background-color: black;
    color: white;
    padding: 70px 0px;

    .container-xs {
        margin-bottom: 120px;
        
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

    .paragraph {
        font-size: 16px;
        margin-bottom: 20px;
        color: grey;
        
    }  
    
}

.col-3 {
    padding: 5px;
}


.user-profile {
    padding-left: 20px;
}

.icon-star {
    color: yellow;
    padding-bottom: 20px;
}

.p-quote {
    padding: 20px 0;
    font-weight: 300;
}

.user-photo {
    padding-right: 10px;
}

.user {
    padding-bottom: 10px;
}


.card {
    background-color: #30415f;
    padding: 10px;
    border-radius: 20px;
}

.justify-between {
    justify-content: space-between;
}
.block-1 {
    width: 180px;
    background-color: black;
    color: black;
    height: 220px;
}

.block-2 {
    width: 180px;
    background-color: black;
    color: black;
    
}

.container {
    background-color: transparent;
    // padding: 80px;
    width: 100%;
    height: 220px;
    
    z-index: 1;
    position: absolute;
}

.container-large {
    position: relative;
}

</style>