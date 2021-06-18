
/**
 * 封装Axios
 * 处理请求、响应错误信息
 */
 import Vue from 'vue'
 import { Message,Loading } from 'element-ui'  //引用饿了么UI消息组件
 import axios from 'axios' //引用axios
   
// axios 配置
// axios.defaults.timeout = 1000  //请求timeout
axios.defaults.withCredentials = false;   //发送cookie
axios.defaults.baseURL = 'http://img.easylabplus.com:8018/rent';   //所有异步请求都加上/api,nginx转发到后端Springboot

// // POST传参序列化
let  Url='';
if(process.env.NODE_ENV==="production"){ // 生产环境
  Url='http://img.easylabplus.com:8018/rent/';
}else{//本地开发
  // Url=window.g.Url;
  Url= 'http://img.easylabplus.com:8018/rent/';
  const baseimg = 'http://img.easylabplus.com:8001/myphoto/'//图片拼接
  Vue.prototype.showImgurl = baseimg //显示路径
  Vue.prototype.showListImgurl = baseimg + '/my/' //显示路径
  Vue.prototype.$seriesPhoto = baseimg + '/series/' //产品列表图片URL
  Vue.prototype.$companyPhoto = baseimg + '/companyPhoto/' //机构认证图片
  Vue.prototype.$bannerPhoto = baseimg + '/bannerImg/' //轮播图图片拼接路径
  Vue.prototype.$brandPhoto = baseimg + '/brandImg/' //品牌图片拼接路径
  Vue.prototype.$activityPhoto = baseimg + '/activity/' //热门资讯图片
  Vue.prototype.$fieldPhoto = baseimg + '/fieldImg/' //领域广告位图片

  Vue.prototype.$downloadXieyi = baseimg + '/procel/' //获取租赁协议
  Vue.prototype.$articleLink = baseimg + '/activity/' //首页实验方法上面的图片路径
  Vue.prototype.$photo = baseimg //图片路径（产品详情图）
}


  // request interceptor
  axios.interceptors.request.use(
    config => {
      // do something before request is sent
      // config.headers['-Token'] = getToken()
      return config
    },
    error => {
      // do something with request error
      console.log(error) // for debug
      return Promise.reject(error)
    }
  )
   
  // response interceptor
  axios.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */
   
    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
      const res = response.data //res is my own data
   
      if (!!res.success) {
      // do somethings when response success
      //   Message({
      //     message: res.message || '操作成功',
      //     type: 'success',
      //     duration: 1 * 1000
      //   })
        return res
      } else {
        // if the custom code is not 200000, it is judged as an error.
        Message({
          message: res.msg || 'Error',
          type: 'error',
          duration: 2 * 1000
        })
        return Promise.reject(new Error(res.msg || 'Error'))
      }
    },
    error => {
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
  )

Vue.prototype.$http = axios; 

export default { axios };   //导出封装后的axios
 
 