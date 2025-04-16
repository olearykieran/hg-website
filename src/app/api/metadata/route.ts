import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    const response = await fetch(url);
    const html = await response.text();

    // Extract Open Graph image
    const ogImageMatch = html.match(
      /<meta[^>]*property="og:image"[^>]*content="([^"]*)"[^>]*>/i
    );
    const ogImage = ogImageMatch ? ogImageMatch[1] : "";

    // Extract Open Graph description or meta description
    const ogDescMatch = html.match(
      /<meta[^>]*property="og:description"[^>]*content="([^"]*)"[^>]*>/i
    );
    const metaDescMatch = html.match(
      /<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i
    );
    const description = ogDescMatch
      ? ogDescMatch[1]
      : metaDescMatch
      ? metaDescMatch[1]
      : "";

    return NextResponse.json({
      image: ogImage,
      description: description,
    });
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return NextResponse.json({ error: "Failed to fetch metadata" }, { status: 500 });
  }
}
