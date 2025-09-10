export const runtime = 'edge';

export async function GET(request: Request) {
  return new Response('12345', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
