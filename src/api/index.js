import request from "@/utils/request";
/**
 * @description: 获取车队列表
 * @param {*} body
 * @return {*}
 */
export const getCarList = (body) => {
  return request({
    url: "/carpage",
    method: "post",
    data: body,
  });
};
