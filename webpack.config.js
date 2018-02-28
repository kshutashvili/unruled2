const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const dev = require("./webpack/dev.config");
const prod = require("./webpack/prod.config");
const SpritesmithPlugin = require("webpack-spritesmith");

const paths = {
    src: path.join(__dirname + "/src"),
    build: path.join(__dirname + "/build")
};

const common = merge([
    {
        devtool: "source-map",
        entry: {
            'index': paths.src + '/pages/index/index.js',
            'portfolio': paths.src + '/pages/portfolio/portfolio.js',
            'about': paths.src + '/pages/about/about.js',
            'vacancy': paths.src + '/pages/vacancy/vacancy.js',
            'blog': paths.src + '/pages/blog/blog.js',
            'article': paths.src + '/pages/article/article.js',
            'article2': paths.src + '/pages/article2/article2.js',
            'bot': paths.src + '/pages/bot/bot.js'
        },
        output: {
            path: paths.build,
            filename: 'js/[name].js'
        },
        resolve: {
            //webpack 2:
            modules: ["node_modules", path.resolve(paths.src + "/img/sprite.png")]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: paths.src + '/pages/index/index.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'portfolio.html',
                chunks: ['portfolio', 'common'],
                template: paths.src + '/pages/portfolio/portfolio.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'about.html',
                chunks: ['about', 'common'],
                template: paths.src + '/pages/about/about.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'vacancy.html',
                chunks: ['vacancy', 'common'],
                template: paths.src + '/pages/vacancy/vacancy.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'blog.html',
                chunks: ['blog', 'common'],
                template: paths.src + '/pages/blog/blog.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'article.html',
                chunks: ['article', 'common'],
                template: paths.src + '/pages/article/article.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'article2.html',
                chunks: ['article2', 'common'],
                template: paths.src + '/pages/article2/article2.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'bot.html',
                chunks: ['bot', 'common'],
                template: paths.src + '/pages/bot/bot.html'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common'
            }),
            new SpritesmithPlugin({
                src: {
                    cwd: path.resolve(paths.src + "/sprite"),
                    glob: '*.png'
                },
                target: {
                    image: path.resolve(paths.src + "/img/sprite.png"),
                    css: path.resolve(__dirname, 'src/scss/base/sprite.scss')
                },
                /* customTemplates: {
                    'scss.template.mustache': './scss.template.mustache'
                }, */
                apiOptions: {
                    cssImageRef: "../../img/sprite.png"
                }
            }),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            })
        ]
    }
]);



module.exports = function (env) {
    if (env === "production") {
        return merge([
            common,
            prod()
        ]);
    }
    if (env === "development") {
        return merge([
            common,
            dev()
        ]);

    }
};