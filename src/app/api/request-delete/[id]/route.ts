import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

interface DeleteVote {
  id: number;
  count: number;
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Validate the ID
    const websiteId = parseInt(id);
    if (isNaN(websiteId)) {
      return NextResponse.json(
        { message: "Invalid website ID" },
        { status: 400 }
      );
    }

    // Path to the wantToDelete.txt file
    const filePath = path.join(
      process.cwd(),
      "src",
      "data",
      "wantToDelete.txt"
    );

    // Read existing content
    let votes: DeleteVote[] = [];
    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      if (fileContent.trim()) {
        votes = fileContent
          .split("\n")
          .filter((line) => line.trim())
          .map((line) => {
            const [id, count] = line
              .split(":")
              .map((part) => parseInt(part.trim()));
            return { id, count: count || 1 };
          })
          .filter((vote) => !isNaN(vote.id));
      }
    } catch (error) {
      // File doesn't exist or is empty, that's okay
      votes = [];
    }

    // Check if ID already exists and increment counter
    const existingVote = votes.find((vote) => vote.id === websiteId);
    if (existingVote) {
      existingVote.count++;
    } else {
      votes.push({ id: websiteId, count: 1 });
    }

    // Sort by count (descending) to show most voted first
    votes.sort((a, b) => b.count - a.count);

    // Write back to file
    const fileContent =
      votes.map((vote) => `${vote.id}:${vote.count}`).join("\n") + "\n";
    await fs.writeFile(filePath, fileContent, "utf-8");

    console.log(`Delete request received for website ID: ${websiteId}`);

    return NextResponse.json(
      {
        message: "Delete request submitted successfully",
        websiteId,
        voteCount: existingVote ? existingVote.count : 1,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing delete request:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
