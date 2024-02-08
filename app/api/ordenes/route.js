import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { nombre, fecha, total, pedido } = await request.json();

    const newOrden = await prisma.orden.create({
      data: {
        nombre,
        fecha,
        total,
        pedido,
      },
    });

    return NextResponse.json(newOrden);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function GET() {
  try {
    const allOrdenes = await prisma.orden.findMany({
      where: {
        estado: false,
      },
    });
    return NextResponse.json(allOrdenes);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
