'use server'
import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"
import { useSearchParams } from "next/navigation"

interface Place {
  opening_hours: any;
  formatted_address: any;
  name: string;
  rating: number;
}

export async function GET(req: NextApiRequest, {params}: {params: {value: string}}) {
    try {
        const res = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${params.value}&type=restaurant&key=${process.env.API_KEY}`)
        const data = await res.json()
        const newData = data.results.map((place: Place) => {
          return {
            name: place.name,
            address: place.formatted_address,
            rating: place.rating,
            open: place.opening_hours?.open_now
          }
        })
        return NextResponse.json(newData)
      } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
      }
}