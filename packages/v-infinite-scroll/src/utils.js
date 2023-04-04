/**
 * @Description 用于判断滚动条是否到达底部
 * @param { Element }
 * @return { Boolean }
 **/
 export function checkArriveBottom(el) {
    const clientHeight = el.clientHeight;
    const scrollTop = el.scrollTop;
    const scrollHeight = el.scrollHeight;
    //可以设置>=就行，这里也可以设置距离底部一定距离，自定义，不一定非要到达底部
    return clientHeight + scrollTop >= scrollHeight;
  }