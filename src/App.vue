<template>
    <div id="app">

        <!-- 顶部导航条 开始 -->
        <mu-appbar v-if="$store.state.header.show" z-depth="3" class="app-header" color="pink" textColor="#fff">
            <mu-button :style="{opacity:$store.state.header.back?1:0}" @click="$store.state.header.back&&$router.back()" icon slot="left">
                <mu-icon value="keyboard_arrow_left"></mu-icon>
            </mu-button>
            {{$store.state.header.text}}
            <mu-button style="opacity:0" icon slot="right">
                <mu-icon value="keyboard_arrow_right"></mu-icon>
            </mu-button>
        </mu-appbar>
        <!-- 顶部导航条 结束 -->

        <div :style="appContentStyle()" class="app-content">
            <router-view></router-view>
        </div>

        <!-- 底部导航条 开始 -->
        <mu-bottom-nav v-if="$store.state.navbar.show" shift :value.sync="$store.state.navbar.item" class="app-navbar" color="pink">
            <mu-bottom-nav-item to="/" value="home" title="首 页" icon="home"></mu-bottom-nav-item>
            <mu-bottom-nav-item to="/order" value="order" title="订 单" icon="reorder"></mu-bottom-nav-item>
            <mu-bottom-nav-item to="/cart" value="cart" title="购物车" icon="books"></mu-bottom-nav-item>
            <mu-bottom-nav-item to="/user" value="user" title="会 员" icon="person"></mu-bottom-nav-item>
        </mu-bottom-nav>
        <!-- 底部导航条 结束 -->

    </div>
</template>

<script>

    import store from './store'

    export default {
        name: 'App',
        mounted() {
            store.state.pager.height = document.querySelector('.app-content').clientHeight + 'px'
        },
        data() {
            return {}
        },
        methods: {
            appContentStyle() {
                return {
                    top: store.state.header.show ? '56px' : '0',
                    bottom: store.state.navbar.show ? '56px' : '0'
                }
            }
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

    .app-header {
        width: 100%;
        position: fixed;
    }

    .app-content {
        top: 56px;
        width: 100%;
        bottom: 56px;
        overflow: auto;
        position: fixed;
    }

    .app-navbar {
        bottom: 0;
        width: 100%;
        position: fixed;
    }
</style>
