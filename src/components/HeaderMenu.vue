<script >
import HeaderHoverMenu from './HeaderHoverMenu.vue';

export default {
    props: {
        itemMenu: Object,
    },
    data() {
        return {
            
        };
    },
    created() {
    },
    methods: {

    },
    mounted() {
    },
    components: { 
        HeaderHoverMenu 
    }
}

</script>

<template>
    <div class="menu-header ">
        <ul class="row">
            <li v-for="item in itemMenu" class="menu-item">
                <a :href="item.href">{{item.text}}</a>
                <span class="arrow-bottom" v-if="item.icon !== '' "><font-awesome-icon :icon=" item.icon "/></span>
                <HeaderHoverMenu class="d-block"/>
            </li>
        </ul>
    </div>
    <div class="menu-left-header">
        <ul class="row">
            <li class="position-relative">
                <a href="#"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></a>
                <div class="notification">03</div>
            </li>
            <span class="border-out"><button class="btn">Live streaming</button></span>
        </ul>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.menu-item {
    position: relative;
    z-index: 5;
}

.menu-left-header {
    z-index:5;
}
.menu-item:hover .arrow-bottom + .d-block {
    display: block;
}
.row {
    align-items: center;
    gap: 10px;
}

li:hover {
    color: #94cb53;
}
.position-relative {
    position: relative;
}
.notification {
    position: absolute;
    background-color: #08cb7b;
    color: black;
    font-size: 10px;
    border-radius: 50%;
    text-align: center;
    line-height: 15px;
    vertical-align: middle;
    padding: 2px;
    top:-12px;
    right:-6px;
}

</style>