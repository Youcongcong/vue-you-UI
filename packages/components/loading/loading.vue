<template>
    <div :class="['c-loading', classa]">
        <div class="flexc">
            <div :class="['c-loading-' + theme]" :style="{
                'border-top-color': loadingColor,
                'border-left-color': loadingColor,
                'border-bottom-color': loadingColor,
                'height': loadingSize,
                'width': loadingSize
                }"></div>
            <span class="textdd"><slot></slot></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Loading',
        props: {
            classa: {
                type: String,
                default: ''
            },
            theme: {
                type: String,
                default: 'snake'
            },
            color: {
                type: String,
                default: '#ccc9c9'
            },
            size: {
                type: Number,
                default: 1
            }
        },
        computed: {
            loadingColor() {
                return this.color || this.$parent.color;
            },
    
            loadingSize() {
                return (this.size || this.$parent.size) + 'rem';
            }
        }
    }
</script>

<style>
    .textdd {
        vertical-align: middle;
        border: 4px solid transparent;
        border-radius: 50%;
        display: inline-block;
        text-align: center;
        width: 100%;
        margin-top: 3.5rem;
    }
    
    .c-loading {
        position: fixed;
        height: 100%;
        z-index: 888;
        top: 0;
        left: 0;
        right: 0;
        text-align: center;
        & span {
            vertical-align: middle;
        }
    }
    .flexc{
        display: flex;
        justify-content: center; 
        align-items: center;
        height: 100%;
    }
    .c-loading-snake {
        vertical-align: middle;
        animation: c-loading-snake-rotate .8s infinite linear;
        border: 4px solid transparent;
        border-radius: 50%;
        display: inline-block;
        height: 2rem !important;
        width: 2rem !important;
        position:absolute
    }
    
    @-webkit-keyframes c-loading-snake-rotate {
        0% {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(1turn);
        }
    }
    
    @keyframes c-loading-snake-rotate {
        0% {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(1turn);
        }
    }
</style>