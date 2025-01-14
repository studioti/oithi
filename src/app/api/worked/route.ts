// API : GET Empresas
export async function GET() {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
            // Authorization: `Bearer ${token}`
        }
    }
    const response =  await fetch('https://oithi-api.netlify.app/.netlify/functions/empresas', options)
    const data = await response.json()
    return Response.json(data)
}