import ajax from "./axios";
export function getHomeMessage(){
  return ajax.home({
    url: '/home/multidata'
  })
}
export function getHomeGoods(type, page) {
  return ajax.home({
    url: 'api/n3/home/data',
    params: {
      type, page
    }
  })
}
