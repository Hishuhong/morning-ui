<template>
    <mor-dl
        :_uiid="uiid"
        :class="[stateClass]"
    >
        <slot></slot>
    </mor-dl>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'dl'
};
</script>

<style lang="less" src="./index.less"></style>
