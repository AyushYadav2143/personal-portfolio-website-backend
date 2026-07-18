import fs from "fs-extra";
import path from "path";
import matter from "gray-matter";
import { glob } from "glob";

const BRAIN_PATH = path.join(process.cwd(), "brain");

export async function loadBrain() {

    const files = await glob("**/*.md", {
        cwd: BRAIN_PATH
    });

    const documents = [];

    for (const file of files) {

        const fullPath = path.join(BRAIN_PATH, file);

        const raw = await fs.readFile(fullPath, "utf-8");

        const parsed = matter(raw);
        const normalized = file.replaceAll("\\", "/");

documents.push({

    id: normalized.replace(".md", ""),

    file: normalized,

    folder: normalized.split("/")[0],

    title:
        parsed.data.title ||
        path.basename(normalized, ".md"),

    content: parsed.content,

    metadata: parsed.data

});
        

      

    }

    return documents;

}