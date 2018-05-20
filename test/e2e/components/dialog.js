import test                         from 'ava';
import nightmare                    from 'nightmare';
import cleanstyle                   from '../../helpers/cleanstyle';
import common                       from '../../helpers/common';

const runner = nightmare({
    show : false
});

let tagName = 'dialog';
let docUrl = common.getE2eDocUrl(tagName);
let basicDemo = `[name="开始"] mor-${tagName}`;

let context = {
    tagName,
    basicDemo,
    common
};

test.serial('basic style', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(
            eval(`(${common.e2eBasicFnString})`),
            context
        );

    t.plan(1);

    cleanstyle(result.style);

    // cause : circleci use other webkit.
    delete style.blockSize;
    delete style.height;
    delete style.perspectiveOrigin;
    delete style.webkitLogicalHeight;

    t.snapshot(result);

});

test.serial('color', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(
            eval(`(${common.e2eStatementFnString})`),
            context,
            'color',
            [{
                child : '.content > header',
                attrs : [
                    'background-color',
                    'color'
                ]
            }],
            '[name="开始"] mor-dialog.has-header'
        );

    t.plan(2);

    t.snapshot(result);
    t.is(JSON.stringify(result.color.theme), JSON.stringify(result.default));

});
