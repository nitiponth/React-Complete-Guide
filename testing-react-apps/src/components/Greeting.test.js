import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //... nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World", {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("render unclick text", () => {
    render(<Greeting />);

    const unClickText = screen.getByText(/good to see you/, {
      exact: false,
    });
    expect(unClickText).toBeInTheDocument();
  });

  test("render click text", () => {
    //Arrange
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");

    //Act
    userEvent.click(buttonElement);

    //Assert
    const clickText = screen.getByText(/Changed/, {
      exact: false,
    });
    expect(clickText).toBeInTheDocument();
  });

  test("does not render good to see you", () => {
    //Arrange
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");

    //Act
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText(/good to see you/, {
      exact: false,
    });
    expect(outputElement).toBeNull;
  });
});
