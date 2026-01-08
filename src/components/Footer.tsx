import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 text-lg font-semibold">Fanvox</div>
            <p className="text-sm text-white/60">
              A trusted platform for fans to connect directly with creators
              through personalized requests.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/80">
              Product
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link href="/creators" className="hover:text-white">
                  Explore creators
                </Link>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  How it works
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Pricing
                </span>
              </li>
            </ul>
          </div>

          {/* Creators */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/80">
              Creators
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <span className="hover:text-white cursor-pointer">
                  Become a creator
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Creator guidelines
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Safety & trust
                </span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/80">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <span className="hover:text-white cursor-pointer">
                  About
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Privacy
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Terms
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">
                  Contact
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Fanvox. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs text-white/60">
            <span>Language:</span>
            <button className="hover:text-white">English</button>
            <span>·</span>
            <button className="hover:text-white">Español</button>
            <span>·</span>
            <button className="hover:text-white">Português</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

  