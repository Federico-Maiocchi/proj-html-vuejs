<script >

export default {
    props: {
        itemSocial: Object
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
    <div class="col-4">
        <div class="logo">
            <img src="/img/logo.png" alt="">
        </div>
        <div class="paragraph-footer">
            <p class="p-footer" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo cumque impedit sunt, numquam optio consequuntur.</p>
        </div>
        <ul class="list-social row-social">
            <li v-for="item in itemSocial" ><span class="icon-social" ><a :href="item.href"><font-awesome-icon :icon=" item.icon " /></a></span></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


.row-social {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
.p-footer {
    font-size: 12px;
}

.icon-social {
    display: inline-block;
    font-size: 18px;
    border: 1px solid white;
    border-radius: 50%;
    text-align: center;
    line-height: 10px;
    vertical-align: middle;
    padding: 10px;
}

.icon-social:hover {
    border: 1px solid #94cb53;
    color: white;
    background-color: #94cb53;
}


.logo {
    padding-bottom: 40px;
}
.paragraph-footer {
    padding-bottom: 40px;
}


</style>