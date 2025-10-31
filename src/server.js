import express from "express";
import dotenv from "dotenv";
import Vapi from "vapi";
import { agentPrompt } from "./agent_prompt.js";

dotenv.config();
const app = express();
app.use(express.json());

const client = new Vapi.Client({
  apiKey: process.env.VAPI_API_KEY,
});

app.post("/create-agent", async (req, res) => {
  try {
    const agent = await client.agents.create({
      name: "Student Support AI",
      model: "gpt-4o-mini",
      instructions: agentPrompt,
      voice: {
        provider: "elevenlabs",
        voiceId: "Rachel"
      }
    });

    res.json({ agent });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log("✅ Backend running on port", process.env.PORT);
});
ENT:", event);
  res.send("ok");
});

app.listen(3000, () => console.log("✅ Running on port 3000"));
