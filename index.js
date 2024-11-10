const express = require("express");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.get("/alldl", async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: "Please provide url." });
    }

    try {
      const response = await axios.get(`https://www.noobs-api.000.pe/dipto/alldl?url=${url}`);
      //  link = `${req.protocol}://${req.get("host")}/d/${p}`;
        delete(response.data.author)
        res.json({
             data: response.data,
            author: "亗ㅤƊᎥᎮㅤƬᴏㅤ亗"
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Failed to fetch data from the external API.", details: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
