module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'agencybet',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
     ** Default styles on all pages
     */
    css: [
        'assets/css/normalize.css',
        'assets/sass/main.sass'
    ],
    /*
    ** Customize the progress bar color
    */
    loading: {color: '#3B8070'},
    /*
    ** Build configuration
    */
    plugins: [{
        src: '~/plugins/ksvuescrollmagic',
        ssr: false
    },{
        src: '~plugins/vuetyper.js',
        ssr: false}],
    build: {
        /*
        ** Run ESLint on save
        */
        extend(config, {isDev}) {
            if (isDev && process.client) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                    options: {
                        fix: true
                    }
                })
            }
        }
    }
}

