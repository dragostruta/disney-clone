import { GraphQLClient } from "graphql-request";

export default async ({ body }, res) => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });

  await graphQLClient.request(
    `mutation($slug: String!) {
    updateVideo(where: {slug: $slug}, data: {seen: true}) {
      id, seen, title
    }
  }`,
    { slug: body.slug }
  );

  await graphQLClient.request(
    `mutation publishVideo($slug: String) {
          publishVideo(where: {slug: $slug} to: PUBLISHED) {
              slug
          }
          }`,
    { slug: body.slug }
  );

  res.status(201).json({ slug: body.slug });
};
