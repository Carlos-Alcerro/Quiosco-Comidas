import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, res) {
  const productos = await prisma.producto.findMany();

  return NextResponse.json(productos);
}
