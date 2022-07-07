import { objectType } from "nexus";

export const Course = objectType({
  name: "Keyword",
  definition(t) {
    t.int("id");
    t.string("name");
    t.string("type");
    t.string("instructor");
    t.string("imageUrl");
  },
});
