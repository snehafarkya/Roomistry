import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { style, roomType = "living room" } = await req.json();

    const variations = [
      `A ${style} ${roomType}, natural lighting, minimal clutter, photorealistic, architectural digest, professional interior photography, ultra detailed, empty room no people`,
      `A luxurious ${style} ${roomType}, warm ambient lighting, tasteful decor, photorealistic, professional interior photography, ultra detailed, empty room no people`,
      `A cozy ${style} ${roomType}, bright airy space, modern furniture, photorealistic, professional interior photography, ultra detailed, empty room no people`,
    ];

    // Generate all 3 in parallel
    const results = await Promise.all(
      variations.map(async (prompt) => {
        const res = await fetch(
          `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/ai/run/@cf/stabilityai/stable-diffusion-xl-base-1.0`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt, num_steps: 20, width: 1024, height: 1024 }),
          }
        );

        if (!res.ok) throw new Error("Cloudflare generation failed");

        const arrayBuffer = await res.arrayBuffer();
        const base64 = Buffer.from(arrayBuffer).toString("base64");
        return `data:image/png;base64,${base64}`;
      })
    );

    return NextResponse.json({ images: results });

  } catch (error: any) {
    console.error("SERVER ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}