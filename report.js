document.getElementById("reportForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const webhookURL = "https://discord.com/api/webhooks/1363640692513177600/b46o0buyTHGulUoTti8vL_V6RThI2x0qexZ8ll9DMbzExs3CrZc3_78gD-SF1d7OhIQw"; // Replace with your actual webhook

    const username = document.getElementById("username").value;
    const displayName = document.getElementById("displayName").value;
    const dateTime = document.getElementById("dateTime").value;
    const message = document.getElementById("message").value;
    const proofImage = document.getElementById("proofImage").value;

    const payload = {
        embeds: [{
            title: "New Report Submission",
            color: 3447003,
            fields: [
                { name: "Discord Username", value: username, inline: true },
                { name: "Discord Display Name", value: displayName, inline: true },
                { name: "Date & Time", value: dateTime, inline: true },
                { name: "Message", value: message },
                { name: "Proof Image", value: proofImage ? `[View Image](${proofImage})` : "No image provided" }
            ]
        }]
    };

    try {
        const response = await fetch(webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert("Report submitted successfully!");
            document.getElementById("reportForm").reset();
        } else {
            alert("Error submitting report.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to send report.");
    }
});
