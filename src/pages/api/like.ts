// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { IData } from "..";

type Data = {
  status: number;
  message: string;
  body?: object;
};

// interface IData {}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.status(400).json({ status: 400, message: "지원하지 않는 method" });
  }
  if (!req.body) {
    res.status(400).json({ status: 400, message: "nobody" });
  }
  const body = JSON.parse(req.body);
  const { filename, id }: { filename: string; id: string } = body;
  fs.readFile("./public/json/db.json", "utf-8", (_error, file) => {
    const data: IData[] = JSON.parse(file);
    const temp = data.map((item) => {
      if (item.filename === filename) {
        if (item.liked.includes(id)) {
          return { ...item, liked: item.liked.filter((l) => l !== id) };
        }
        return { ...item, liked: [...item.liked, id] };
      }
      return item;
    });
    fs.writeFile(
      "./public/json/db.json",
      JSON.stringify(temp),
      "utf-8",
      (error) => {
        if (error) {
          console.error(error);
        }
      }
    );
  });
  res.status(200).json({ status: 200, message: "John Doe", body });
}
