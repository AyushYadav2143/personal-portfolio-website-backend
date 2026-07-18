export function semanticChunk(doc) {

    const lines = doc.content.split("\n");

    const chunks = [];

    let currentHeading = "Introduction";

    let buffer = [];

    for (const line of lines) {

        // Detect markdown headings
        if (line.startsWith("#")) {

            // Save previous section
            if (buffer.length > 0) {

                chunks.push({

                    id: `${doc.id}-${chunks.length}`,

                    source: doc.file,

                    folder: doc.folder,

                    title: currentHeading,

                    content: buffer.join("\n").trim()

                });

            }

            currentHeading = line.replace(/^#+\s*/, "");

            buffer = [];

        } else {

            buffer.push(line);

        }

    }

    // Save last chunk

    if (buffer.join("").trim().length > 0) {

        chunks.push({

            id: `${doc.id}-${chunks.length}`,

            source: doc.file,

            folder: doc.folder,

            title: currentHeading,

            content: buffer.join("\n").trim()

        });

    }

    return chunks;

}