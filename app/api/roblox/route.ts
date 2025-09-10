import { NextResponse } from "next/server";

export async function GET() {
  const script = String.raw`
PINTO DE CAVALO
`;

  return new NextResponse(script, {
    headers: { "Content-Type": "text/plain" },
  });
}
