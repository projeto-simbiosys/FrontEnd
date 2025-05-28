import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SaveAndCloseModal from "../components/SaveAndCloseModal";

describe("SaveAndCloseModal", () => {
  const mockOnClose = jest.fn();
  const mockOnConfirm = jest.fn();

  it("deve renderizar corretamente quando show é true", () => {
    render(
      <SaveAndCloseModal
        show={true}
        month="Janeiro"
        onClose={mockOnClose}
        onConfirm={mockOnConfirm}
        loading={false}
      />
    );

    // Checa se o título com o mês aparece
    const title = screen.getByText("Salvar e fechar o relatório de Janeiro");
    expect(title).toBeTruthy();

    // Checa se o botão de cancelar aparece
    const cancelButton = screen.getByText("Cancelar");
    expect(cancelButton).toBeTruthy();

    // Checa se o botão de salvar aparece
    const confirmButton = screen.getByText("Salvar e fechar");
    expect(confirmButton).toBeTruthy();
  });

  it("chama onClose ao clicar em Cancelar", () => {
    render(
      <SaveAndCloseModal
        show={true}
        month="Janeiro"
        onClose={mockOnClose}
        onConfirm={mockOnConfirm}
        loading={false}
      />
    );

    const cancelButton = screen.getByText("Cancelar");
    fireEvent.click(cancelButton);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("chama onConfirm ao clicar em Salvar e fechar", () => {
    render(
      <SaveAndCloseModal
        show={true}
        month="Janeiro"
        onClose={mockOnClose}
        onConfirm={mockOnConfirm}
        loading={false}
      />
    );

    const confirmButton = screen.getByText("Salvar e fechar");
    fireEvent.click(confirmButton);
    expect(mockOnConfirm).toHaveBeenCalled();
  });
});
