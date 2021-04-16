import Api from "@/services/Api";

export default {
  show(make) {
    return Api().get(`search/${make}`);
  },
  all() {
    return Api().get('/');
  }
};
