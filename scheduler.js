const fetch = require("node-fetch");

const FUNCTION_URL = "https://qgkyuaagcrrynnkipbad.supabase.co/functions/v1/update-stats";
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

runUpdate();

setInterval(runUpdate, 10 * 60 * 1000);

async function runUpdate() {
  try {
    console.log(`[${new Date().toISOString()}] Running scheduled Supabase update...`);

    if (!SERVICE_ROLE_KEY) {
      console.error("SUPABASE_SERVICE_ROLE_KEY not configured");
      return;
    }

    const res = await fetch(FUNCTION_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json"
      }
    });

    const text = await res.text();
    console.log(`[${new Date().toISOString()}] Supabase response (${res.status}):`, text);
  } catch (err) {
    console.error(`[${new Date().toISOString()}] Scheduler error:`, err.message);
  }
}
