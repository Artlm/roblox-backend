const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/favoriteCheck", async (req, res) => {
  const { userId, placeId } = req.query;
  const apiUrl = `https://games.roblox.com/v1/games/${placeId}/favorites/users/${userId}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json({ isFavorited: data.isFavorited });
  } catch (err) {
    res.status(500).json({ error: "API request failed" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
