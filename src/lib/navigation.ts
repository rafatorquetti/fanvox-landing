export function localizedPath(locale: string, path: string) {
    // ensures single slash and proper prefix
    if (!path.startsWith("/")) path = `/${path}`;
    return `/${locale}${path}`;
  }