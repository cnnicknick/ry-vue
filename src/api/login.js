import { request } from '../axios/request'

// 登录接口
export const loginFn = (parmas) => {
    return request({
        url: '/auth/password-login',
        method: 'post',
        data: parmas
    })
}
