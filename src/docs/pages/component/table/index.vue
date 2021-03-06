<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 表格 `<ui-table>`
    
    <doc-component-status page="table"></doc-component-status>
    
    [[[开始]]]

    定义一个表格，这是一个块级元素。

    #### 使用

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Emir Ayouni', age : 21, gender : 'male', job : 'gardener'}
            ]
        }
    });
    ---
    <ui-table :list="list"></ui-table>
    :::

    #### 单列控制

    `ui-table`通过`col-set`配置，可以设置单列的：

    - 宽度
    - 最小宽度
    - 最大宽度
    - 样式
    - 禁用状态
    - 对齐方式
    - 是否是标题列(标题列将被聚合在一起)

    更多单列控制见`col-set`配置。
    
    下面是一个简单的示例：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : [
                {col : 'name', name : 'Name', title : true},
                {col : 'age', name : 'Age', minwidth : '150px'},
                {col : 'gender', name : 'Gender', disabled : true},
                {col : 'job', name : 'Job', align : 'right', style : 'success'}
            ]
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :show-col-name="true"></ui-table>
    :::

    #### 单行控制

    `ui-table`通过`row-set`配置，可以设置行的：

    - 样式
    - 禁用状态
    - 对齐方式

    更多单元格控制见`row-set`配置。
    
    下面是一个简单的示例：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ],
            rowset : [
                {row : 1, align : 'left'},
                {row : 2, style : 'warning'},
                {row : 4, disabled : true}
            ]
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :row-set="rowset" :show-col-name="true"></ui-table>
    :::

    #### 单元格控制

    `ui-table`通过`cell-set`配置，可以设置单元格的：

    - 样式
    - 禁用状态
    - 对齐方式

    更多单元格控制见`cell-set`配置。
    
    下面是一个简单的示例：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ],
            cellset : [
                {row : 0, col : 'age', style : 'success'},
                {row : 2, col : 'gender', disabled : true},
                {row : 3, col : 'job', style : 'danger'},
                {row : 4, col : 'job', align : 'left'}
            ]
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :cell-set="cellset" :show-col-name="true"></ui-table>
    :::

    #### 内嵌HTML

    表格数据列表支持传入HTML内容，在渲染这些HTML也会被渲染：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {name : 'Tim Boelaars', age : 20, gender : 'male', action : '<a href="#">发送</a>'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', action : '<a href="#">发送</a>'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', action : '<a href="#">发送</a>'},
                {name : 'Victor Erixon', age : 15, gender : 'female', action : '<a href="#">发送</a>'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', action : '<a href="#">发送</a>'},
                {name : 'Emir Ayouni', age : 21, gender : 'male', action : '<a href="#">发送</a>'}
            ]
        }
    });
    ---
    <ui-table :list="list"></ui-table>
    :::

    #### 内嵌Vue组件

    表格数据列表的内容会通过Vue渲染，所以你可以使用Vue组件。

    :::vue/html
    window.demoVue = new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {name : 'Tim Boelaars', age : 20, gender : 'male', action : '<ui-btn color="success" size="xs">发送</ui-btn> <ui-link color="minor" size="xs">详情</ui-link>'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', action : '<ui-btn color="success" size="xs">发送</ui-btn> <ui-link color="minor" size="xs">详情</ui-link>'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', action : '<ui-btn color="success" size="xs">发送</ui-btn> <ui-link color="minor" size="xs">详情</ui-link>'}
            ]
        }
    });
    ---
    <ui-table :list="list"></ui-table>
    :::

    但需要注意的是由于在`list`中使用的组件是动态生成的，所以在组件中无法使用父辈Vue实例上的`props`、`data`、`methods`等属性或方法。

    `props`、`data`的处理可以将`list`设为计算属性来实现数据绑定：

    :::vue/html
    window.demoVue2 = new Vue({
        el : '{$el}',
        template : '{$template}',
        computed : {
            list : function () {
                return [
                    {name : 'Tim Boelaars', age : 20, gender : 'male', action : `<ui-btn color="success" size="xs">${this.btntext}</ui-btn> <ui-link color="minor" size="xs">详情</ui-link>`},
                    {name : 'Andrew Colin Beck', age : 41, gender : 'female', action : `<ui-btn color="success" size="xs">${this.btntext}</ui-btn> <ui-link color="minor" size="xs">详情</ui-link>`},
                    {name : 'Gustavo Zambelli', age : 23, gender : 'male', action : `<ui-btn color="success" size="xs">${this.btntext}</ui-btn> <ui-link color="minor" size="xs">详情</ui-link>`}
                ];
            }
        },
        data : {
            btntext : '发送'
        }
    });
    ---
    <div>
        <ui-table ref="demoPropsData" :list="list"></ui-table>
        <ui-link js="window.demoVue2.btntext = '发送至邮箱'">修改btntext</ui-link>
    </div>
    :::

    `methods`可以通过全局方法来代理，比如在下面的例子中第一个发送是无法直接调用`this.send`，会报错。而第二个发送通过全局的`window.sendProxy`来进行转发，从而调用父辈Vue实例的方法：

    :::vue/html
    window.demoVue = new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {name : 'Tim Boelaars', age : 20, gender : 'male', action : '<ui-btn color="success" size="xs" @emit="send(0);">第一个发送</ui-btn> <ui-link color="minor" size="xs">详情</ui-link>'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', action : '<ui-btn color="success" size="xs" @emit="window.sendProxy(1);">第二个发送</ui-btn> <ui-link color="minor" size="xs">详情</ui-link>'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', action : '<ui-btn color="success" size="xs">发送</ui-btn> <ui-link color="minor" size="xs">详情</ui-link>'}
            ]
        },
        methods : {
            send : function (id) {
                alert(`${this.list[id].name}发送成功!`);
            }
        }
    });

    window.sendProxy = id => window.demoVue.send(id);
    ---
    <ui-table :list="list"></ui-table>
    :::

    #### 无数据

    当表格无数据时：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : []
        }
    });
    ---
    <ui-table :list="list"></ui-table>
    :::

    如果设置了表头，表头仍然会显示：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [],
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :show-col-name="true" export-csv title="无数据演示"></ui-table>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|全部|`light-gray`|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a>

    #### 色彩

    :::repeat/html
    color:theme
    color:feature
    color:black
    color:blue
    color:silver
    color:gray
    ---
    <p>{$colorName}</p>
    <ui-table :list="window.list" color="{$colorKey}"></ui-table>
    <br>
    :::

    [[[配置]]]

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|-|-|
    |[list](#list)|表格数据，这是一个数组，数组中每个对象是一行。对象的每个键是一列，键名是列的KEY，键值是列的数值。<br><br>表格的列是对象中所有键的合集，若某项缺少键，对应的单元格内会显示为`empty-cell`的内容。|数组|Array|`[]`|
    |[empty-cell-value](#empty-cell-value)|如果某个单元格的内容是`undefined`，则设置的默认值|字符串|String|`'-'`|
    |[title](#title)|表格的标题|标题字符串|String|`undefined`|
    |[zebra-pattern](#zebra-pattern)|表格斑马线样式|`true`<br>`false`|Boolean|`true`|
    |[vertical-border](#vertical-border)|显示表格内的竖直边框|`true`<br>`false`|Boolean|`true`|
    |[horizontal-border](#horizontal-border)|显示表格内的横向边框|`true`<br>`false`|Boolean|`true`|
    |[align](#align)|列的对齐方式，这是单个表格的全局设置，可以使用`col-set`来单独设置某一列的对齐方式|`'left'`: 左对齐<br>`'center'`: 居中对齐<br>`'right'`: 右对齐|String|`'center'`|
    |[show-col-name](#show-col-name)|在标题行显示列的名称，需要先在`col-set`中设置每列的名称|`true`<br>`false`|Boolean|`false`|
    |[fixed-title-col](#fixed-title-col)|标题列的位置，可以设置左侧或右侧。对于列数较多的表格，可以使用固定标题列。|`'left'`: 位于左侧，不固定<br>`'right'`: 位于右侧，不固定<br>`'left-fixed'`: 位于左侧，固定<br>`'right-fixed'`: 位于右侧，固定|String|`'left'`|
    |[col-set](#col-set)|列设置可以用来控制单独的一列，具体配置方法见下面的[col-set](#col-set)章节|数组|Array|`[]`|
    |[row-set](#row-set)|单行设置可以用来控制一行，具体配置方法见下面的[row-set](#row-set)章节|数组|Array|`[]`|
    |[cell-set](#cell-set)|单元格设置可以用来控制单个单元格，具体配置方法见下面的[cell-set](#cell-set)章节|数组|Array|`[]`|
    |[export-csv](#export-csv)|开启将表格导出csv文件的功能|`true`<br>`false`|Boolean|`false`|
    |[csv-name](#csv-name)|导出csv文件的名称|文件名称(不需要加尾缀)|String|`undefined`|
    |[multi-sort](#multi-sort)|支持多列排序，默认只支持单列排序。多列排序时会根据所选排序列的顺序进行多次排序。使用此配置前需要先通过`col-set`的指定排序列|`true`<br>`false`|Boolean|`false`|

    #### list

    用于设置表格的数据，`list`数组内每一个对象是一行，对象的每个键是一列：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Emir Ayouni', age : 21, gender : 'male', job : 'gardener'}
            ]
        }
    });
    ---
    <ui-table :list="list"></ui-table>
    :::

    表格的列是`list`中所有对象键的合集，若`list`中对象的键是不完全：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {name : 'Tim Boelaars', gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', job : 'doctors'},
                {name : 'Shaun Moynihan'},
                {}
            ]
        }
    });
    ---
    <ui-table :list="list"></ui-table>
    :::

    #### empty-cell-value

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {name : 'Tim Boelaars', gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', job : 'doctors'},
                {name : 'Shaun Moynihan'},
                {}
            ]
        }
    });
    ---
    <ui-table :list="list" empty-cell-value="空"></ui-table>
    :::

    #### title

    :::democode/html
    <ui-table :list="list" title="这里是表格标题"></ui-table>
    :::

    #### zebra-pattern
    
    关闭斑马线样式：

    :::democode/html
    <ui-table :list="list" :zebra-pattern="false"></ui-table>
    :::

    #### vertical-border
    
    隐藏表格内竖直边框：

    :::democode/html
    <ui-table :list="list" :vertical-border="false"></ui-table>
    :::

    #### horizontal-border
    
    隐藏表格内横向边框：

    :::democode/html
    <ui-table :list="list" :horizontal-border="false"></ui-table>
    :::

    隐藏表格内所有边框：

    :::democode/html
    <ui-table :list="list" :vertical-border="false" :horizontal-border="false"></ui-table>
    :::

    #### align

    列内容右对齐：

    :::democode/html
    <ui-table :list="list" align="right"></ui-table>
    :::

    列内容左对齐：

    :::democode/html
    <ui-table :list="list" align="left"></ui-table>
    :::

    #### show-col-name

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :show-col-name="true"></ui-table>
    :::

    #### fixed-title-col
    
    此配置需要先在`col-set`中设置标题列。

    将标题列放到右侧：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : [
                {col : 'name', name : 'Name', title : true},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender', title : true},
                {col : 'job', name : 'Job'}
            ]
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :show-col-name="true" fixed-title-col="right"></ui-table>
    :::

    将标题列固定在左侧：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.biglist,
            colset : [
                {col : 'name', name : 'Name', title : true, minwidth : '120px'},
                {col : 'age', name : 'Age', minwidth : '300px'},
                {col : 'gender', name : 'Gender', title : true, minwidth : '80px'},
                {col : 'job', name : 'Job', minwidth : '300px'},
                {col : 'country', name : 'Country', minwidth : '300px'},
                {col : 'height', name : 'Height', minwidth : '300px'},
                {col : 'weight', name : 'Body weight', minwidth : '300px'}
            ]
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :show-col-name="true" fixed-title-col="left-fixed"></ui-table>
    :::

    将标题列固定在右侧，且导出的表格的列顺序也一样：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.biglist,
            colset : [
                {col : 'name', name : 'Name', title : true, minwidth : '120px'},
                {col : 'age', name : 'Age', minwidth : '300px'},
                {col : 'gender', name : 'Gender', title : true, minwidth : '80px'},
                {col : 'job', name : 'Job', minwidth : '300px'},
                {col : 'country', name : 'Country', minwidth : '300px'},
                {col : 'height', name : 'Height', minwidth : '300px'},
                {col : 'weight', name : 'Body weight', minwidth : '300px'}
            ]
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :show-col-name="true" fixed-title-col="right-fixed" export-csv></ui-table>
    :::

    #### col-set

    `col-set`用于列控制，是一个数组，数组的每项都是一个配置对象。

    配置对象包含下面这些属性，其中`col`用来定位需要设置列的位置。

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|-|-|
    |col|需要设置列的KEY|列的KEY(`list`配置中设置)|String|`undefined`|
    |name|列的名称，如果开启`show-col-name`配置，名称会显示在标题行|名称|String|`undefined`|
    |width|列的宽度，此配置会改变列在宽度分配时的权重，但不一定完全符合设置的宽度值，如果需要控制宽度的绝对值使用`minwidth`或`maxwidth`|宽度数值(必需包含单位`px`或`%`)|String|`undefined`|
    |minwidth|列的最小宽度|宽度数值(必需包含单位`px`或`%`)|String|`undefined`|
    |maxwidth|列的最小宽度|宽度数值(必需包含单位`px`或`%`)|String|`undefined`|
    |style|设置列的色彩样式|[形态/颜色](/guide/status.html#颜色)中所有的颜色值|String|`undefined`|
    |disabled|是否展示列的禁用样式|`true`<br>`false`|Boolean|`false`|
    |align|列的对齐方式|`'left'`<br>`'right'`<br>`'align'`|String|`'align'`|
    |title|此列是否是标题列，根据`fixed-title-col`的设置所有的标题列会被放到最左或最右|`true`<br>`false`|Boolean|`false`|
    |hide|在表格中隐藏列，用于某些在`list`存在但不需要在展示的数据。列隐藏后在导出`.csv`文件时仍然会存在，如在导出`.csv`文件时也要排除，使用`col-set`配置的`export`属性来控制|`true`<br>`false`|Boolean|`false`|
    |export|导出`.csv`文件时，是否包含此列，若设为`false`此列不会被导出。一般包含行动区域的列会将此配置设为`false`|`true`<br>`false`|Boolean|`true`|
    |sort|开启单列排序，必需启用`show-col-name`才有效。多列排序需要启用`multi-sort`配置|`true`<br>`false`|Boolean|`false`|

    注意：在设置`width`、`minwidth`、`maxwidth`为0时，需要加上单位，如：`0px`或`0%`。

    ---

    ##### name

    通过`name`及`show-col-name`设置标题行：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :show-col-name="true"></ui-table>
    :::

    标题行结合表头：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        }
    });
    ---
    <ui-table :list="list" title="表名" :col-set="colset" :show-col-name="true"></ui-table>
    :::

    ##### width、minwidth、maxwidth

    设置列的`width` 、 `minwidth` 、 `maxwidth`：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : [
                {col : 'name', name : 'Name', maxwidth : '50px'},
                {col : 'age', name : 'Age', width : '150px'},
                {col : 'gender', name : 'Gender', minwidth : '150px'},
                {col : 'job', name : 'Job'}
            ]
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :show-col-name="true"></ui-table>
    :::

    ##### style

    设置指定列的样式（仅支持形态中的色彩）：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age', style : 'primary'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :show-col-name="true"></ui-table>
    :::

    ##### disabled

    将单元格设置为禁用样式：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age', disabled : true},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :show-col-name="true"></ui-table>
    :::

    ##### align

    使用`align`来单独设置某一列的对齐方式：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : [
                {col : 'name', name : 'Name', align : 'right'},
                {col : 'age', name : 'Age', align : 'left'},
                {col : 'gender', name : 'Gender', align : 'center'},
                {col : 'job', name : 'Job'}
            ]
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :show-col-name="true"></ui-table>
    :::

    ##### title

    使用`title`来置标题列，标题列会被放置在最左或最右（通过`fixed-title-col`设置）：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : [
                {col : 'name', name : 'Name', title : true},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender', title : true},
                {col : 'job', name : 'Job'}
            ]
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :show-col-name="true"></ui-table>
    :::

    使用`title`设置标题列之后，导出的`csv`的列顺序也会保持一致：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : [
                {col : 'name', name : 'Name', title : true},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender', title : true},
                {col : 'job', name : 'Job'}
            ]
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :show-col-name="true" export-csv></ui-table>
    :::

    使用`title`设置标题列之后，若未开启`show-col-name`，导出的`csv`不会包含标题行：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : [
                {col : 'name', name : 'Name', title : true},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender', title : true},
                {col : 'job', name : 'Job'}
            ]
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" export-csv></ui-table>
    :::

    ##### hide
    
    在表格中隐藏`Job`和`Gender`列，同时不导出`Gender`列：    

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender', hide : true, export : false},
                {col : 'job', name : 'Job', hide : true}
            ]
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :show-col-name="true" export-csv></ui-table>
    :::

    ##### export

    不导出`Gender`列：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender', export : false},
                {col : 'job', name : 'Job'}
            ]
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :show-col-name="true" export-csv></ui-table>
    :::

    ##### sort

    通过`sort`字段可以开启单列排序(多列排序需要开启`multi-sort`配置)，并且导出的`csv`也是排序之后的顺序：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : [
                {col : 'name', name : 'Name', sort : true},
                {col : 'age', name : 'Age', sort : true},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :show-col-name="true" export-csv></ui-table>
    :::

    标题列也可以使用`sort`：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : [
                {col : 'name', name : 'Name', sort : true, title : true},
                {col : 'age', name : 'Age', sort : true},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ]
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :show-col-name="true" export-csv></ui-table>
    :::

    #### row-set

    `row-set`用于行控制，是一个数组，数组的每项都是一个配置对象，用来设置单行。

    配置对象包含下面这些属性，其中`row`用来定位需要设置行的位置。

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|-|-|
    |row|需要设置的行数(从0开始，0表示标题行)|行数|Number|`undefined`|
    |style|设置行的色彩样式|[形态/颜色](/guide/status.html#颜色)中所有的颜色值|String|`undefined`|
    |disabled|是否展示行的禁用样式|`true`<br>`false`|Boolean|`false`|
    |align|行的对齐方式|`'left'`<br>`'right'`<br>`'align'`|String|`'align'`|

    注意：在设置`width`、`minwidth`、`maxwidth`为0时，需要加上单位，如：`0px`或`0%`。

    ---

    ##### style

    设置指定行的样式（仅支持形态中的色彩）：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ],
            rowset : [
                {row : 0, style : 'success'},
                {row : 2, style : 'warning'}
            ]
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :row-set="rowset" :show-col-name="true"></ui-table>
    :::

    ##### disabled

    将单行设置为禁用样式：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            rowset : [
                {row : 1, disabled : true}
            ]
        }
    });
    ---
    <ui-table :list="list" :row-set="rowset" export-csv></ui-table>
    :::

    ##### align

    使用`align`来设置单行的对齐方式：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ],
            rowset : [
                {row : 0, align : 'left'},
                {row : 1, align : 'right'},
                {row : 2, align : 'center'}
            ]
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :row-set="rowset" :show-col-name="true"></ui-table>
    :::

    #### cell-set

    `cell-set`用于单元格控制，是一个数组，数组的每项都是一个配置对象，用来设置单个单元格。

    配置对象包含下面这些属性，其中`row`和`col`用来定位需要设置单元格的位置。

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|-|-|
    |row|需要设置单元格的行数(从0开始，0表示标题行)|行数|Number|`undefined`|
    |col|需要设置单元格所在列的KEY|列的KEY(`list`配置中设置)|String|`undefined`|
    |style|设置单元格的色彩样式|[形态/颜色](/guide/status.html#颜色)中所有的颜色值|String|`undefined`|
    |disabled|是否展示单元格的禁用样式|`true`<br>`false`|Boolean|`false`|
    |align|单元格的对齐方式|`'left'`<br>`'right'`<br>`'align'`|String|`'align'`|

    注意：在设置`width`、`minwidth`、`maxwidth`为0时，需要加上单位，如：`0px`或`0%`。

    ---

    ##### style

    设置指定单元格的样式（仅支持形态中的色彩）：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ],
            cellset : [
                {row : 0, col : 'age', style : 'success'},
                {row : 2, col : 'age', style : 'warning'},
                {row : 3, col : 'job', style : 'danger'}
            ]
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :cell-set="cellset" :show-col-name="true"></ui-table>
    :::

    ##### disabled

    将单元格设置为禁用样式：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            cellset : [
                {row : 1, col : 'age', disabled : true}
            ]
        }
    });
    ---
    <ui-table :list="list" :cell-set="cellset" export-csv></ui-table>
    :::

    ##### align

    使用`align`来单独设置单元格的对齐方式：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : [
                {col : 'name', name : 'Name'},
                {col : 'age', name : 'Age'},
                {col : 'gender', name : 'Gender'},
                {col : 'job', name : 'Job'}
            ],
            cellset : [
                {row : 0, col : 'age', align : 'left'},
                {row : 1, col : 'age', align : 'right'},
                {row : 2, col : 'age', align : 'center'},
                {row : 3, col : 'age', align : 'left'},
                {row : 4, col : 'age', align : 'right'}
            ]
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" :cell-set="cellset" :show-col-name="true"></ui-table>
    :::

    #### export-csv

    :::democode/html
    <ui-table :list="list" export-csv></ui-table>
    :::

    #### csv-name

    :::democode/html
    <ui-table :list="list" export-csv csv-name="demo"></ui-table>
    :::

    #### multi-sort

    使用`multi-sort`后设置多个排序列，当多个列进行排序时会按照先后顺序对表格进行多次排序：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list,
            colset : [
                {col : 'name', name : 'Name', sort : true},
                {col : 'age', name : 'Age', sort : true},
                {col : 'gender', name : 'Gender', sort : true},
                {col : 'job', name : 'Job'}
            ]
        }
    });
    ---
    <ui-table :list="list" :col-set="colset" show-col-name multi-sort export-csv></ui-table>
    :::

    [[[方法]]]
    
    无

    [[[事件]]]

    #### list-change

    当表格数据变化后触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : window.list
        },
        methods : {
            echo : function () {
                console.log('demo2.console1', `list-change event!`);
            }
        }
    });
    ---
    <div>
        <ui-table ref="demo2" :list="list" @list-change="echo"></ui-table>
        <br><br>
        <ui-link js="morning.findVM('demo2').conf.list = window.biglist;">重新设置表格数据</ui-link>
    </div>
    :::

    #### 生命周期事件

    :::vue/html
    window.demoEventLifecycle = new Vue({
        el : '{$el}',
        template : '{$template}',
        data : function () {
            return {
               list : window.list,
               text : '表格',
               show : true
            };
        },
        methods : {
            echo : function (name) {
                console.log('demoEventLifecycle.console1', `${name} event!`);
            }
        }
    });
    ---
    <div>
        <ui-table
            ref="demoEventLifecycle"
            v-show="show"
            :list="list"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @before-update="echo('before-update')"
            @updated="echo('updated')"
            @before-destroy="echo('before-destroy')"
            @destroyed="echo('destroyed')"
        >
        {*text*}
        </ui-table>

        <br><br>
    
        <ui-link js="window.demoEventLifecycle.text='生命周期事件';">触发update</ui-link>
        <ui-link js="morning.findVM('demoEventLifecycle').$destroy();">触发destroy</ui-link>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/table/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'table'
        };

    },
    created : function () {

        /* eslint-disable no-magic-number */
        window.list = [
            {
                name : 'Tim Boelaars',
                age : 20,
                gender : 'male',
                job : 'driver'
            },
            {
                name : 'Andrew Colin Beck',
                age : 41,
                gender : 'female',
                job : 'engineer'
            },
            {
                name : 'Gustavo Zambelli',
                age : 23,
                gender : 'male',
                job : 'teacher'
            },
            {
                name : 'Victor Erixon',
                age : 15,
                gender : 'female',
                job : 'doctors'
            },
            {
                name : 'Shaun Moynihan',
                age : 27,
                gender : 'female',
                job : 'driver'
            },
            {
                name : 'Emir Ayouni',
                age : 21,
                gender : 'male',
                job : 'gardener'
            }
        ];

        window.biglist = [
            {
                name : 'Tim Boelaars',
                age : 20,
                gender : 'male',
                job : 'driver',
                country : 'England',
                height : 187,
                weight : 160
            },
            {
                name : 'Andrew Colin Beck',
                age : 41,
                gender : 'female',
                job : 'engineer',
                country : 'United States',
                height : 165,
                weight : 116
            },
            {
                name : 'Gustavo Zambelli',
                age : 23,
                gender : 'male',
                job : 'teacher',
                country : 'Thailand',
                height : 178,
                weight : 132
            },
            {
                name : 'Victor Erixon',
                age : 15,
                gender : 'female',
                job : 'doctors',
                country : 'United States',
                height : 159,
                weight : 100
            },
            {
                name : 'Shaun Moynihan',
                age : 27,
                gender : 'female',
                job : 'driver',
                country : 'England',
                height : 163,
                weight : 116
            },
            {
                name : 'Emir Ayouni',
                age : 21,
                gender : 'male',
                job : 'gardener',
                country : 'United States',
                height : 173,
                weight : 122
            }
        ];
        /* eslint-enable no-magic-number */

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
