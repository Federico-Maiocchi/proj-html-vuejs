<script >

export default {
    

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
    <div class="subscribe">
        <div class="container-custom">
            <div class="row">
                <div class="col-7">
                    <h3>Subscribe newsletter</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quo temporibus libero. Magnam, assumenda numquam!</p>
                </div>
                <div class="col-5" >
                    <div class="row input-custom">
                        <div>
                            <input class="mail" type="email" name="" id="" placeholder="Enter your mail">
                        </div>
                        <span><font-awesome-icon class="icon" icon="fa-solid fa-paper-plane" /></span>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.subscribe {
    padding: 30px;
    background-color: #30415F;
    width: 700px;
    position: absolute;
    color: white;
    border-radius: 30px;
    top: 850px;
    right: 24%;
    z-index: 5;

    .container-custom {
        max-width: 100%;

        p {
            font-size: 12px;
            line-height: 2em;
            padding-bottom: 20px;
        }

        h3 {
            font-weight: 300;
            font-size: 30px;
            text-transform: capitalize;
            padding-bottom: 20px;

        }

        .col-5 {
            display: flex;
            justify-content: center;
            align-items: center;
           
        }
    }
}

.input-custom {
    background-color: #435374 ;
    padding: 5px;
    border-radius: 10px;
}

.mail {
    padding: 8px;
    border-radius: 10px;
    color: white;
    background-color: #435374;
    border: none;

    
}

::placeholder {
        color: lightgray;
}

input:focus {
    outline:none
}

input {

    border:0;
    outline:0;
}
.icon {
    background-color: yellowgreen;
    padding: 5px;
    font-size: 20px;
    border-radius: 50%;


}



</style>