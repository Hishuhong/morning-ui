<template>
    <mor-textarea
        :_uiid="uiid"
        :class="[formClass, stateClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :clearable="clearable"
        :rows="rows"
    >

    <textarea
        :placeholder="placeholder"
        :disabled="conf.state === 'disabled' || conf.state === 'readonly'"
        :rows="conf.rows"

        @focus="_focus()"
        @blur="_blur()"

        :value="data.value"
        @input="$emit('input', $event.target.value)"
    ></textarea>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-textarea>
</template>
 
<script>
export default {
    origin : 'Form',
    name : 'textarea',
    props : {
        rows : {
            type : Number,
            default : 4
        }
    },
    computed : {
        _conf : function () {

            return {
                rows : this.rows
            };

        },
        placeholder : function () {

            if (!this.conf.hideName) {

                return this.conf.formName;

            }

            return false;

        }
    },
    data : function () {

        return {
            data : {}
        };

    },
    methods : {
        _valueFilter : function (value) {

            if (value === undefined) {

                return '';

            }

            if (typeof value === 'object') {

                return JSON.stringify(value);

            }

            return String(value);

        },
        _focus : function () {

            this.$emit('focus');

        },
        _blur : function () {

            this.$emit('blur');

        },
        setRows : function (num) {

            let row = this.conf.rows;

            if (typeof num === 'number') {
                
                row = num;

            } else if (typeof num === 'string') {

                if (/^\+/.test(num)) {

                    row += +num.replace(/^\+/, '');

                } else if (/^-/.test(num)) {

                    row -= +num.replace(/^-/, '');

                }

            }

            if (row) {

                if (row < 1) {
                
                    row = 1;
                
                }
                
                this.conf.rows = row;

            }

            return this;

        }
    },
    created : function () {},
    mounted : function () {

        this.$on('input', value => {

            this.data.value = value;

        });

    }
};
</script>

<style lang="less" src="./index.less"></style>
