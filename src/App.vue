<template>
    <div id="app">
        <link rel="stylesheet" href="https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css">

        <!-- 顶部导航条 开始 -->
        <mu-appbar v-if="$store.state.header.show" z-depth="3" color="pink" textColor="#fff">
            <mu-button icon @click="$router.back(-1)" slot="left" v-if="$store.state.header.back">
                <mu-icon value="keyboard_arrow_left"></mu-icon>
            </mu-button>
            {{$store.state.header.text}}
            <mu-button icon slot="right"></mu-button>
        </mu-appbar>
        <div v-if="$store.state.header.show" style="height: 10px"></div>
        <!-- 顶部导航条 结束 -->

        <router-view></router-view>

        <!-- 底部导航条 开始 -->
        <div v-if="$store.state.navbar.show" style="height:70px"></div>
        <mu-bottom-nav v-if="$store.state.navbar.show" shift :value.sync="$store.state.navbar.item" class="app-nav-bottom" color="pink">
            <mu-bottom-nav-item to="/" value="home" title="首 页" icon="home"></mu-bottom-nav-item>
            <mu-bottom-nav-item to="/order" value="order" title="订 单" icon="reorder"></mu-bottom-nav-item>
            <mu-bottom-nav-item to="/cart" value="cart" title="购物车" icon="books"></mu-bottom-nav-item>
            <mu-bottom-nav-item to="/user" value="user" title="会 员" icon="person"></mu-bottom-nav-item>
        </mu-bottom-nav>
        <!-- 底部导航条 结束 -->

    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {}
        }
    }
</script>

<style>
    html, body {
        height: 100%
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .app-nav-bottom {
        bottom: 0;
        width: 100%;
        position: fixed;
    }
</style>
