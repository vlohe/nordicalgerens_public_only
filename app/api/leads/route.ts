import { NextRequest, NextResponse } from "next/server";
import { leadFormSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = leadFormSchema.parse(body);

    console.log("New lead received:", {
      type: validatedData.type,
      service: validatedData.service,
      package: validatedData.package,
      algeTargets: validatedData.algeTargets,
      areaM2: validatedData.areaM2,
      meters: validatedData.meters,
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      zip: validatedData.zip,
      sourcePage: validatedData.sourcePage,
      utmSource: validatedData.utmSource,
      utmMedium: validatedData.utmMedium,
      utmCampaign: validatedData.utmCampaign,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Lead modtaget",
        leadId: `lead_${Date.now()}`,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing lead:", error);

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        {
          success: false,
          message: "Ugyldig data",
          errors: error,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Der opstod en fejl",
      },
      { status: 500 }
    );
  }
}
