const browsers = require("browserslist-config-anolilab");

module.exports = {
    presets: [
        [
            "@anolilab/babel-preset",
            {
                targets: browsers["production"],

                typescript: true,

                loose: true,
                looseClasses: true,
                looseObjectRestSpread: true,
                looseComputedProperties: true,
                looseParameters: true,
                looseTemplateLiterals: true,
                polyfillRegenerator: false
            },
        ],
    ],
};
