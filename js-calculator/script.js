const { useState, useEffect } = React;

const Tombol = (props) => {
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null /*#__PURE__*/,
    React.createElement(
      "div",
      null /*#__PURE__*/,
      React.createElement(
        "div",
        {
          className: "row",
        } /*#__PURE__*/,

        React.createElement(
          "div",
          {
            className: "col-6 d-grid",
          } /*#__PURE__*/,

          React.createElement(
            "button",
            {
              id: "clear",
              className: " btn btn-primary",
              onClick: () => props.clear(),
            },
            " AC"
          )
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          {
            className: "col-3 d-grid",
          } /*#__PURE__*/,

          React.createElement(
            "button",
            {
              id: "divide",
              className: " btn btn-primary",
              onClick: () => props.setCalculator("/"),
            },
            " /"
          )
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          {
            className: "col-3 d-grid",
          } /*#__PURE__*/,

          React.createElement(
            "button",
            {
              id: "multiply",
              className: " btn btn-primary",
              onClick: () => props.setCalculator("*"),
            },
            " X"
          )
        )
      ) /*#__PURE__*/,

      React.createElement(
        "div",
        {
          className: "row mt-2",
        } /*#__PURE__*/,

        React.createElement(
          "div",
          {
            className: "col-3 d-grid",
          } /*#__PURE__*/,

          React.createElement(
            "button",
            {
              id: "seven",
              className: " btn btn-primary",
              onClick: () => props.setCalculator("7"),
            },
            " 7"
          )
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          {
            className: "col-3 d-grid",
          } /*#__PURE__*/,

          React.createElement(
            "button",
            {
              id: "eight",
              className: " btn btn-primary",
              onClick: () => props.setCalculator("8"),
            },
            " 8"
          )
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          {
            className: "col-3 d-grid",
          } /*#__PURE__*/,

          React.createElement(
            "button",
            {
              id: "nine",
              className: " btn btn-primary",
              onClick: () => props.setCalculator("9"),
            },
            " 9"
          )
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          {
            className: "col-3 d-grid",
          } /*#__PURE__*/,

          React.createElement(
            "button",
            {
              id: "subtract",
              className: " btn btn-primary",
              onClick: () => props.setCalculator("-"),
            },
            " -"
          )
        )
      ) /*#__PURE__*/,

      React.createElement(
        "div",
        {
          className: "row mt-2",
        } /*#__PURE__*/,

        React.createElement(
          "div",
          {
            className: "col-3 d-grid",
          } /*#__PURE__*/,

          React.createElement(
            "button",
            {
              id: "four",
              className: " btn btn-primary",
              onClick: () => props.setCalculator("4"),
            },
            " 4"
          )
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          {
            className: "col-3 d-grid",
          } /*#__PURE__*/,

          React.createElement(
            "button",
            {
              id: "five",
              className: " btn btn-primary",
              onClick: () => props.setCalculator("5"),
            },
            " 5"
          )
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          {
            className: "col-3 d-grid",
          } /*#__PURE__*/,

          React.createElement(
            "button",
            {
              id: "six",
              className: " btn btn-primary",
              onClick: () => props.setCalculator("6"),
            },
            " 6"
          )
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          {
            className: "col-3 d-grid",
          } /*#__PURE__*/,

          React.createElement(
            "button",
            {
              id: "add",
              className: " btn btn-primary",
              onClick: () => props.setCalculator("+"),
            },
            " +"
          )
        )
      ) /*#__PURE__*/,

      React.createElement(
        "div",
        {
          className: "row mt-2",
        } /*#__PURE__*/,

        React.createElement(
          "div",
          {
            className: "col-9",
          } /*#__PURE__*/,

          React.createElement(
            "div",
            {
              className: "row",
            } /*#__PURE__*/,

            React.createElement(
              "div",
              {
                className: "col d-grid",
              } /*#__PURE__*/,

              React.createElement(
                "button",
                {
                  id: "one",
                  className: " btn btn-primary",
                  onClick: () => props.setCalculator("1"),
                },
                " 1"
              )
            ) /*#__PURE__*/,

            React.createElement(
              "div",
              {
                className: "col d-grid",
              } /*#__PURE__*/,

              React.createElement(
                "button",
                {
                  id: "two",
                  className: " btn btn-primary",
                  onClick: () => props.setCalculator("2"),
                },
                " 2"
              )
            ) /*#__PURE__*/,

            React.createElement(
              "div",
              {
                className: "col d-grid",
              } /*#__PURE__*/,

              React.createElement(
                "button",
                {
                  id: "three",
                  className: " btn btn-primary",
                  onClick: () => props.setCalculator("3"),
                },
                " 3"
              )
            )
          ) /*#__PURE__*/,

          React.createElement(
            "div",
            {
              className: "row mt-2",
            } /*#__PURE__*/,

            React.createElement(
              "div",
              {
                className: "col d-grid",
              } /*#__PURE__*/,

              React.createElement(
                "button",
                {
                  id: "zero",
                  className: " btn btn-primary",
                  onClick: () => props.setCalculator("0"),
                },
                " 0"
              )
            ) /*#__PURE__*/,

            React.createElement(
              "div",
              {
                className: "col-4 d-grid",
              } /*#__PURE__*/,

              React.createElement(
                "button",
                {
                  id: "decimal",
                  className: " btn btn-primary",
                  onClick: () => props.setCalculator("."),
                },
                " ."
              )
            )
          )
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          {
            className: "col-3 d-grid",
          } /*#__PURE__*/,

          React.createElement(
            "button",
            {
              id: "equals",
              className: " btn btn-primary",
              onClick: props.hasil,
            },
            " ="
          )
        )
      )
    )
  );
};

const Calculator = () => {
  const [display1, setDisplay1] = useState("0");
  const [display2, setDisplay2] = useState("0");
  const [result, setResult] = useState("");
  const [calculate, setCalculate] = useState("0");
  const titik = (display1.match(/\./g) || []).length;
  const kurungBuka = (display2.match(/\(/g) || []).length;
  const kurungTutup = (display2.match(/\)/g) || []).length;

  const operator = ["/", "*", "-", "+"];
  const hasil = () => {
    if (kurungBuka !== kurungTutup) {
      const result1 = eval(display2 + ")");

      setDisplay1(result1.toString());
      // setDisplay1(result1)
      setDisplay2(display2 + ") =" + result1);
      setResult(result1);
      setCalculate("0");
    } else {
      const result1 = eval(display2);

      setDisplay1(result1.toString());
      // setDisplay1(result1)
      setDisplay2(display2 + "=" + result1);
      setResult(result1);
      setCalculate("0");
    }
  };

  const setCalculator = (angka) => {
    if (result === "") {
      if (display2 === "0" || display2 === "-0") {
        if (angka === ".") {
          setDisplay1(display1 + angka);
          setDisplay2(display1 + angka);
          calculate(calculate + angka);
        } else {
          setDisplay1(angka);
          setDisplay2(angka);
          setCalculate(angka);
        }
      } else {
        if (titik < 1) {
          if (operator.includes(angka)) {
            if (kurungBuka !== kurungTutup) {
              setDisplay1(angka);
              setDisplay2(display2 + ")" + angka);
              setCalculate(calculate + angka);
            } else {
              setDisplay1(angka);
              setDisplay2(display2 + angka);
              setCalculate(calculate + angka);
            }

            if (
              angka === "-" &&
              operator.includes(display2[display2.length - 1])
            ) {
              setDisplay1(angka);
              setDisplay2(display2 + "(" + angka);
              setCalculate(calculate + angka);
            } else if (operator.includes(display2[display2.length - 1])) {
              if (display2[display2.length - 1] === "-") {
                setDisplay1(angka);
                setDisplay2(display2.slice(0, -3) + angka);
                setCalculate(calculate + angka);
              } else {
                setDisplay1(angka);
                setDisplay2(display2.slice(0, -1) + angka);
                setCalculate(calculate + angka);
              }
            }
          } else if (angka === ".") {
            setDisplay1(display1 + angka);
            setDisplay2(display2 + angka);
            setCalculate(calculate + angka);
          } else {
            if (operator.includes(display1)) {
              setDisplay1(angka);
            } else {
              setDisplay1(display1 + angka);
            }

            setDisplay2(display2 + angka);
            setCalculate(calculate + angka);
          }
        } else {
          if (angka !== ".") {
            if (operator.includes(angka)) {
              if (kurungBuka !== kurungTutup) {
                setDisplay2(display2 + ")");
              }
              if (display2[display2.length - 1] === "-") {
                setDisplay1(angka);
                setDisplay2(display2 + "(" + angka);
                setCalculate(calculate + angka);
              } else {
                setDisplay1(angka);
                setDisplay2(display2 + angka);
                setCalculate(calculate + angka);
              }
            } else {
              setDisplay1(display1 + angka);
              setDisplay2(display2 + angka);
              setCalculate(calculate + angka);
            }
          }
        }
      }
    } else {
      setResult("");
      if (operator.includes(angka)) {
        if (kurungBuka !== kurungTutup) {
          setDisplay2(display2 + ")");
        }
        if (display2[display2.length - 1] === "-") {
          setDisplay1(angka);
          setDisplay2(result + "(" + angka);
        } else {
          setDisplay1(angka);
          setDisplay2(result + angka);
        }
      } else {
        setDisplay1(angka);
        setDisplay2(angka);
      }
    }
  };
  const clear = () => {
    setDisplay1("0");
    setDisplay2("0");
    setCalculate("0");
  };

  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null /*#__PURE__*/,
    React.createElement(
      "div",
      {
        className:
          "bg-dark min-vh-100 d-flex flex-column align-items-center justify-content-center",
      } /*#__PURE__*/,
      React.createElement(
        "div",
        {
          className: " container bg-light p-2 rounded-3",
        } /*#__PURE__*/,

        React.createElement(
          "div",
          {
            className: "text-end",
          } /*#__PURE__*/,

          React.createElement(
            "div",
            {
              className: "fs-2",
              style: { height: "10px" },
            },
            display2
          ) /*#__PURE__*/,

          React.createElement(
            "div",
            {
              id: "display",
              className: "fs-1 mt-3",
            },
            display1
          )
        ) /*#__PURE__*/,

        React.createElement(Tombol, {
          setCalculator: setCalculator,
          clear: clear,
          hasil: hasil,
          titik: titik,
        })
      ) /*#__PURE__*/,

      React.createElement(
        "span",
        {
          className: "text-light",
        },
        "Code by" /*#__PURE__*/,

        React.createElement(
          "a",
          {
            href: "https://github.com/mh-shihan",
            target: "_black",
            className: "ms-1 text-decoration-none",
          },
          "Mahmudul Hasan Shihan"
        )
      )
    )
  );
};

class App extends React.Component {
  render() {
    return /*#__PURE__*/ React.createElement(
      "div",
      { className: "App" } /*#__PURE__*/,
      React.createElement(Calculator, null)
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(/*#__PURE__*/ React.createElement(App, null), rootElement);
