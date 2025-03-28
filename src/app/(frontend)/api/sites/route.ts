// API : GET Sites
export async function GET() {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
            // Authorization: `Bearer ${token}`
        }
    }
    const response =  await fetch(`${process.env.API_URL}cases`, options)
    const data = await response.json()
    return Response.json(data)
}