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
    <div class="banner">
        <div class="container-large">
            <div class="position-relative">
                <div class="col-12 row-banner">
                    <h3 class="sub-title">Make offer</h3>
                    <h1 class="title">Get 70% offer discount</h1>
                    <div class="badge">get offerts</div>
                </div>
                <span class="headphones">
                    <img src="/img/banner-item-obj2.png" alt="">
                </span> 
                <span class="phone">
                    <img src="/img/banner-item-obj1.png" alt="">
                </span>                  
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.banner {
    background-color: black;
    padding: 80px 0;
    color: white;

    .container-large {
        height: 350px;

    }

    .col-12 {
        height: 100%;
    }
    .row-banner {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
        height: 100%
    }

}


.position-relative {
    position: relative;
    overflow: hidden;
    background-image: url(/img/banner-item-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
}
.phone {
    position: absolute;
    left:5px;
    top: 120px;
    width: 300px;
    filter: opacity(0.8);
}

.headphones {
    position: absolute;
    right:10px;
    bottom: 40px;
    width: 300px;
    filter: opacity(0.8);
}


.badge {
    display: inline;
    background-color: black;
    padding: 0px 20px;
    line-height: 40px;
    font-size: 18px;
    color: white;
    border-radius: 999px;
    opacity: 0.5;
    
}

.sub-title {
        font-size: 20px;
        margin-bottom: 20px;
        text-transform: capitalize;
        
    }

    .title {
        font-size: 40px;
        line-height: 55px;
        margin-bottom: 20px;
        text-transform: capitalize;
    }
</style>