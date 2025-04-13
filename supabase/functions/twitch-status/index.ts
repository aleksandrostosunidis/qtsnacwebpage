import { createClient } from "npm:@supabase/supabase-js@2.39.7";
import "npm:dotenv@16.4.5/config";

const TWITCH_CLIENT_ID = Deno.env.get("gf657xudfppjr26jc421hi0xn5g9o7");
const TWITCH_CLIENT_SECRET = Deno.env.get("cm2vzul2lpnxcte77oqs8v3sbuim0j");
const TWITCH_USERNAME = Deno.env.get("alethiatv");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Content-Type": "application/json",
};

async function getAccessToken() {
  if (!TWITCH_CLIENT_ID || !TWITCH_CLIENT_SECRET) {
    throw new Error("Missing Twitch credentials");
  }

  const response = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${TWITCH_CLIENT_ID}&client_secret=${TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
    {
      method: "POST",
    }
  );
  const data = await response.json();
  if (!data.access_token) {
    throw new Error("Failed to get Twitch access token");
  }
  return data.access_token;
}

async function checkStreamStatus(accessToken: string) {
  const response = await fetch(
    `https://api.twitch.tv/helix/streams?user_login=${TWITCH_USERNAME}`,
    {
      headers: {
        "Client-ID": TWITCH_CLIENT_ID,
        "Authorization": `Bearer ${accessToken}`,
      },
    }
  );
  const data = await response.json();
  return data.data && data.data.length > 0;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders,
    });
  }

  try {
    const accessToken = await getAccessToken();
    const isLive = await checkStreamStatus(accessToken);

    return new Response(
      JSON.stringify({ isLive }),
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error("Twitch status error:", error);
    
    return new Response(
      JSON.stringify({ 
        error: error.message || "Failed to check stream status",
        isLive: false 
      }),
      {
        status: 500,
        headers: corsHeaders
      }
    );
  }
});
