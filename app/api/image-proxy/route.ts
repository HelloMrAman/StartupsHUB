import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const imageUrl = searchParams.get("url");

    if (!imageUrl) {
      return NextResponse.json({ error: "Missing image URL" }, { status: 400 });
    }

    const decodedUrl = decodeURIComponent(imageUrl);
    const response = await fetch(decodedUrl);

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch image" }, { status: response.status });
    }

    const contentType = response.headers.get("content-type");
    const imageBuffer = await response.arrayBuffer();

    return new Response(Buffer.from(imageBuffer), {
      headers: { "Content-Type": contentType || "image/png" },
    });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
