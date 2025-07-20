// layout.tsx

import React from "react";
import { Provider } from "@/components/ui/provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body>
          <header>ナビゲーションバー</header>
          {children}
          <footer>フッター</footer>
        </body>
      </Provider>
    </html>
  );
}
