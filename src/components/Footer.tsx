import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-32 bg-black border-t border-white/5">

      {/* Main Footer Content */}
      <div className="mx-auto w-full max-w-6xl px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

          {/* Left Description */}
          <div className="md:col-span-1">
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Fanvox is a platform for requesting personalized interactions
              directly from verified creators.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-6">
              Product
            </h4>
            <div className="space-y-3 text-gray-400">
              <Link href="/creators" className="block hover:text-white transition">
                Explore creators
              </Link>
              <Link href="/for-creators" className="block hover:text-white transition">
                For creators
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">
              Company
            </h4>
            <div className="space-y-3 text-gray-400">
              <Link href="/about" className="block hover:text-white transition">
                About
              </Link>
              <Link href="/contact" className="block hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6">
              Legal
            </h4>
            <div className="space-y-3 text-gray-400">
              <Link href="/terms" className="block hover:text-white transition">
                Terms of Service
              </Link>
              <Link href="/privacy" className="block hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="block hover:text-white transition">
                Cookie Policy
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto w-full max-w-6xl px-6 py-6 text-center text-sm text-gray-500">
          © 2026 Fanvox. All rights reserved.
        </div>
      </div>

    </footer>
  );
}
