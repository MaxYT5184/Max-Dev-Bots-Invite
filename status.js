async function getStatusAndPing() {
  const versionURL = 'version.json';
  const webhookURL = 'https://discord.com/api/webhooks/1367857917050622104/gH28EyXROPS3wo_7dILg80uFfTKSA1qp26t-g6wgmwNEKlW4IsGnX57FrkFNUBiI-ftx'; // replace this

  let start = Date.now();
  let response = await fetch(versionURL);
  let ping = Date.now() - start;

  let json = await response.json();
  let status = json.status;

  let emoji = "⚪";
  let statusText = "Unknown";
  if (status === "live") {
    emoji = "🟢";
    statusText = "Website online.";
  } else if (status === "closed") {
    emoji = "🔴";
    statusText = "Website offline.";
  } else if (status === "updating") {
    emoji = "🟡";
    statusText = "Website updating.";
  }

  const timeUTC = new Date().toISOString().replace("T", " ").split(".")[0];

  const message = `${emoji}${statusText}
Service Name
Main Website
Time (Etc/UTC)
${timeUTC}
Ping
${ping} ms`;

  // Update status on page
  document.getElementById('statusText').innerText = statusText;

  // Send to Discord
  await fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: message })
  });
}

// Initial check
getStatusAndPing();

// Repeat every 5 minutes
setInterval(getStatusAndPing, 5 * 60 * 1000);
