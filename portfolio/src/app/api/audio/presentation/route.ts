import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { Readable } from "node:stream";

export const runtime = "nodejs";

const audioPath = path.join(
  process.cwd(),
  "src",
  "assets",
  "audio",
  "presentation.mp3",
);

function createWebStream(start?: number, end?: number) {
  return Readable.toWeb(
    createReadStream(audioPath, { start, end }),
  ) as ReadableStream;
}

export async function GET(request: Request) {
  const fileStat = await stat(audioPath);
  const range = request.headers.get("range");

  if (range) {
    const [startText, endText] = range.replace("bytes=", "").split("-");
    const start = Number.parseInt(startText, 10);
    const end = endText ? Number.parseInt(endText, 10) : fileStat.size - 1;

    if (
      Number.isNaN(start) ||
      start < 0 ||
      end >= fileStat.size ||
      start > end
    ) {
      return new Response(null, {
        status: 416,
        headers: {
          "Content-Range": `bytes */${fileStat.size}`,
        },
      });
    }

    return new Response(createWebStream(start, end), {
      status: 206,
      headers: {
        "Accept-Ranges": "bytes",
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Length": (end - start + 1).toString(),
        "Content-Range": `bytes ${start}-${end}/${fileStat.size}`,
        "Content-Type": "audio/mpeg",
      },
    });
  }

  return new Response(createWebStream(), {
    headers: {
      "Accept-Ranges": "bytes",
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Length": fileStat.size.toString(),
      "Content-Type": "audio/mpeg",
    },
  });
}
