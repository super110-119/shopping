export default {
  addCart(state, data) {
    let mydata = data
    mydata.checked = false
    state.cartList.push(mydata)
  },
  sanChange(state){
    for (let item of state.cartList){
      item.checked = !item.checked
    }
  },
  allCheck(state){
    for (let item of state.cartList){
      item.checked = true
    }
  },
  allNotCheck(state){
    for (let item of state.cartList){
      item.checked = false
    }
  },
  deleteSan(state){
    let fn = () => {
      let a = 0
      for (let i of state.cartList){
        if (i.checked){
          state.cartList.splice(a, 1)
          a = 0
          fn()
        }else{
          a++
        }
      }
    }
    fn()
  }
}
