<script >
import HeaderHoverMenu from './HeaderHoverMenu.vue';

export default {
    props: {
        itemMenu: Object,
    },
    data() {
        return {};
    },
    created() {
    },
    methods: {},
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
            <li><a href="#"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></a></li>
            <span class="border-out"><button class="btn">Live streaming</button></span>
        </ul>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.menu-item {
    position: relative;
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

.btn {
    background-color: #08cb7b ;
    color: #30405f;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    border: 4px solid #30405f ;
    outline:solid #08cb7b 2px;
    border-radius: 999px;
    line-height: 30px;
    padding: 0px 10px;
    cursor: pointer;
}

</style>