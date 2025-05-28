import React from "react";
import { render, screen } from "@testing-library/react";
import Notification from "../components/Notification"; 

describe("Notification component", () => {
  it("renderiza título e corpo corretamente", () => {
    render(
      <Notification
        show={true}
        type="success"
        title="Notificação"
        body="Esta é uma mensagem."
      />
    );

    expect(screen.getByText("Notificação")).toBeTruthy();
    expect(screen.getByText("Esta é uma mensagem.")).toBeTruthy();
  });
});
