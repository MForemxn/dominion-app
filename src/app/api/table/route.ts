import { NextRequest, NextResponse } from "next/server";

const UPSTREAM =
  process.env.TABLE_API ??
  "https://vinyl-now-playing-three.vercel.app/api/dominion-table";

export async function GET() {
  const res = await fetch(UPSTREAM, { cache: "no-store" });
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const res = await fetch(UPSTREAM, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}

export async function DELETE() {
  const res = await fetch(UPSTREAM, { method: "DELETE" });
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
