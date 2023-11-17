<script >


export default {
    props: {
        itemData: Object
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
    <div class="data">
        <div class="container-medium">
            <h2 class="title">Futio quick facts</h2>
            <div class="row">
                <div v-for="item in itemData" class="col-3">
                    <div class="card">
                        <p class="number-data">{{ item.numData }}</p>
                        <p class="title-data">{{ item.titleData }}</p>
                    </div>
                </div>
            </div>
        </div>  
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


.data {
    color: white;
    background-color: black;
    padding: 70px 0px;

    .container-medium {
        text-align: center;
    }

    .title {
        font-size: 40px;
        line-height: 55px;
        margin-bottom: 20px;
        text-transform: capitalize;
    }

    .col-3 {
        padding: 5px;
    }

    .card {
        border: 1px solid gray;
        border-radius: 30px;
        text-align: center;
        padding: 20px;

        .number-data {
            font-size: 40px;
        }

        .title-data {
            color: #94cb53;
        }
    }
}


</style>