import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/Button"; 

describe("Button component", () => {
  const variants = [
    { variant: "inst-primary", expectedClasses: ["bg-main", "text-white"] },
    { variant: "sys-primary", expectedClasses: ["bg-sys-main", "text-white"] },
    {
      variant: "inst-secondary",
      expectedClasses: ["bg-white", "text-secondary", "border", "border-secondary"],
    },
    {
      variant: "sys-secondary",
      expectedClasses: ["bg-white", "text-sys-main", "border", "border-sys-main"],
    },
    {
      variant: "inst-light",
      expectedClasses: ["bg-white", "text-main"],
    },
    {
      variant: "sys-light",
      expectedClasses: ["text-sys-main", "shadow-none"],
    },
    {
      variant: "inst-link",
      expectedClasses: [
        "bg-transparent",
        "text-main",
        "!px-[0px]",
        "!py-[0px]",
        "shadow-none",
        "underline",
      ],
    },
  ];

  variants.forEach(({ variant, expectedClasses }) => {
    it(`applies correct classes for variant: ${variant}`, () => {
      render(<Button variant={variant}>Texto</Button>);
      const button = screen.getByText("Texto");
      expectedClasses.forEach((className) => {
        expect(button.className).toContain(className);
      });
    });
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button variant="inst-primary" onClick={handleClick}>Clique</Button>);
    const button = screen.getByText("Clique");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it("does not call onClick when disabled", () => {
    const handleClick = jest.fn();
    render(<Button variant="inst-primary" disabled onClick={handleClick}>Desabilitado</Button>);
    const button = screen.getByText("Desabilitado");
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
