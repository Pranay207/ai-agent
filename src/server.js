import express from "express";
import dotenv from "dotenv";
import { RetellClient } from "retell-sdk";
import { agentPrompt } from "./agent_prompt.js";

dotenv.config();
const app = express();
app.use(express.json());

const client = new RetellClient({ apiKey: process.env.RETELL_API_KEY });

// Create agent route
app.post("/create-agent", async (req, res) => {
  const agent = await client.agents.create({
    llm: {
      type: "openai",
      model: "gpt-5",
      instructions: agentPrompt
    }
  });

  return res.json(agent);
});

// Webhook
app.post("/webhook", async (req, res) => {
  const event = req.body;
  console.log("CALL EVENT:", event);
  res.send("ok");
});

app.listen(3000, () => console.log("✅ Running on port 3000"));
