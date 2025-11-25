const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const Note = require("./src/models/note.model");
const noteRoutes = require("./src/routes/note.routes");
require("dotenv").config();


const app = express();
app.use(express.json());
app.use("/api/notes", noteRoutes);

beforeAll(async () => {
  // Connect to  database
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  // Clean up database and close connection
  await Note.deleteMany({});
  await mongoose.connection.close();
});

describe("Notes API", () => {
  it("should create a note", async () => {
    const res = await request(app)
      .post("/api/notes")
      .send({ title: "Test Note", content: "This is a test note", tags: ["test"] });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("_id");
    expect(res.body.title).toBe("Test Note");
    expect(res.body.tags).toContain("test");
  });

  it("should fail to create a note without title", async () => {
    const res = await request(app)
      .post("/api/notes")
      .send({ content: "No title" });

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Title and content are required");
  });

  it("should get all notes", async () => {
    const res = await request(app).get("/api/notes");
    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toBeGreaterThanOrEqual(1);
  });
});
