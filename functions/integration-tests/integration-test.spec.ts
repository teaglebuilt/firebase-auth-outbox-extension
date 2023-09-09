import axios from "axios";
import { expect } from "chai";

describe("firebase-auth-outbox", () => {
  it("should respond with the configured greeting", async () => {
    const expected = "";

    const httpFunctionUri = "http://localhost:5001/demo-test/us-east1/ext-firebase-auth-outbox/";
    const res = await axios.get(httpFunctionUri);

    // return expect(res.data).to.eql(expected);
  }).timeout(10000);
});
