import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../components/Input"; 

describe("Input component", () => {
  it("renderiza um input de texto", () => {
    render(<Input type="text" placeholder="Digite aqui" />);
    const input = screen.getByPlaceholderText("Digite aqui");
    expect(input).not.toBeNull();
  });

  it("renderiza um input de senha com botão de toggle", () => {
    render(<Input type="password" placeholder="Senha" />);
    const input = screen.getByPlaceholderText("Senha");
    expect(input).not.toBeNull();

    const toggleButton = screen.getByRole("button");
    expect(toggleButton).not.toBeNull();

    fireEvent.click(toggleButton);
  });

  it("renderiza input com erro sem quebrar", () => {
    render(<Input type="text" placeholder="Erro" hasError />);
    const input = screen.getByPlaceholderText("Erro");
    expect(input).not.toBeNull();
  });
});
