import React from "react";
import { render, screen } from "@testing-library/react";
import Select from "../components/Select";

test("renderiza o componente Select", () => {
  render(
    <Select>
      <option value="1">Opção 1</option>
    </Select>
  );

  const select = screen.getByRole("combobox");
  expect(select).not.toBeNull();
});
