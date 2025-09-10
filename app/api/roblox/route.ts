import { NextResponse } from "next/server";

export async function GET() {
  const script = String.raw`
--[[ Fake obfuscated script ]]
local H,U do 
  local J=math.floor 
  local t=math.random 
  for i = 1, 10 do 
    print("Obfuscated_" .. tostring(J(t()*100)))
  end 
end

--[[ Imagine que aqui está todo aquele código embaralhado ]]
--▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
--▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
`;

  return new NextResponse(script, {
    headers: { "Content-Type": "text/plain" },
  });
}
