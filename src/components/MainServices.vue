<script >
// import { ref } from 'vue'

export default {
    props: {
        service: Object,
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
    <div class="services">
        <div class="container-medium">
            <div class="row justify-end">
                <div class="img-absolut">
                    <img class="img-hero" src="/img/features-illus.png" alt="">
                </div>
                <div class="col-6">
                    <div class="header-services">
                        <h3 class="sub-title">The ultimate competitive gaming platform</h3>
                        <h1 class="title">Make your mark on <br> the battle field</h1>
                        <p class="paragraph ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam debitis ratione omnis corporis veritatis perspiciatis molestias accusantium facere, sint magni.</p>
                    </div>
                    <ul class="list-services">
                        <li v-for="item in service" class="row no-wrap">
                            <div>
                                <img class="icon-img" :src="item.img " alt="">
                            </div>
                            <div class="description">
                                <h4 class="h-2">{{ item.title}}</h4>
                                <p class="p-2">{{ item.description }}</p>
                            </div>   
                        </li>
                    </ul>
                    <span class="border-out"><button class="btn">Play now <font-awesome-icon icon="fa-solid fa-angles-right" /></button></span>
                </div>
            </div>    
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;



.services {
    background-color: black;
    color: white;
    position: relative;
    padding: 70px 0px;

    .img-hero {
        object-fit: contain;
        margin-right: 30px;
        width: 650px;
    }   

    .col-6 {
        height: 100%;
        z-index: 1;
        

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

}

.justify-end {
    justify-content: flex-end;
}

.img-absolut {
    position: absolute;
    left:-25px;
    top:150px;
    z-index: 0;
}


.no-wrap {
    flex-wrap: nowrap;
    padding-bottom: 20px;
}
.row-body-card {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}


.icon-img {
    width: 120px;
    padding-bottom: 10px;
}

.list-services {
    padding-bottom: 25px;
}
.description { 
    padding-left: 15px;

    .h-2 {
        text-transform: uppercase;
        padding-bottom: 15px ;
    }

    .p-2 {
        font-size: 14px;
        color: gray;
    }

}












</style>