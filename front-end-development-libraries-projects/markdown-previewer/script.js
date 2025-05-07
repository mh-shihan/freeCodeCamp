const { useState, useEffect } = React;

const Markdown = () => {
  const [markdown, setMarkdown] = useState(`
# Ini adalah Judul (H1)

## Ini adalah Sub Judul (H2)

Ini adalah [tautan ke Google](https://www.google.com/).

Ini adalah kode sebaris: \`console.log('Hello, World!');\`

Berikut adalah blok kode:

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

Ini adalah item daftar:

- Item 1
- Item 2
- Item 3

Berikut adalah kutipan blok:

> Ini adalah kutipan blok.

Ini adalah gambar:
![contoh Gambar](https://example.com/gambar.jpg)

Ini adalah **teks tebal**.
`);

  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  };
  const resetToExample = () => {
    if (markdown.trim() === "") {
      setMarkdown("");
    }
  };
  const markedOptions = {
    breaks: true, // Interpret carriage returns as <br> elements
  };

  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null /*#__PURE__*/,
    React.createElement(
      "div",
      { className: "text-center", style: { backgroundColor: "#bae8e8" } },
      " Code by ",
      /*#__PURE__*/ React.createElement(
        "a",
        {
          href: "https://github.com/mh-shihan",
          target: "_black",
          className: "text-decoration-none text-dark",
        },
        "Mahmudul Hasan Shihan"
      )
    ) /*#__PURE__*/,
    React.createElement(
      "div",
      {
        className:
          " min-vh-100 d-flex align-items-center justify-content-center ",
        style: { backgroundColor: "#bae8e8" },
      } /*#__PURE__*/,
      React.createElement(
        "div",
        {
          style: { backgroundColor: "#fffffe" },
          className: "p-4  border border-5 border-dark rounded-3",
        } /*#__PURE__*/,
        React.createElement("h2", null, "Editor") /*#__PURE__*/,
        React.createElement("hr", null) /*#__PURE__*/,
        React.createElement("textarea", {
          id: "editor",
          value: markdown,
          onChange: handleInputChange,
          onBlur: resetToExample,
          rows: 10,
          cols: 50,
          className: "form-control ",
        })
      ) /*#__PURE__*/,

      React.createElement(
        "div",
        {
          style: { backgroundColor: "#fffffe" },
          className:
            "p-4  border border-5 border-dark rounded-3  container-class col-xs-12 col-md-6",
        } /*#__PURE__*/,
        React.createElement("h2", null, "Preview") /*#__PURE__*/,
        React.createElement("hr", null) /*#__PURE__*/,
        React.createElement("div", {
          id: "preview",
          dangerouslySetInnerHTML: { __html: marked(markdown, markedOptions) },
        })
      )
    )
  );
};

class App extends React.Component {
  render() {
    return /*#__PURE__*/ React.createElement(
      "div",
      { className: "App" } /*#__PURE__*/,
      React.createElement(Markdown, null)
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(/*#__PURE__*/ React.createElement(App, null), rootElement);
