// ✅ Initialize VAPI with PUBLIC KEY
Vapi.init({
  publicKey: "vapi_pk_live_xxxxxxxxxxxxx",  // replace
});

// Replace with your created agentId
const AGENT_ID = "agent_XXXXXXX";

async function startCall() {
  await Vapi.start({
    agentId: AGENT_ID,
  });
}

