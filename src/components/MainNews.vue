<script >

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
    <div class="news">
        <div class="container-xs">
            <div class="text-center">
                <h3 class="sub-title">Latest news</h3>
                <h1 class="title">Stay update with our latest news articles</h1>
                <p class="par-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi unde alias laboriosam iure fuga odit quo quasi autem officiis inventore!</p>
            </div>
        </div>
        <div class="container-medium">
            <div class="row">
                <div class="col-6">
                    <div class="card">
                        <figure class="card-header">
                            <img src="/img/blog-item-1.png" alt="">
                        </figure>
                        <div class="card-body">
                            <span class=""><font-awesome-icon icon="fa-regular fa-clock" /> 10 min</span>
                            <span><font-awesome-icon icon="fa-regular fa-eye"/> 240</span>
                            <span><font-awesome-icon icon="fa-regular fa-calendar"/> apr 11.2022</span>
                        </div>
                        <div class="card-footer">
                            <h3 class="title-card">Secrets to an amazing role playing game</h3>
                        </div>
                    </div> 
                </div>
                <div></div>
            </div>   
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


.card {
    background-color: #30415f;
    border-radius: 20px;

    figure {
        display: block;
    }

    .card-body {
        padding: 20px;
        color: #94cb53;
    }

    .card-footer {
        padding: 0px 20px 20px 20px;
    }

    .title-card {
        font-size: 25px;
    }
}


.news {
    padding: 80px 0;
    color: white;
    background-color: black;

    .text-center {
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