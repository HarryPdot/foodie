
const GET = async (query: string, type: string) => {
    "use server";
    const res = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&type=${type}&key=${process.env.API_KEY}`)
    const data = await res.json()
    return { data };
}

export { GET }
