// File: app/api/auth/route.ts
import { NextResponse } from "next/server";
import prisma from "@/app/lib/db/prisma";
import { UserSchema } from "@/app/lib/schemas";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = UserSchema.safeParse(body);

    if (!parsed.success) {
      console.log("schema invalid");
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const { email, phone } = parsed.data;

    // Check if user exists
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email: email || undefined }, { phone: phone || undefined }],
      },
    });

    if (user) {
      return NextResponse.json({ exists: true, message: "User exists" });
    } else {
      return NextResponse.json({
        exists: false,
        message: "User does not exist, create an account",
      });
    }
  } catch (error) {
    console.error("Error checking user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
