<template>
    <div class="tags">
        <div class="add">
            <button @click="createTag">新增标签</button>
        </div>
        <ul class="current">
            <li v-for="tag in dataSource" :key="tag"
                :class="{selected:selectedTags.indexOf(tag)>=0}"
                @click="toggle(tag)">{{tag}}
            </li>
        </ul>

    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        data() {
            return {
                selectedTags: [''],
            };
        },
        props: {
            dataSource:{
                type:Array
            }
        },
        methods: {
            toggle(tag: string) {
                const index = this.selectedTags.indexOf(tag);
                if (index >= 0) {
                    this.selectedTags.splice(index, 1);
                } else {
                    this.selectedTags.push(tag);
                }
            },
            createTag(){
                const name=window.prompt('请输入标签名');
                if(name===''){
                    window.alert('标签名不能为空');
                }else if(this.dataSource){
                    this.$emit('update:dataSource',[...this.dataSource,name]);
                }
            }
        }
    });
</script>

<style lang="scss" scoped>
    .tags {
        display: flex;
        font-size: 14px;
        padding: 16px;
        flex-grow: 1;
        flex-direction: column-reverse;

        > .current {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            > li {
                $bg: #d9d9d9;
                background: $bg;
                $h: 24px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 16px;
                margin-right: 12px;
                margin-top: 5px;

                &.selected {
                    background: darken($bg, 50%);
                    color: white;
                }
            }
        }

        > .add {
            margin-top: 16px;

            button {
                background: transparent;
                border: none;
                border-bottom: 1px solid;
                color: #999999;
                padding-right: 2px;
                padding-left: 2px;
            }
        }
    }
</style>