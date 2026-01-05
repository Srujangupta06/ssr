// app/page.js
import Image from "next/image";
import Link from "next/link";
import BlogImage from "@/assets/blog-19-2.png";

// Export metadata for SEO + Open Graph
export const metadata = {
  title: "My Blog Home",
  description: "Read awesome blogs about interview preparation, React, and more!",
  openGraph: {
    title: "My Blog Home",
    description: "Read awesome blogs about interview preparation, React, and more!",
    type: "website",
    url: "https://jobsnprofiles.com",
    images: [
      {
        url: "https://jobsnprofiles.com/blog-19-2.png",
        width: 800,
        height: 600,
        alt: "Blog Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find IT Jobs in USA | Career Advice Job Portal for Students | JobsnProfiles",
    description: "Search latest IT jobs in the USA. Explore JobsnProfiles for job listings, career advice, and employer opportunities.",
    images: ["https://jobsnprofiles.com/blog-19-2.png"],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <h1 className="text-xl font-semibold">Home Page</h1>
      <div className="mt-10">
        <h2>Blogs</h2>
        <ul className="mt-4">
          <Link href="/blog/interview-preparation">
            <li className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform transition-shadow duration-300 cursor-pointer max-w-sm">
              <Image
                src={BlogImage}
                alt="Blog Image"
                width={300}
                height={200}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h5 className="text-lg font-semibold text-gray-800 mb-2">
                  Interview Preparation
                </h5>
                <p className="text-gray-600 text-sm">
                  Learn how to prepare for interviews and ace them.
                </p>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
