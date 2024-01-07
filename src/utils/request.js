//引入axios
import axios from "axios";
axios.defaults.timeout = 30000;
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500; // 默认的
};
// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true;

export default axios;
