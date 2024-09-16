"use server";
import { NextResponse } from "next/server";

interface Place {
  opening_hours: any;
  formatted_address: any;
  name: string;
  rating: number;
  types: string[];
}

interface NearbySearch {
  place_id: string;
  opening_hours: any;
  vicinity: string;
  name: string;
  rating: number;
  types: string[];
}

export async function POST(
  request: Request,
  { params }: { params: { value: string } },
) {
  const { value } = params;
  const url = new URL(request.url);
  const address = url.searchParams.get("address") || "";
  console.log(address);
  // rank by, type, keyword, address, type,
  try {
    console.log("yes");
    const geoRes = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address},nsw&key=${process.env.API_KEY}`,
      {
        method: "GET",
      },
    );
    const geoData = await geoRes.json();
    const geoLocation = {
      latitude: geoData.results[0].geometry.location.lat,
      longitude: geoData.results[0].geometry.location.lng,
    };
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${geoLocation.latitude},${geoLocation.longitude}&rankby=distance&type=restaurant,cafe,bakery&keyword=${value}&key=${process.env.API_KEY}`,
    );
    const data = await res.json();

    const newData = data.results.map((place: NearbySearch) => {
      return {
        name: place.name,
        address: place.vicinity,
        rating: place.rating,
        open: place.opening_hours?.open_now,
        types: place.types,
        placeId: place.place_id,
      };
    });
    console.log(newData);
    return NextResponse.json(newData);
  } catch (error) {
    NextResponse.json(error);
  }
}
