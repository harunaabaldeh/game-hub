import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5c15d1fbefda49f7800e2c849c18ee82",
  },
  //   headers: {},
});
