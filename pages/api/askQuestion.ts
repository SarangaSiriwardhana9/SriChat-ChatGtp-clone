// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import query from "../../lib/queryApi";
import type { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import { adminDb } from "@/firebaseAdmin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "please provide a prompt" });
    return;
  }

  if (!chatId) {
    res.status(400).json({ answer: "please provide a valid chatId" });
    return;
  }

  //chatgtp query

  const response = await query(prompt, chatId, model);

  const message: Message = {
    text: response || "Sri chat unable to answer this question.",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      id: "sri",
      name: "Sri",
      avatar: "https://links.papareact.com/89k",
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
