import express from "express";
import routes from "../routes/routes.js";
import urlModel from "../models/url.model.js";

const app = express();
app.use(express.json());

app.use("/api/url", routes);

// http://localhost:3000/shortcode =>redirects to origainal url\

app.get("/:code", async (req, res) => {
  try {
    const { code } = req.params;

    const url = await urlModel.findOneAndUpdate(
      { shortCode: code },
      { $inc: { clicks: 1 } },
      { new: true }
    );

    if (!url) {
      return res.status(404).json({ error: "URL not found" });
    }

    return res.redirect(302, url.original_URL);
  } catch (error) {
    console.error("Redirect error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export default app;
