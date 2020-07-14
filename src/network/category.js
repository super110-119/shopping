import axios from "./axios";
export function getMessAge() {
  return  axios.lookMore({
    url: '/category'
  })
}
export function getMoreMes(maitKey, miniWallkey, type) {
  return axios.lookMore({
    url: '/subcategory/detail',
    params: {
      maitKey, miniWallkey, type
    }
  })
}
