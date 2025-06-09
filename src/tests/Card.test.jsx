import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../components/Card";
import "@testing-library/jest-dom";

describe("Card component", () => {
  it("renders the title", () => {
    render(<Card title="Meu Título" description="Descrição" icon="⭐" />);
    expect(screen.getByText("Meu Título")).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<Card title="Título" description="Minha descrição" icon="⭐" />);
    expect(screen.getByText("Minha descrição")).toBeInTheDocument();
  });

  it("renders the icon when no image is provided", () => {
    render(<Card title="Título" description="Texto" icon="🔥" />);
    expect(screen.getByText("🔥")).toBeInTheDocument();
  });

  it("renders the image when provided", () => {
    render(
      <Card
        title="Com imagem"
        description="Descrição"
        image="https://via.placeholder.com/50"
      />
    );
    const image = screen.getByAltText("Com imagem");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://via.placeholder.com/50");
  });
});
