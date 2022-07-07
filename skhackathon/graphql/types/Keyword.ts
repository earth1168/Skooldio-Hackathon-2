import { DateTimeResolver } from "graphql-scalars";
import { asNexusMethod, objectType } from "nexus";

export const GQLDate = asNexusMethod(DateTimeResolver, "date");

export const Keyword = objectType({
  name: "Keyword",
  definition(t) {
    t.int("id");
    t.date("createdAt");
    t.string("word");
  },
});

export const Query = objectType({
  name: "Query",
  definition(t) {
    t.list.field("keywords", {
      type: "Keyword",
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.keyword.findMany();
      },
    });
    t.list.field("questions", {
      type: "Question",
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.question.findMany();
      },
    });
  },
});
