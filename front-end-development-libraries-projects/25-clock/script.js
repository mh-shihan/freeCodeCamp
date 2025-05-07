const { useState, useEffect } = React;

const Clock = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [menit, setMenit] = useState(sessionLength);
  const [detik, setDetik] = useState(0);
  const [counter, setCounter] = useState(600);
  const [isRunning, setIsRunning] = useState(false);
  const [runningBreak, setRunningBreak] = useState(true);
  const [label, setLabel] = useState("Session");
  const audio = document.getElementById("beep");

  const Reset = () => {
    setIsRunning(false);
    setSessionLength(25);
    setBreakLength(5);
    setMenit(25);
    setDetik(0);
    setLabel("Session");
    setRunningBreak(true);
    audio.pause();
    audio.currentTime = 0;
  };

  const setLength = (ubah, tujuan) => {
    if (!isRunning) {
      if (tujuan === "naik") {
        if (ubah === "break") {
          if (breakLength < 60) {
            setBreakLength(breakLength + 1);
            setDetik(0);
          }
        } else {
          if (sessionLength < 60) {
            setMenit(sessionLength);
            setSessionLength(sessionLength + 1);
            setMenit(sessionLength + 1);

            setDetik(0);
          }
        }
      } else {
        if (ubah == "break") {
          if (breakLength > 1) {
            setBreakLength(breakLength - 1);
            setDetik(0);
          }
        } else {
          if (sessionLength > 1) {
            setMenit(sessionLength);
            setSessionLength(sessionLength - 1);
            setMenit(sessionLength - 1);
            setDetik(0);
          }
        }
      }
    }
  };

  const countDown = () => {
    if (isRunning) {
      setIsRunning(false);
    } else {
      setIsRunning(true);
    }
  };

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (menit === 0 && detik === 0) {
          if (runningBreak) {
            setMenit(breakLength);
            setDetik(0);
            setRunningBreak(false);

            setLabel("Break");
          } else {
            setMenit(sessionLength);
            setDetik(0);

            setRunningBreak(true);

            setLabel("Session");
          }
        } else {
          if (detik === 0) {
            setMenit((prevMenit) => prevMenit - 1);
            setDetik(59);
          } else {
            setDetik((prevDetik) => prevDetik - 1);
          }
        }

        if (menit === 0 && detik - 1 === 0) {
          audio.play();
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, menit, detik]);

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
          className:
            "bg-white container text-center rounded-3 d-flex flex-column justify-content-center align-items-center p-3",
        } /*#__PURE__*/,

        React.createElement(
          "div",
          null /*#__PURE__*/,
          React.createElement("h1", null, " 25 + 5 Clock")
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          {
            className:
              "d-flex flex-row align-items-center justify-content-center gap-5",
          } /*#__PURE__*/,

          React.createElement(
            "div",
            null /*#__PURE__*/,
            React.createElement(
              "h2",
              { id: "break-label" },
              "Break Length"
            ) /*#__PURE__*/,
            React.createElement(
              "h2",
              null /*#__PURE__*/,
              React.createElement(
                "button",
                {
                  className: "btn fs-2 btn-dark text-light",
                  id: "break-decrement",
                  onClick: () => {
                    setLength("break", "turun");
                  },
                } /*#__PURE__*/,

                React.createElement("i", { class: "bi bi-arrow-down-square" })
              ) /*#__PURE__*/,

              React.createElement(
                "span",
                {
                  className: "m-3",
                  id: "break-length",
                },
                breakLength
              ) /*#__PURE__*/,
              React.createElement(
                "button",
                {
                  className: "btn fs-2 btn-dark text-light",
                  id: "break-increment",
                  onClick: () => {
                    setLength("break", "naik");
                  },
                } /*#__PURE__*/,

                React.createElement("i", { class: "bi bi-arrow-up-square" })
              )
            )
          ) /*#__PURE__*/,

          React.createElement(
            "div",
            null /*#__PURE__*/,
            React.createElement(
              "h2",
              { id: "session-label" },
              "Session Length"
            ) /*#__PURE__*/,
            React.createElement(
              "h2",
              null /*#__PURE__*/,
              React.createElement(
                "button",
                {
                  className: "btn fs-2 btn-dark text-light",
                  id: "session-decrement",
                  onClick: () => {
                    setLength("session", "turun");
                  },
                } /*#__PURE__*/,

                React.createElement("i", { class: "bi bi-arrow-down-square" })
              ) /*#__PURE__*/,

              React.createElement(
                "span",
                {
                  className: "m-3",
                  id: "session-length",
                },
                sessionLength
              ) /*#__PURE__*/,
              React.createElement(
                "button",
                {
                  className: "btn fs-2 btn-dark text-light",
                  id: "session-increment",
                  onClick: () => {
                    setLength("session", "naik");
                  },
                } /*#__PURE__*/,

                React.createElement("i", { class: "bi bi-arrow-up-square" })
              )
            )
          )
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          {
            style: { width: "50%" },
            className: `border border-4 rounded-3 p-3 ${
              label === `Session`
                ? "border-dark text-black"
                : `border-danger text-danger`
            } `,
          } /*#__PURE__*/,

          React.createElement(
            "span",
            {
              id: "timer-label",
              className: "fs-2",
            },

            label
          ) /*#__PURE__*/,
          React.createElement("br", null) /*#__PURE__*/,
          React.createElement(
            "span",
            {
              className: "fs-1",
              id: "time-left",
            },

            menit < 10 ? "0" + menit : menit,
            ":",

            detik < 10 ? "0" + detik : detik
          )
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          { className: "p-4" } /*#__PURE__*/,

          React.createElement(
            "button",
            {
              className: "btn btn-dark fs-4",
              id: "start_stop",
              onClick: countDown,
            } /*#__PURE__*/,

            React.createElement("i", { class: "bi bi-play" })
          ) /*#__PURE__*/,

          React.createElement(
            "button",
            {
              className: "btn btn-dark fs-4 ms-2 me-2",
            } /*#__PURE__*/,

            React.createElement("i", { class: "bi bi-pause" })
          ) /*#__PURE__*/,

          React.createElement(
            "button",
            {
              className: "btn btn-dark fs-4",
              id: "reset",
              onClick: Reset,
            } /*#__PURE__*/,

            React.createElement("i", { class: "bi bi-arrow-clockwise" })
          )
        )
      ) /*#__PURE__*/,

      React.createElement(
        "div",
        {
          className: "",
        } /*#__PURE__*/,

        React.createElement(
          "span",
          {
            className: "text-light",
          },
          "Code by" /*#__PURE__*/,

          React.createElement(
            "a",
            {
              className: "text-decoration-none text-danger ms-1",
              href: "https://my-portfolio-79349.web.app",
            },
            "Mahmudul Hasan Shihan"
          )
        )
      )
    ) /*#__PURE__*/,

    React.createElement("audio", {
      id: "beep",
      src: "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav",
    })
  );
};

class App extends React.Component {
  render() {
    return /*#__PURE__*/ React.createElement(
      "div",
      { className: "App" } /*#__PURE__*/,
      React.createElement(Clock, null)
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(/*#__PURE__*/ React.createElement(App, null), rootElement);
