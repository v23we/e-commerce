import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import App from "../../App";
import { AmazonMainImagesPage } from "./AmazonMainImagesPage";

describe("AmazonMainImagesPage", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("navigates from the studio template card into the main image page", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/studio"]}>
        <App />
      </MemoryRouter>,
    );

    await user.click(screen.getByRole("link", { name: "Amazon Main Images" }));

    expect(
      screen.getByRole("heading", { name: "Amazon Main Images" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Generate main image" })).toBeInTheDocument();
  });

  it("shows empty validation state when required fields are missing", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <AmazonMainImagesPage />
      </MemoryRouter>,
    );

    const previewHeading = screen.getByRole("heading", { name: "Preview" }).closest(".tool-panel");
    expect(previewHeading).not.toBeNull();
    const previewPanel = previewHeading as HTMLElement;

    await user.clear(screen.getByRole("textbox", { name: "Product title" }));
    await user.clear(screen.getByRole("textbox", { name: "Hero message" }));
    await user.click(screen.getByRole("button", { name: "Generate main image" }));

    expect(within(previewPanel).getByText("Add the missing input first")).toBeInTheDocument();
    expect(
      within(previewPanel).getAllByText("Product title and hero message are required before generating."),
    ).toHaveLength(2);
  });

  it("renders loading state, then mock results, and lets the user switch the selected result", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <AmazonMainImagesPage />
      </MemoryRouter>,
    );

    await user.click(screen.getByRole("button", { name: /Benefit-led Hero/ }));
    await user.click(screen.getByRole("button", { name: "Generate main image" }));

    expect(screen.getByRole("button", { name: "Generating..." })).toBeDisabled();
    expect(screen.getByText("Generating mock outputs")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Benefit Hero v2" })).toBeInTheDocument();
    });

    const previewHeading = screen.getByRole("heading", { name: "Preview" }).closest(".tool-panel");
    expect(previewHeading).not.toBeNull();
    const previewPanel = previewHeading as HTMLElement;

    const secondResult = within(previewPanel).getByRole("button", { name: "Benefit Hero v2" });
    expect(secondResult).toHaveAttribute("aria-pressed", "false");

    await user.click(secondResult);

    expect(secondResult).toHaveAttribute("aria-pressed", "true");
    expect(within(previewPanel).getByRole("button", { name: "Benefit Hero v1" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });

  it("supports empty, append, remove, and reset states in the upload area", async () => {
    const user = userEvent.setup();
    const createObjectURLSpy = vi
      .spyOn(URL, "createObjectURL")
      .mockImplementation((file) => `blob:${(file as File).name}`);
    const revokeObjectURLSpy = vi
      .spyOn(URL, "revokeObjectURL")
      .mockImplementation(() => undefined);

    render(
      <MemoryRouter>
        <AmazonMainImagesPage />
      </MemoryRouter>,
    );

    expect(
      screen.getByText("多图上传建议仅保留必要角度或 SKU 图，", { exact: false }),
    ).toBeInTheDocument();

    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    const firstFile = new File(["front"], "front-view.png", { type: "image/png" });
    const secondFile = new File(["side"], "side-view.png", { type: "image/png" });

    await user.upload(fileInput, firstFile);

    expect(screen.getByRole("img", { name: "front-view.png" })).toBeInTheDocument();
    expect(screen.getByText("Add more")).toBeInTheDocument();
    expect(screen.queryByRole("img", { name: "side-view.png" })).not.toBeInTheDocument();

    await user.upload(fileInput, secondFile);

    expect(screen.getByRole("img", { name: "side-view.png" })).toBeInTheDocument();
    expect(createObjectURLSpy).toHaveBeenCalledTimes(2);

    await user.click(screen.getByRole("button", { name: "Remove front-view.png" }));

    expect(screen.queryByRole("img", { name: "front-view.png" })).not.toBeInTheDocument();
    expect(screen.getByRole("img", { name: "side-view.png" })).toBeInTheDocument();
    expect(revokeObjectURLSpy).toHaveBeenCalledWith("blob:front-view.png");

    await user.click(screen.getByRole("button", { name: "Remove side-view.png" }));

    expect(screen.queryByRole("img", { name: "side-view.png" })).not.toBeInTheDocument();
    expect(
      screen.getByText("多图上传建议仅保留必要角度或 SKU 图，", { exact: false }),
    ).toBeInTheDocument();

    createObjectURLSpy.mockRestore();
    revokeObjectURLSpy.mockRestore();
  });
});
