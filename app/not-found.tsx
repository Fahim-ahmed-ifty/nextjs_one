import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4">
      <div className="text-center text-white">
        <h1 className="text-7xl font-bold text-blue-400 mb-4">404</h1>
        <p className="text-2xl mb-6">Oops! Page not found</p>
        <Link
          href="/"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
