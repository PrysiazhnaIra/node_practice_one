import fs from "node:fs/promises";
import { DB_PATH } from "../constants/path.js";

const transformArray = async () => {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    const products = JSON.parse(data);
    const newArray = products.map(({ description, ...item }) => item);
    await fs.writeFile(DB_PATH, JSON.stringify(newArray, null, 2), "utf-8");
  } catch (error) {
    console.log(error);
  }
};

transformArray();
