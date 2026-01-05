import Image from "next/image";
import BlogImage from '@/assets/blog-19-2.png'
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center  min-h-screen py-2">
      <h1 className="text-xl font-semibold">Home Page</h1>
      <div className="mt-10">
        <h1>Blogs</h1>
        <ul className="mt-4">
          <Link href={`/blog/interview-preparation`}>
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
            </li></Link>
        </ul>
      </div>
    </div>
  );
}
