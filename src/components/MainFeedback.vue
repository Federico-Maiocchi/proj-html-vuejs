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
                <h3 class="sub-title">Futio feedback</h3>
                <h1 class="title">What our gamers say</h1>
                <p class="par-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi unde alias laboriosam iure fuga odit quo quasi autem officiis inventore!</p>
            </div>
        </div>
        <div class="container-medium ">
            <div class="row">
                <div class="col-4">
                    <div class="card">
                        <div class="icon-star"><font-awesome-icon icon="fa-solid fa-star" /></div>
                        <p class="p-quote">"Lorem ipsum dolor sit amet consectetur, adipisicing elit."</p>
                        <div>
                            <ul class="user-profile">
                                <li  class="row no-wrap">
                                    <div>
                                        <img class="user-photo" src="/img/testimonials-image-3.png" alt="">
                                    </div>
                                    <div class="profile">
                                        <h4 class="user">Kim Ramos</h4>
                                        <p class="from">Serbia</p>
                                    </div>   
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="icon-star"><font-awesome-icon icon="fa-solid fa-star" /></div>
                        <p class="p-quote">"Lorem ipsum dolor sit amet consectetur, adipisicing elit."</p>
                        <div>
                            <ul class="user-profile">
                                <li  class="row no-wrap">
                                    <div>
                                        <img class="user-photo" src="/img/testimonials-image-3.png" alt="">
                                    </div>
                                    <div class="profile">
                                        <h4 class="user">Kim Ramos</h4>
                                        <p class="from">Serbia</p>
                                    </div>   
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="icon-star"><font-awesome-icon icon="fa-solid fa-star" /></div>
                        <p class="p-quote">"Lorem ipsum dolor sit amet consectetur, adipisicing elit."</p>
                        <div>
                            <ul class="user-profile">
                                <li  class="row no-wrap">
                                    <div>
                                        <img class="user-photo" src="/img/testimonials-image-3.png" alt="">
                                    </div>
                                    <div class="profile">
                                        <h4 class="user">Kim Ramos</h4>
                                        <p class="from">Serbia</p>
                                    </div>   
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="icon-star"><font-awesome-icon icon="fa-solid fa-star" /></div>
                        <p class="p-quote">"Lorem ipsum dolor sit amet consectetur, adipisicing elit."</p>
                        <div>
                            <ul class="user-profile">
                                <li  class="row no-wrap">
                                    <div>
                                        <img class="user-photo" src="/img/testimonials-image-3.png" alt="">
                                    </div>
                                    <div class="profile">
                                        <h4 class="user">Kim Ramos</h4>
                                        <p class="from">Serbia</p>
                                    </div>   
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container-medium {
    min-height: 100px;
    overflow-x: hidden;
}
.col-4 {
    padding: 5px;
    
}

.user-profile {
    padding-left: 20px;
}

.icon-star {
    color: yellow;
    padding-bottom: 10px;
}

.p-quote {
    padding-bottom: 14px;
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


.main-body {
    background-color: black;
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
    
}

</style>