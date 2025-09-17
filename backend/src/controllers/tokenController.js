import { StreamClient } from "@stream-io/node-sdk";

const apiKey = "agrqaxj4guaj";
const apiSecret = "fzmwezpz44qp3h73z6yfjev96h45xn2kzsz68epm7d282ufpgfewgt95x9d5r6t5";

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
