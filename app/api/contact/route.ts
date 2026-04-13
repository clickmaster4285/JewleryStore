// app/api/contact/route.ts

export async function POST(req: Request) {
  const body = await req.json()

  const res = await fetch("https://software.clickmasters.pk/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })

  const data = await res.json()

  return Response.json(data)
}