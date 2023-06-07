import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center mt-5 flex-col">
      <h1 className="text-5xl">Page not found – 404</h1>
      <Link
        href="/"
        className=" text-2xl mt-5 p-5 bg-gray-800 rounded-md hover:bg-gray-600 transition-colors "
      >
        Go back to Home
      </Link>
    </div>
  );
}
