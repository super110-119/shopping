import ajax from './axios'
export function getDetail(iid) {
  return ajax.detail({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return ajax.detail({
    url: '/recommend',
  })
}

export class ItemParams{
  constructor(info, rule) {
    this.info = info
    this.rule = rule
    this.tables = this.rule.tables[0]
    this.desc = this.rule.desc
    this.disclaimer = this.rule.disclaimer
  }
}

export class DetailRate{
  constructor(rate) {
    this.rate = rate
    this.uname = this.rate.user.uname
    this.uimg = this.rate.user.avatar
    this.content = this.rate.content
    this.style = this.rate.style
    this.images = this.rate.images
    this.extraInfo = this.rate.extraInfo
  }
}


