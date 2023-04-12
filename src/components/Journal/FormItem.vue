<template>
    <label class="formItem">
        <span class="name">{{this.fileName}}</span>
        <input  type="text"
                :placeholder="this.placeholder"
                :value="this.value"
                @input="onChangeValue($event.target.value)"
        >
    </label>
</template>

<script lang="js">
    import {defineComponent} from 'vue';

    export default defineComponent({
        props:['fileName','placeholder','value'],
        methods:{
          onChangeValue(val){
              this.$emit('update:value',val)
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