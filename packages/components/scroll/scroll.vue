<template>
    <div class="yvui-scroll-wrapper">
        <div class="yvui-scroll-container" :style="{height:height+'px'}" ref="scrollContainer" id="scrollContainer">
            <!--上拉loading-->
            <div class="yvui-scroll-loader" ref="topLoad" :style="{paddingTop: wrapperPadding.paddingTop}">
                <div :class="loadbarClass">
                    <div class="yvui-spin-main">
                        <Icon type="load-c" size="18" class="yvui-scroll-spinner-icon"></Icon>
                        <div v-if="loadingText" class="yvui-scroll-loader-text">{{loadingText}}</div>
                    </div>
                </div>
            </div>
            <!--列表内容-->
            <div class="yvui-scroll-content" ref="scrollContent">
                <slot></slot>
            </div>
            <!--下拉loading-->
            <div class="yvui-scroll-loader" ref="bottomLoad">
                <div :class="bomClass">
                    <div class="yvui-spin-main">
                        <Icon type="load-c" size="18" class="yvui-scroll-spinner-icon"></Icon>
                        <div v-if="loadingText" class="yvui-scroll-loader-text">{{loadingText}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const preCls = 'yvui-scroll';
    import bindScrollAction from '../../../packages/untils/scroll.js'
    export default {
        name: 'Scroll',
        data() {
            return {
                topRubberPadding: 0,
                bottomRubberPadding: 0,
                isLoading: false,
                object: null,
                currntY:null,
                lastY:null
            }
        },
        props: {
            loading: false,
            boloading: false,
            height: {
                type: [String, Number],
                default: 300
            },
            bottomLoad: {
                type: Function
            },
            topLoad: {
                type: Function
            },
            loadingText: {
                type: String,
                default: '加载中'
            },
    
        },
        computed: {
            wrapperPadding() {
                return {
                    paddingTop: this.topRubberPadding + 'px',
                    paddingBottom: this.bottomRubberPadding + 'px'
                }
            },
            loadbarClass() {
                return [
                    `${preCls}-loader-wrapper`,
                    {
                        [`${preCls}-loader-wrapper-active`]: this.loading
                    }
                ];
            },
            bomClass() {
                return [
                    `${preCls}-loader-wrapper`,
                    {
                        [`${preCls}-loader-wrapper-active`]: this.boloading
                    }
                ];
            }
        },
        methods: {
            test() {
                console.log(1)
            },
            start() {
                var self = this,
                    obj = self.object;
                obj.addEventListener('touchstart', function(e) {
                    self.move();
                    console.log('touchstart---')
                }, false);
                obj.addEventListener('touchend', function(e) {
                    this.lastY = document.body.scrollTop;
                    console.log('touchend---')
                }, false);
            },
            //拖动滑动时  
            move() {
                var self = this;
                self.object.addEventListener('touchmove', function(e) {
                    this.currntY = document.body.scrollTop;
                    console.log(this.currntY,'.....')
                    var direct = this.currntY - this.lastY;
    
                    if (direct > 0) {
                       console.log(1111) 
                    } else if (direct < 0) {
                       console.log(1111) 
                    }
    
                    if (this.currntY == 0) {} else if ((this.currntY + window.screen.availHeight) == document.body.clientHeight) {
                        console.log(3333)  
                    }
    
                    //document.getElementById('nav').innerHTML= currntY + "|" + window.screen.availHeight  + "|" + document.body.clientHeight;  
                    this.lastY = document.body.scrollTop;
                }, false);
            },
            
    },
    watch: {
            loading(val, old) {
                if (val) {
                    this.topRubberPadding = 10
                } else {
                    this.topRubberPadding = 0
                }
            },
    
        },
        mounted() {
            var that = this
            var addEvent = (function () {
                if (window.addEventListener) {
                    return function (elm, type, handle) {
                        elm.addEventListener(type, handle, false)
                    }
                }
                if (window.attachEvent) {
                    return function (elm, type, handle) {
                        elm.attachEvent('on' + type, handle)
                    }
                }
            })()
            var scrollContainer = this.$refs.scrollContainer;
            addEvent(scrollContainer,'touchmove', function(e) {
                    this.currntY = scrollContainer.scrollTop;
                    if (this.currntY == 0) {
                        that.topLoad()
                    } else if ((scrollContainer.scrollHeight - scrollContainer.scrollTop === scrollContainer.clientHeight)) {
                        that.bottomLoad() 
                    }
    
                }, false);
            //this.init()
            // var scrollContainer = this.$refs.scrollContainer;
            // bindScrollAction(scrollContainer, this.topLoad, this.bottomLoad)
    
        }
    
    }
</script>

<style lang="less">
    @import './scroll.less';
</style>