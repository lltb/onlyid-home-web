/**
 * 一些常用方法
 */
'use strict'

import axios from 'axios'
import config from './config'
import Vue from 'vue'

export function init() {
  // 初始化axios
  let instance = axios.create({ baseURL: config.baseUrl, withCredentials: true })

  instance.interceptors.response.use(
    res => {
      return res
    },
    err => {
      let res = err.response
      if (res) {
        if (res.status === 401) {
          location.assign(config.homeUrl)
        } else {
          window.vue.$message.error(res.data.error)
        }
      } else {
        window.vue.$message.error(err.message)
      }
      return Promise.reject(err)
    }
  )

  Vue.prototype.$axios = instance

  // 初始化bus
  Vue.prototype.$bus = new Vue()

  // 初始化storage
  Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
  }

  Storage.prototype.setObj = function(key, value) {
    this.setItem(key, JSON.stringify(value))
  }
}

export function goAnchor(selector) {
  document.querySelector(selector).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

export function urlArgs() {
  const args = {}
  const query = location.search.substring(1)
  const pairs = query.split('&')
  for (let i = 0; i < pairs.length; i++) {
    const p = pairs[i].split('=')
    args[p[0]] = decodeURIComponent(p[1])
  }
  return args
}
