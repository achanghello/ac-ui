module.exports = {
    plugins: ["@vue/babel-plugin-jsx"],
    presets: [
        "@babel/preset-env",
        "@babel/preset-typescript"
    ],
    overrides: [{
        test: /\.vue$/,
        plugins: [
            "@babel/transform-typescript"
        ],
    }],
    env: {
        utils: {
            plugins: [
                [
                    'babel-plugin-module-resolver',
                    { root: 'ac-ui' }
                ]
            ]
        }
    }
}