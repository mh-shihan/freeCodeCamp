let price = 19.5;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("purchase-btn")
    .addEventListener("click", handlePurchase);
});

function handlePurchase() {
  const cashInput = document.getElementById("cash").value;
  const cash = parseFloat(cashInput);
  const changeDueElement = document.getElementById("change-due");

  if (isNaN(cash) || cash < 0) {
    alert("Please enter a valid cash amount.");
    return;
  }

  const priceCents = Math.round(price * 100);
  const cashCents = Math.round(cash * 100);

  if (cashCents < priceCents) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (cashCents === priceCents) {
    changeDueElement.textContent =
      "No change due - customer paid with exact cash";
    return;
  }

  const changeDueCents = cashCents - priceCents;
  const totalCIDCents = cid.reduce(
    (sum, [_, amount]) => sum + Math.round(amount * 100),
    0
  );

  if (totalCIDCents < changeDueCents) {
    changeDueElement.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  const currency = [
    { name: "ONE HUNDRED", value: 10000 },
    { name: "TWENTY", value: 2000 },
    { name: "TEN", value: 1000 },
    { name: "FIVE", value: 500 },
    { name: "ONE", value: 100 },
    { name: "QUARTER", value: 25 },
    { name: "DIME", value: 10 },
    { name: "NICKEL", value: 5 },
    { name: "PENNY", value: 1 },
  ];

  let remainingChange = changeDueCents;
  const change = [];
  const cidCopy = JSON.parse(JSON.stringify(cid));

  for (const { name, value } of currency) {
    const cidIndex = cid.findIndex((item) => item[0] === name);
    let available = Math.round(cid[cidIndex][1] * 100);
    let count = 0;

    while (available > 0 && remainingChange >= value) {
      remainingChange -= value;
      available -= value;
      count += value;
    }

    if (count > 0) {
      change.push([name, count / 100]);
      cidCopy[cidIndex][1] = available / 100;
    }
  }

  if (remainingChange > 0) {
    changeDueElement.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  const totalAfterChange = cidCopy.reduce(
    (sum, [_, amount]) => sum + amount,
    0
  );

  if (totalAfterChange === 0) {
    const closedChange = cid
      .filter(([_, amount]) => amount > 0)
      .map(([name, amount]) => `${name}: $${amount.toFixed(2)}`);
    changeDueElement.textContent = `Status: CLOSED ${closedChange.join(" ")}`;
  } else {
    const formattedChange = change.map(([name, amount]) => {
      let formatted = amount.toFixed(2);
      formatted = formatted.replace(/\.?0+$/, "");
      return `${name}: $${formatted}`;
    });
    changeDueElement.textContent = `Status: OPEN ${formattedChange.join(" ")}`;
  }
}
