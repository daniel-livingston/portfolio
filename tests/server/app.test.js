const request = require("supertest");
const { app } = require("../../server/app");

test("GET /", () => {
	request(app).get("/").send().expect(200);
});
