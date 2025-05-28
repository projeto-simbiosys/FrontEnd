import React from "react";
import { render } from "@testing-library/react";
import ActionsForm from "../components/ActionsForm";

jest.mock("react-hook-form", () => ({
  useFormContext: () => ({
    register: () => ({}),
  }),
}));

test("renderiza ActionsForm simples", () => {
  const { queryByText } = render(<ActionsForm />);

  if (queryByText("Números de Ações Realizadas") === null) {
    throw new Error("Texto não encontrado");
  }
});
