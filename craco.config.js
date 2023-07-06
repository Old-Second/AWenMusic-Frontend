const CracoLessPlugin = require('craco-less');

module.exports = {
  devServer: {
    proxy: {
      '/awen': {
        target: 'http://awen.oldsecond.cn/awen',
        changeOrigin: true,
        pathRewrite: {
          '^/awen': ''
        }
      }
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#ec4141' },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};
