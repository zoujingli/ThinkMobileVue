<template>
    <div>
        <mu-paper :z-depth="1" :style="{height:$store.state.pager.height}" class="demo-loadmore-wrap">
            <mu-container ref="container" class="demo-loadmore-content">
                <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
                    <mu-list>
                        <template v-for="i in num">
                            <mu-list-item>
                                <mu-list-item-title>{{text}} Item {{i}}</mu-list-item-title>
                            </mu-list-item>
                            <mu-divider/>
                        </template>
                    </mu-list>
                </mu-load-more>
            </mu-container>
        </mu-paper>
    </div>
</template>

<style lang="less">
    .demo-loadmore-wrap {
        width: 100%;
        display: flex;
        flex-direction: column;
        .mu-appbar {
            width: 100%;
        }
    }

    .demo-loadmore-content {
        flex: 1;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
</style>

<script>
    export default {
        data() {
            return {
                num: 10,
                text: 'List',
                loading: false,
                refreshing: false,
            }
        },
        methods: {
            refresh() {
                this.refreshing = true
                this.$refs.container.scrollTop = 0
                setTimeout(() => {
                    this.num = 10
                    this.refreshing = false
                    this.text = this.text === 'List' ? 'Menu' : 'List'
                }, 2000)
            },
            load() {
                this.loading = true
                setTimeout(() => {
                    this.num += 10
                    this.loading = false
                }, 2000)
            }
        }
    }
</script>