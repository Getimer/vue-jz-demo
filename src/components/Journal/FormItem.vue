<template>
    <label class="formItem">
        <span class="name">{{this.fileName}}</span>
        <input type="text" :placeholder="this.placeholder" v-model="value">
    </label>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
         data(){
            return{
                value:'',
            }
         },
        props:['fileName','placeholder'],
        watch:{
             value(){
                 this.$emit('update:value',this.value)
             }
        }
    })
</script>

<style lang="scss" scoped>
    .formItem {
        display: flex;
        font-size: 14px;
        padding-left: 16px;
        align-items: center;
        > .name {
            padding-right: 16px;
        }

        input {
            margin-left: 2px;
            height: 40px;
            flex-grow: 1;
            background: transparent;
            border: none;
        }
    }
</style>