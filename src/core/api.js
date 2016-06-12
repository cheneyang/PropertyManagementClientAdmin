/**
 * Created by Cheney Yang <yangcheng0816@gmail.com> on 16/6/3.
 */
import Const from './const'
import Log from './log'
import Data from './data'
import Util from './util'
import Vue from 'vue'

export default {
  COMMON: {
    login: function (name, password) {
      var hash = 'Basic ' + Util.Base64.encode(name + ':' + password)
      return post(Const.NET.API.ADMIN_LOGIN, {
        name: name,
        password: password
      }, {Authorization: hash}, true)
    }
  },
  ADMIN: {
    getAdminList: function () {
      return get(Const.NET.API.ADMIN_LIST)
    }
  }
}

function post (api, data, requestHeaders, raw) {
  var url = Const.NET.END_POINT + api
  Log.d(url + '?' + transformObjectToUrlencodedData(data))

  requestHeaders = configureRequestHeaders(requestHeaders)

  requestHeaders['Content-Type'] = 'application/x-www-form-urlencoded'

  return Vue.http.post(url, transformObjectToUrlencodedData(data), {
    headers: requestHeaders
  }).then(function (response) {
    if (!response.data.hasOwnProperty('code') || response.data.code !== 0) {
      return Promise.reject(JSON.stringify(response.data))
    }
    return raw ? response : response.data.data
  }, function (error) {
    Log.e(error)
    return error
  })
}

function get (api, params, requestHeaders, raw) {
  var url = Const.NET.END_POINT + api
  Log.d(url + '?' + transformObjectToUrlencodedData(params))

  return Vue.http.get(url, {}, {
    params: params,
    headers: configureRequestHeaders(requestHeaders)
  }).then(function (response) {
    if (!response.data.hasOwnProperty('code') || response.data.code !== 0) {
      return Promise.reject(JSON.stringify(response.data))
    }
    return raw ? response : response.data.data
  }, function (error) {
    Log.e(error)
    return error
  })
}

function transformObjectToUrlencodedData (obj) {
  var p = []
  if (obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        p.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
      }
    }
  }
  return p.join('&')
}

function configureRequestHeaders (requestHeaders) {
  if (!requestHeaders) {
    requestHeaders = {}
  }
  if (!requestHeaders.hasOwnProperty('Authorization')) {
    requestHeaders['Authorization'] = 'Basic ' + Data.getToken()
  }
  return requestHeaders
}

