import Api from "@/services/Api";

export default {
  show(make) {
    return Api().get(`test/${make}`);
  },
};
