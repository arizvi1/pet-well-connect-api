import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import getCurrentDirectoryPath from "../utils/getCurrentDirectoryPath.js";

const __dirname = getCurrentDirectoryPath(import.meta.url);
console.log("__dirname", __dirname);

const typeDefs = loadFilesSync(path.join(__dirname + "/types"), {
  extensions: ["graphql"],
});

export default mergeTypeDefs(typeDefs);
