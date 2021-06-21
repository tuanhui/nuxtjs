module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'my-project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  **  全局配置css
  */ 
  css:['~assets/css/normailze.css','~assets/css/main.css'],   //定制css,全局css
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [  //三方插件，可以直接在页面中使用
   { src:'~/plugins/axios',ssr:false},
   { src:'~plugins/elementUI',ssr:false},
   { src:'~plugins/visibility',ssr:false},
  ],
  modules: [
    '@nuxtjs/axios',
    "@nuxtjs/proxy"
  ],
  // 环境变量
  env: {
    baseUrl: process.env.BASE_URL || '/api'
  },
  //针对nuxt/axios, 使用axios，直接在plugin/axios 配置
  axios: {
    proxy: true, // 表示开启代理
    prefix: '/api', // 表示给请求url加个前缀 /api
    credentials: true // 表示跨域请求时是否需要使用凭证
  },
  proxy: {  
    '/api': {
        target: 'http://img.easylabplus.com:8018/rent/', // 目标接口域名
        changeOrigin: true, // 表示是否跨域
        pathRewrite: {
          '^/api': '', // 把 /api 替换成‘’
        }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['~plugins/axios.js'],
    /*  配置webpack:  url-loader */ 
    // loaders:[    //目前用不了，老是报错 UN的find 和 null 在object
    //   // 进行小图片的64位打包
    //   {
    //     test:/\.(png|jpe?g|gif|svg)$/,
    //     loader:"url-loader",
    //     query:{
    //       limit:10000,   // 小于10K的资源转成base64编码的dataURL字符串写到代码中
    //       name:'img/[name].[hash:7].[ext]'
    //     }
    //   },
    //   {// 对多媒体资源文件使用url-loader
    //     test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
    //     loader: 'url-loader',
    //     options: {
    //       limit: 10000,
    //       name:'media/[name].[hash:7].[ext]'
    //       // 其他的资源转移到静态资源文件夹  // name: utils.assetsPath('media/[name].[hash].[ext]')
    //     }
    //   },
    //   {// 对字体资源文件使用url-loader
    //     test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    //     loader: 'url-loader',
    //     options: {
    //       limit: 10000,
    //       name:'fonts/[name].[hash:7].[ext]',
    //     }
    //   }
    // ],
    
    // 进行小图片的64位打包
    export (config,{ isDev, isClient }){
      config.module.rules.push({
        test:/\.(png|jpe?g|gif|svg)$/,
        loader:"url-loader",
        options: {
          limit:10000,
          name:'img/[name].[hash:7].[ext]'
        }
      })
    },
    // 对多媒体资源文件使用url-loader
    export (config,{ isDev, isClient }){
      config.module.rules.push({
        test:/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader:"url-loader",
        options: {
          limit:10000,
          name:'media/[name].[hash:7].[ext]'
        }
      })
    },
    // 对字体资源文件使用url-loader
    export (config,{ isDev, isClient }){
      config.module.rules.push({
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader:"url-loader",
        options: {
          limit:10000,
          name:'fonts/[name].[hash:7].[ext]'
        }
      })
    },
    // 文件打包
    export (config,{ isDev, isClient }){
      config.module.rules.push({
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit:10000,
          name: '[path][name].[hash:7].[ext]'
        }
      })
    },
    
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

