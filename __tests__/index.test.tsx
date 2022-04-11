import userEvent from "@testing-library/user-event";

describe("Global", () => {
  it(".env exposed", () => {
    expect(process.env.NEXT_PUBLIC_GRAPHCMS_API_ENDPOINT).not.toBeUndefined();
    expect(process.env.NEXT_PUBLIC_GRAPHCMS_API_ENDPOINT).not.toBeNull();
  });
});
