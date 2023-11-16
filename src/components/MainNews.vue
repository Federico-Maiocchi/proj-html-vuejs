<script >

export default {
    props: {
        itemNews: Object
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
                            <span class="p-right"><font-awesome-icon icon="fa-regular fa-clock" /> 10 min</span>
                            <span class="p-right"><font-awesome-icon icon="fa-regular fa-eye"/> 240</span>
                            <span class="p-right"><font-awesome-icon icon="fa-regular fa-calendar"/> apr 11.2022</span>
                        </div>
                        <div class="card-footer">
                            <h3 class="title-card">Secrets to an amazing role playing game</h3>
                        </div>
                    </div> 
                </div>
                <div class="col-6">
                    <div class="row-card-small">
                        <div v-for="item in itemNews" class="col-4">
                            <div class="card-small">
                                <div class="row-card-info">
                                    <figure class="card-header-small">
                                        <img class="img-small" :src="item.img" alt="">
                                    </figure>
                                    <div class="card-body-small">
                                        <span class="p-right-small"><font-awesome-icon icon="fa-regular fa-clock" /> {{ item.time }}</span>
                                        <span class="p-right-small"><font-awesome-icon icon="fa-regular fa-eye"/> {{ item.visual }}</span>
                                        <span class="p-right-small"><font-awesome-icon icon="fa-regular fa-calendar"/> {{ item.date }}</span>
                                        <h3 class="title-card"> {{ item.title }}</h3>
                                    </div>                                           
                                </div>
                            </div> 
                        </div>
                    </div> 
                </div>
            </div>   
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.col-4 {
    padding: 10px;
}

.p-right-small {
    color: #94cb53;
    font-size: 14px;
    padding: 10px 5px 20px 0px;
}
.row-card-info {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
}

.card-body-small {
    font-size: 15px;
    padding-left: 15px;
}

.img-small {
    width: 200px;
    border-radius: 10px;
}

.row-card-small {
    display: flex;
    flex-direction: column;
    
}
.card-small {
    background-color: #30415f;
    border-radius: 10px;
}

.card {
    background-color: #30415f;
    border-radius: 20px;


    .card-body {
        padding: 20px;
        color: #94cb53;
    }

    .card-footer {
        padding: 0px 20px 20px 20px;
    }

    .title-card {
        font-size: 24px;
    }

    .p-right {
        padding-right: 20px;
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