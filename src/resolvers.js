module.exports = {
  Query: {
    info: () => "this is a clone of hacker news",
    feed: async (parent, args, context) => {
      return context.prisma.link.findMany();
    },
  },
  Mutation: {
    post: (parent, args, context, info) => {
      const newLink = context.prisma.link.create({
        data: {
          description: args.description,
          url: args.url
        }
      });
      return newLink;
    }
  },
};
