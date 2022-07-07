import {objectType } from "nexus";

export const Question = objectType({
  name: "Question",
  definition(t) {
    t.int("id");
    t.date("createdAt");
    t.string("question");
  },
});
