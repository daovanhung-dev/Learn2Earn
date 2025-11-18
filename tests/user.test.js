import { users } from "../src/models/userModel.js";

test("should have users", () => {
  expect(users.length).toBeGreaterThan(0);
});