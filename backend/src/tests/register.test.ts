import { createApp, App } from "../App";
import { User } from "../entity/User";
import { request } from "graphql-request";

const email = "cole.samuel+test.registration@test.com";
const password = "test123";

const mutation = `
mutation {
	register(email: "${email}", password: "${password}")
}
`;

let app: App;
let response: any;
let users: User[];
beforeAll(async () => {
  app = await createApp();
  await app.start(8080);
  response = await request("http://localhost:8080", mutation);
  users = await User.find({ where: { email } });
});

afterAll(async () => {
  await app.stop();
});

test("returns the correct response ", async () => {
  expect(response).toEqual({ register: true });
});

test("inserts the user into the database", async () => {
  const user = users[0];
  expect(users.length).toBe(1);
  expect(user.email).toEqual(email);
});

test("does not store the password in plaintext", async () => {
  const user = users[0];
  expect(user.password.length).toBeGreaterThan(0);
  expect(user.password).not.toEqual(password);
});
