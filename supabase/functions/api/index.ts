import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: corsHeaders,
    });
  }

  try {
    const { resumeData, jobDescription } = await req.json();

    const apiKey = Deno.env.get("GROQ_API_KEY");

    if (!apiKey) {
      throw new Error("GROQ_API_KEY not found.");
    }

    const prompt = `
You are an expert recruiter and professional cold email writer.

Write a personalized cold email using the following information.

Resume:
${resumeData}

Job Description:
${jobDescription}

Return ONLY this format:

Subject:
<subject>

Cold Email:
<email body>

Best Regards,
<Candidate Name>

Phone:
Email:
LinkedIn:
GitHub:
Portfolio:
`;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-120b",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    const result = await response.json();

    return new Response(
      JSON.stringify({
        email: result.choices[0].message.content,
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: err.message,
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
