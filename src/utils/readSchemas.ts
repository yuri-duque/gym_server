import { readdirSync, readFileSync } from "fs";

export function readSchemas(dirname: string) {
  const filenames = readdirSync(dirname);
  let content = "";

  filenames.forEach(function (filename) {
    content += readFileSync(`${dirname}/${filename}`, "utf-8");
  });

  return content;
}
