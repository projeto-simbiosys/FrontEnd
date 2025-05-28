import React from "react";
import { render, screen } from "@testing-library/react";
import InputError from "../components/InputError";

describe("InputError component", () => {
  it("renderiza a mensagem de erro corretamente", () => {
    render(<InputError message="Campo obrigatório" />);
    expect(screen.getByText("Campo obrigatório")).toBeTruthy();
  });
});
