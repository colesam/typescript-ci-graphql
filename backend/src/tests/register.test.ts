import { request } from "graphql-request";

const email = "cole.samuel+test.registration@test.com";
const password = "test123";

const mutation = `
mutation {
	register(email: "${email}", password: "${password}")
}
`;

test("Registers user", async () => {
  const response = await request("http://localhost:8080", mutation);
  expect(response).toEqual({ register: true });
});
