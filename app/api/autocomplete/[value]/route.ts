"use server";
import { NextResponse } from "next/server";
export async function POST(
  request: Request,
  { params }: { params: { value: string } },
) {
  const { value } = params;
  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&key=${process.env.API_KEY}`,
    );
    const data = await res.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}
