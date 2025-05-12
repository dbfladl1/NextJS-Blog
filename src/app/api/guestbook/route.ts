import { supabase } from "@/utils/supabase";
import { returnState } from "@/utils/apiRes";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nickname, relation, text, userid } = body;
    const { data, error } = await supabase.from("guestbook").insert({
      nickname,
      relation,
      text,
      userid,
    });

    return returnState({ data, error });
  } catch (error) {
    console.error("❌ POST error:", error);
    return new Response(
      JSON.stringify({ error: "서버 오류 발생" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase.from("guestbook").select();

    return returnState({ data, error });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(req: Request) {
  const body = await req.json();
  const { userid } = body;
  try {
    const {data, error} = await supabase
    .from('guestbook')
    .delete()
    .eq('userid', userid)

    return returnState({ data, error });
  } catch (error) {
    console.log(error);
  }
}