<template>
    <div id="app">
        <link rel="stylesheet" href="https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css">

        <!-- 顶部导航条 开始 -->
        <mu-appbar z-depth="3" color="pink" textColor="#fff">
            <mu-button icon slot="left">
                <!--<mu-icon value="keyboard_arrow_left"></mu-icon>-->
            </mu-button>
            {{title}}
            <mu-button icon slot="right"></mu-button>
        </mu-appbar>
        <div style="height: 10px"></div>
        <!-- 顶部导航条 结束 -->

        <router-view></router-view>

        <!-- 底部导航条 开始 -->
        <div style="height: 70px"></div>
        <mu-bottom-nav :value.sync="shift" shift id="BottomNav" color="pink">
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
            return {
                title: 'ThinkMobile',
                // shift: 'home',
            }
        }
    }
</script>

<style>
    html, body {
        height: 100%
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #BottomNav {
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>
