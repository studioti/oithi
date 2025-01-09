// API : GET Empresas
export async function GET() {
    const response =  await fetch('https://oithi-api.netlify.app/.netlify/functions/empresas', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${token}`
        }
    })
    const data = await response.json()
    return Response.json(data)
}