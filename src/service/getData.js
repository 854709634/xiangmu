import fetch from '../config/fetch'

/**
 * 获取Logo信息
 */

export const contents = () => fetch('/contents');
/**
 * 获取分类列表
 */

export const lists = () => fetch('/lists');
/**
 * 获取轮播信息
 */

export const banners= () => fetch('/banners');
/**
 * 获取文本框信息
 */

export const iptvalue = () => fetch('/iptvalue');




