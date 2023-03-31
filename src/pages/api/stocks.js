import axios from "axios";
import { load } from "cheerio";

export default async function handler(req, res) {
  try {
    const { symbol,code } = req.query;
    const response = await axios.get(
      `https://www.google.com/finance/quote/${symbol}:${code}`
    );
    const $ = load(response.data);
    const price = $("div.YMlKec.fxKbKc").first().text();

    res.status(200).json({ price });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
