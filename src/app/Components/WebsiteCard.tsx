"use client";
import Link from "next/link";
import { useState } from "react";

interface WebsiteCardProps {
  id: number;
  website_url: string;
  image_url: string;
}

function WebsiteCard({ id, website_url, image_url }: WebsiteCardProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (
      !confirm("Are you sure you want to mark this website as not available?")
    ) {
      return;
    }

    setIsDeleting(true);
    try {
      const response = await fetch(`/api/request-delete/${id}`, {
        method: "POST",
      });

      if (response.ok) {
        alert("Request submitted successfully!");
      } else {
        const error = await response.json();
        alert(`Error: ${error.message || "Failed to submit request"}`);
      }
    } catch (error) {
      alert("Failed to submit delete request");
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="relative group">
      <Link href={website_url} target="_blank" rel="noopener noreferrer">
        <div className="relative overflow-hidden cursor-pointer h-fit-content">
          {/* Image Background */}
          <div
            className={`w-full h-64 relative bg-cover bg-center bg-no-repeat`}
            style={{ backgroundImage: `url(${image_url})` }}
          ></div>

          <p>{image_url.split("_").pop()?.replace(".jpg", "")}</p>
        </div>
      </Link>

      {/* Delete Button - Shows on hover */}
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        title="Mark as not available"
      >
        {isDeleting ? (
          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

export default WebsiteCard;
