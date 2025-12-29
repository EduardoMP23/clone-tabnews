test("GET", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBE(200);
});
