import request from '@/utils/request'

// 查询在线用户列表
export function list(query) {
  return request({
    url: '/sys_user/getOnlineUserList',
    method: 'get',
    params: query
  })
}

// 强退用户
export function forceLogout(tokenId) {
  return request({
    url: '/sys_user/' + tokenId,
    method: 'delete'
  })
}
