import { dirname } from "path";
import { fileURLToPath } from "url";

export default function getCurrentDirectoryPath(url) {
  return dirname(fileURLToPath(url));
}
