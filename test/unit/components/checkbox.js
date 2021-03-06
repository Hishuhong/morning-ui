import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import checkbox                     from '../../../src/lib/components/checkbox/index.vue';

const name = 'checkbox';
const component = window.morning._origin.Form.extend(checkbox);

test.serial('base : component snapshot', async t => {

    const vm = new Vue(component).$mount();

    t.plan(1);

    snapshot(t, vm);

});

test.serial('base : init component', async t => {

    const vm = new Vue(component).$mount();

    t.plan(2);

    t.is(vm.uiid, 2);
    t.is(component.options.name, `morning-${name}`);

});

test.serial('base : component tag name is t-*', async t => {

    const vm = new Vue(component).$mount();

    t.plan(1);

    t.is(vm.$el.tagName, `mor-${name}`.toUpperCase());

});

test.serial('form base : init component value is right when use v-model', async t => {

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} v-model="value1" :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"></ui-${name}>
            </div>
        `,
        data : {
            value1 : ['Tim']
        },
        components : {
            [`ui-${name}`] : component
        }
    });

    vm.$mount();

    t.plan(1);

    Vue.nextTick(() => {

        t.is(vm.$children[0].get()[0], 'Tim');

    });

});

test.serial('form base : init component value is right when both use v-model and default-value', async t => {

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} v-model="value1" :default-value="value2" :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"></ui-${name}>
            </div>
        `,
        data : {
            value1 : ['Tim'],
            value2 : ['Andrew']
        },
        components : {
            [`ui-${name}`] : component
        }
    });

    vm.$mount();

    t.plan(1);

    Vue.nextTick(() => {

        t.is(vm.$children[0].get()[0], 'Tim');

    });

});
