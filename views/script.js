document
  .getElementById("emailForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    document.getElementById("result").textContent = "Sending .....";

    const to = document.getElementById("to").value;
    const subject = document.getElementById("subject").value;
    const text = document.getElementById("text").value;

    const response = await fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to, subject, text }),
    });

    const resultText = await response.text();
    document.getElementById("result").textContent = resultText;
  });
