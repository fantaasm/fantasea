import { getPosts, getProjects } from "../services";

describe("GraphCMS", () => {
  it("Endpoint Connection", async () => {
    const data = await getPosts();

    expect(data).not.toBeUndefined();
    expect(data).not.toBeNull();
  });

  it("Data Validation", async () => {
    const data = await getProjects();

    expect(data).not.toBeUndefined();
    expect(data[0]).toHaveProperty("title");
  });
});
