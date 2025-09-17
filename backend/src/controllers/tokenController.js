import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

export const generateToken = (req, res) => {
  try {
    const userCookie = req.cookies.user;

    if (!userCookie) {
      return res.status(401).json({ error: "User not logged in (cookie missing)" });
    }

    const user = JSON.parse(userCookie);

    if (!user?.id) {
      return res.status(401).json({ error: "Invalid user data" });
    }

    if (!apiKey || !apiSecret) {
      return res.status(500).json({ error: "API key/secret missing" });
    }

    const client = new StreamClient(apiKey, apiSecret);
    const validity = 24 * 60 * 60; // 1 day

    const token = client.generateUserToken({
      user_id: user.id,
      validity_in_seconds: validity,
    });

    return res.json({ token });
  } catch (error) {
    console.error("Token generation error:", error);
    res.status(500).json({ error: "Failed to generate token" });
  }
};
