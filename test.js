const test = require("tape");
const supertest = require("supertest");
const router = require("./router");

test("Initialise", t => {
  let num = 2;
  t.equal(num, 2, "Should return 2");
  t.end();
});

//Home Route
test("Home route returns a status code of 200", t => {
  supertest(router)
    .get("/")
    .expect("Content-Type", /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "Should return 200");
      t.end();
    });
});

test("Home route", t => {
  supertest(router)
    .get("/")
    .expect(200)
    .expect("Content-type", /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.text, "Hello", "response should contain 'Hello'");
      t.end();
    });
});

// Elephant test

test("Elephant route", t => {
  supertest(router)
    .get("/elephants")
    .expect(404)
    .end((err, res) => {
      t.error(err);
      t.equal(
        res.text,
        "unknown uri",
        "elephants should return 404 with unknown uri"
      );
      t.end();
    });
});

test("Blog route", t => {
  supertest(router)
    .get("/blog")
    .expect(200)
    .end((err, res) => {
      let oneTwoThree = JSON.parse(res.text);
      t.error(err);
      t.deepEqual(
        oneTwoThree,
        ["one", "two", "three"],
        "blog should return 200 with [one, two, three]"
      );
      t.end();
    });
});

test("Blog Post request", t => {
  supertest(router)
    .post("/blog")
    .expect(200)
    .end((err,res) => {
      t.error(err);
      t.deepEqual(
        res.header,
        {password: "potato"},
        "password should be potato"
      )
      t.deepEqual(
        res.body,
        ['a','b'],
        "body should be [a,b]"
      )
      t.end();
    })
})