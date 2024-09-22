import request, { gql } from "graphql-request";
const MASTER_URL =
  process.env.NEXT_PUBLIC_BACKEND_API_URL || "http://localhost:3000";
export const GetCategory = async () => {
  const query = gql`
    query MyQuery {
      categories(first: 10) {
        id
        slug
        name
        icon {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
