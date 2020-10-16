import axios from 'axios'

// 自动切换环境
axios.defaults.baseURL = 'http://172.16.89.91/portal-ctx';
// 设置超时时间
axios.defaults.timeout = 10000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.withcredentials = true;

//请求拦截(请求发出前处理请求)
axios.interceptors.request.use((config) => {
    //在发送请求之前如果为post序列化请求参数
    if (config.method === 'post') {
        // config.data = config.data;
    }
    config.headers['X-Auth-Token'] = `27bd581e-83ee-4a6f-b615-50835c406a4b`;
    config.headers['Client-Type'] = `Browser`;
    config.headers['Client-Version'] = `5.2.7`;

    return config;
}, (error) => {
    return Promise.reject(error);
});

// 响应拦截器（处理响应数据）
axios.interceptors.response.use((res) => {
    //对响应数据做判断，与后台协议统一接口返回格式
    console.log('>>>>>>>response: ', res);
    // if (res.data.succ != 'ok') { //这个判断可根据实际情况修改
    //     return Promise.reject(res);
    // }
    return res;
}, (error) => {
    return Promise.reject(error);
});

// 封装get方法
function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, params).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    });
}

// 封装post方法
function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    });
}

//对外接口
export function request({ method, url, data }) {
    if (method == 'get') {
        return get(url, data);
    } else if (method == 'post') {
        return post(url, data);
    }
}

export default {
    install(Vue) {
        Vue.prototype.$axios = axios;
        Vue.prototype.$request = function () {
            return request;
        }
    }
}