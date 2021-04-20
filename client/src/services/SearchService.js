import Api from "@/services/Api";

export default {
  filter(make) {
    return Api().get(`search/${make}`);
  },
  all() {
    return Api().get('/');
  }
};
