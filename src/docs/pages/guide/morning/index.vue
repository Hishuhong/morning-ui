<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 全局方法
    
    MorningUI在全局会暴露一个`morning`对象，你可以通过`window.morning`来方法。这个对象上有一些有用的属性及方法。

    > 注意`window.morning`对象上以下划线开头的都是私有属性，用法及变动不会再文档中提及，不应该访问及使用。

    ### 属性
    
    - version : MorningUI当前的版本，使用者可以根据不同版本增加不同的逻辑。
    - map : 所有组件的vm对象都会挂载到map对象上，对象的键名是组件的`_uiid`。

    ### 方法

    #### findVM(ref)

    ##### 参数

    |参数|可选|描述|类型|
    |-|-|-|
    |ref|NO|通过组件的`ref`名称来找到组件的vm对象|`string`|

    ##### 返回值

    匹配组件的vm对象。

    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'morning'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>