import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request, { params }) {
  const id = params.id;
  const ordenActualizada = await prisma.orden.update({
    where: {
      id: parseInt(id),
    },
    data: {
      estado: true,
    },
  });
  return NextResponse.json(ordenActualizada);
}
