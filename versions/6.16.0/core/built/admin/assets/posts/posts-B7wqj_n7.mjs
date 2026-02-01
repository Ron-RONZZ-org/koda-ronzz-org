import { a as t, b as o, c as a } from "./hooks-DCiJHQ9c.mjs";
const p = "ConfigResponseType", c = t({
  dataType: p,
  path: "/config/"
}), e = "PostsResponseType", r = t({
  dataType: e,
  path: "/posts/"
}), u = a({
  dataType: e,
  path: (s) => `/posts/${s}/`
}), y = o({
  method: "DELETE",
  path: (s) => `/posts/${s}/`
});
export {
  y as a,
  c as b,
  u as g,
  r as u
};
//# sourceMappingURL=posts-B7wqj_n7.mjs.map
