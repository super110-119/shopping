import axios from 'axios'
// 主页请求
function home(config){
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/",
    timeout: 5000
  })

  // 配置请求拦截
  instance.interceptors.request.use(config =>{
    return config
  },err => {
    console.log(err);
  })
  // 配置响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  return instance(config)
}
// 详情页
function detail(config) {
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/api/n3/",
    timeout: 5000
  })
  instance.interceptors.request.use(config =>{
    return config
  },err => {
    console.log(err);
  })
  // 配置响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  return instance(config)
}
// 分类
function lookMore(config) {
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/api/n3/",
    timeout: 5000
  })
  return instance(config)
}
export default {
  home, detail, lookMore
}
