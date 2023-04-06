// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createClient } from "@supabase/supabase-js";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: number;
  message: string;
  data?: object;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;
  const supportMethod = ["POST", "GET", "DELETE"];
  if (!supportMethod.includes(method || "")) {
    res.status(400).json({ status: 400, message: "not supported method" });
  }
  const supabase = createClient(
    process.env.SUPABASE_URL || "",
    process.env.SUPABASE_ANON_KEY || ""
  );
  if (method === "GET") {
    const dbRes = await supabase
      .from("gallery")
      .select(
        `
            *,
            liked(userId)
          `
      )
      .order("id", { ascending: true });
    res.status(200).json({
      status: 200,
      message: "조회성공",
      data: dbRes.data ? dbRes.data : [],
    });
  } else {
    const { id, userId } = JSON.parse(req.body);
    if (!id || !userId) {
      res.status(400).json({ status: 400, message: "Bad Request" });
    }
    if (method === "POST") {
      const key = id + userId;
      const dbRes = await supabase
        .from("liked")
        .upsert({ key, userId, parentId: id });
      res.status(200).json({ status: 200, message: "생성성공" });
    }
    if (method === "DELETE") {
      const key = id + userId;
      const dbRes = await supabase.from("liked").delete().eq("key", "asdf");
      // .upsert({ key, userId: body.userId, parentId: id });
      res.status(200).json({ status: 200, message: "삭제성공" });
    }
  }
}
