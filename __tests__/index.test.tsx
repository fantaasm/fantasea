import { fireEvent, render, screen } from "@testing-library/react";
import SocialLinks from "../components/SocialLinks";
import userEvent from "@testing-library/user-event";

describe("Global", () => {
  it(".env exposed", () => {
    expect(process.env.NEXT_PUBLIC_GRAPHCMS_API_ENDPOINT).not.toBeUndefined();
    expect(process.env.NEXT_PUBLIC_GRAPHCMS_API_ENDPOINT).not.toBeNull();
  });
});

describe("Social Links", () => {
  it("Buttons text", () => {
    render(<SocialLinks />);

    const emailText = screen.getByText("carnageepl@gmail.com");
    const discordText = screen.getByText("fantasm#9591");
    const githubText = screen.getByText("Github");

    expect(discordText).toBeInTheDocument();
    expect(emailText).toBeInTheDocument();
    expect(githubText).toBeInTheDocument();
  });

  it("Buttons Interactivity", () => {
    render(<SocialLinks />);

    const buttons = screen.getAllByRole("button");

    expect(buttons).not.toBeUndefined();

    const emailButton = buttons[0];

    userEvent.click(emailButton);

    expect(emailButton).toHaveTextContent("Copied to clipboard!");
  });
});
