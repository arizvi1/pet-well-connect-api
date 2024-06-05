import path from "path";
import { loadFiles } from "@graphql-tools/load-files";
import { mergeResolvers } from "@graphql-tools/merge";
import getCurrentDirectoryPath from "../utils/getCurrentDirectoryPath.js";

async function getResolvers() {
  const __dirname = getCurrentDirectoryPath(import.meta.url);
  const resolvers = await loadFiles(path.join(__dirname + "/resolvers"), {
    extensions: ["js"],
  });

  return resolvers;
}

export default mergeResolvers(await getResolvers());
