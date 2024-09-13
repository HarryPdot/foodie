"use server";
import { NextResponse } from "next/server";

interface Place {
  opening_hours: any;
  formatted_address: any;
  name: string;
  rating: number;
}

export async function POST(
  request: Request,
  { params }: { params: { value: string } },
) {
  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${params.value}&includedtype=restaurant&key=${process.env.API_KEY}&region=au`,
    );
    const data = await res.json();
    const newData = data.results.map((place: Place) => {
      return {
        name: place.name,
        address: place.formatted_address,
        rating: place.rating,
        open: place.opening_hours?.open_now,
      };
    });
    console.log(params);
    return NextResponse.json(newData);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
