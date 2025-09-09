import { NextResponse } from "next/server";
import Product from "../../models/Product";
import { connectToDatabase } from "@/app/_lib/mongodb";

export async function GET() {
  try {
    await connectToDatabase();
    const products = await Product.find();
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const product = await Product.create(body);
    return NextResponse.json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
