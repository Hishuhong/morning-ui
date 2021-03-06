<template>
    <mor-tab
        :_uiid="uiid"
        :class="[]"

        :tab="tab"
        :prepend="prepend"
        :append="append"
        :anchor-target="anchorTarget"
    >

        <ul>
            <li 
                v-for="item in data.namelist"
                :name="item.name"
                :key="item.name"
                v-html="item.html"
                @click="_onClick(item.name)"
            ></li>
        </ul>
        
        <div class="contents">
            <template v-for="(item, name) in $slots">
                <div class="item mor-tab-item" :name="name" :key="name"><slot :name="name"></slot></div>
            </template>
        </div>

    </mor-tab>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'tab',
    props : {
        tab : {
            type : String,
            default : undefined
        },
        prepend : {
            type : Object,
            default : () => ({})
        },
        append : {
            type : Object,
            default : () => ({})
        },
        anchorTarget : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                tab : this.tab,
                prepend : this.prepend,
                append : this.append,
                anchorTarget : this.anchorTarget
            };

        }
    },
    data : function () {

        return {
            data : {
                tabs : [],
                selectTab : null,
                namelist : []
            }
        };

    },
    methods : {
        _onClick : function (name) {

            this.switch(name);

        },
        _getNamelist : function () {

            let names = Object.keys(this.$slots);
            let list = [];

            for (let name of names) {

                let prepend = this.conf.prepend[name];
                let append = this.conf.append[name];

                list.push({
                    name : name,
                    html : `${prepend || ''}${name}${append || ''}`
                });

            }

            this.data.namelist = list;

        },
        _initTabs : function () {

            this._getNamelist();
            this.data.tabs = Object.keys(this.$slots);
            this._initSelectTab();

        },
        _initSelectTab : function () {

            this.Vue.nextTick(() => {

                // clean old status
                let $currentTabEl = this.$el.children[0].children;
                let $currentConEl = this.$el.children[1].children;

                if ($currentTabEl) {

                    for (let $el of $currentTabEl) {

                        $el.classList.remove('current');

                    }

                }

                if ($currentConEl) {

                    for (let $el of $currentConEl) {

                        $el.classList.remove('current');

                    }

                }

                this.data.selectTab = null;

                // init new select tab
                if (this.conf.tab) {

                    this.switch(this.conf.tab);

                } else {

                    this.switch(this.data.tabs[0]);

                }

            });

        },
        _findParentTab : function ($el, $originEl) {

            let $closestTabItem = $el.closest('.mor-tab-item');

            if ($closestTabItem) {

                let $closestTab = $closestTabItem.closest('mor-tab');

                if ($closestTab) {

                    let name = $closestTabItem.getAttribute('name');

                    if ($closestTab._vm.conf.anchorTarget) {

                        $closestTab._vm.switch(name);

                    }
    
                    this._findParentTab($closestTab, $originEl);

                }

            } else {

                this.Vue.nextTick(() => {

                    $originEl.scrollIntoView();

                });

            }

        },
        _targetAnchorPoint : function () {

            let anchor = window.location.hash.replace(/^#/, '');
            let $targetEl;

            anchor = decodeURI(anchor);

            if (anchor) {

                $targetEl = this.$el.querySelector(`#${anchor}`);
                
                if (!$targetEl) {

                    $targetEl = this.$el.querySelector(`a[name="${anchor}"]`);

                }

                if ($targetEl) {

                    this._findParentTab($targetEl, $targetEl);

                }

            }

        },
        switch : function (name) {

            if (name === this.data.selectTab) {

                return this;

            }

            let old = this.data.tabs.indexOf(this.data.selectTab);

            if (old !== -1) {

                let conEl = this.$el.children[1].children[old];
                let tabEl = this.$el.children[0].children[old];

                conEl.classList.remove('current');
                tabEl.classList.remove('current');

            }

            let current = this.data.tabs.indexOf(name);

            if (current !== -1) {

                let conEl = this.$el.children[1].children[current];
                let tabEl = this.$el.children[0].children[current];

                conEl.classList.add('current');
                tabEl.classList.add('current');

            }

            this.data.selectTab = name;

            this.$emit('switch');

            return this;

        },
        next : function () {

            let index = this.data.tabs.indexOf(this.data.selectTab);

            index++;

            if (index < this.data.tabs.length) {
        
                this.switch(this.data.tabs[index]);

            } else {

                this.switch(this.data.tabs[0]);

            }

            return this;

        },
        prev : function () {

            let index = this.data.tabs.indexOf(this.data.selectTab);

            index--;

            if (index >= 0) {
        
                this.switch(this.data.tabs[index]);

            } else {
        
                this.switch(this.data.tabs[this.data.tabs.length - 1]);
        
            }

            return this;

        }
    },
    created : function () {},
    mounted : function () {

        this.$watch(() => ((JSON.stringify(this.conf.prepend) + JSON.stringify(this.conf.append))), this._getNamelist, {
            deep : true,
            immediate : true
        });

        this._initTabs();

        this.Vue.nextTick(() => {

            this._targetAnchorPoint();
            window.addEventListener('hashchange', this._targetAnchorPoint);

        });

        this.$watch('conf.tab', () => {

            this._initSelectTab();

        });

    },
    updated : function () {

        if (this.data.tabs.join(',') !== Object.keys(this.$slots).join(',')) {

            this._initTabs();

        }

    },
    destroyed : function () {

        window.removeEventListener('hashchange', this._targetAnchorPoint);

    }
};
</script>

<style lang="less" src="./index.less"></style>
