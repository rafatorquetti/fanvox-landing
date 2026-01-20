import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        {/* BRAND */}
        <div className="space-y-4">
          <p className="text-sm text-gray-400 max-w-xs">
            Fanvox is a platform for requesting personalized interactions
            directly from verified creators.
          </p>
        </div>

        {/* PRODUCT */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white">
            Product
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link
                href="/creators"
                className="hover:text-purple-400 transition"
              >
                Explore creators
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="hover:text-purple-400 transition"
              >
                For creators
              </Link>
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link
                href="/about"
                className="hover:text-purple-400 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-purple-400 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* LEGAL */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white">
            Legal
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link
                href="/terms"
                className="hover:text-purple-400 transition"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-purple-400 transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/cookies"
                className="hover:text-purple-400 transition"
              >
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Fanvox. All rights reserved.
      </div>
    </footer>
  );
}
