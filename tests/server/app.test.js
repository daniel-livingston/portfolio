const request = require("supertest");
const { app } = require("../../server/app");

test("GET /", async () => {
	await request(app).get("/").send().expect(200);
});
