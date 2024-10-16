import request from "supertest";
import { app } from ".";

test("/test/mirror", async () => {
  const res = await request(app).get("/test/mirror");

  expect(res.statusCode).toBe(200);
  expect(res.text).toContain("GET /test/mirror HTTP/1.1");
});

test("/index.js", async () => {
  const res = await request(app).get("/index.js");

  expect(res.statusCode).toBe(200);
  expect(res.type).toBe("text/javascript");
});

test("/not/exist", async () => {
  const res = await request(app).get("/not/exist");

  expect(res.statusCode).toBe(404);
  expect(res.type).toBe("text/plain");
});
