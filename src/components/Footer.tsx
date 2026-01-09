export default function Footer() {
    return (
      <footer className="border-t border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
  
          {/* ================= BRAND ================= */}
          <div className="space-y-4">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600" />
            <p className="text-sm text-gray-400 max-w-xs">
              Fanvox is a marketplace for personalized creator interactions —
              built for fans and creators alike.
            </p>
          </div>
  
          {/* ================= PRODUCT ================= */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">
                Browse creators
              </li>
              <li className="hover:text-white cursor-pointer">
                For fans
              </li>
              <li className="hover:text-white cursor-pointer">
                For creators
              </li>
              <li className="hover:text-white cursor-pointer">
                Pricing
              </li>
            </ul>
          </div>
  
          {/* ================= COMPANY ================= */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">
                About
              </li>
              <li className="hover:text-white cursor-pointer">
                Careers
              </li>
              <li className="hover:text-white cursor-pointer">
                Press
              </li>
              <li className="hover:text-white cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
  
          {/* ================= LEGAL ================= */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer">
                Cookie Policy
              </li>
              <li className="hover:text-white cursor-pointer">
                Transparency
              </li>
            </ul>
          </div>
        </div>
  
        {/* ================= COPYRIGHT ================= */}
        <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Fanvox, Inc. All rights reserved.
        </div>
      </footer>
    );
  }
  