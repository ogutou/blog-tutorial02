"use client";

import React from "react";
import { Provider } from "../components/ui/provider";
import LoginModal from "../components/LoginModal";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { UserProvider } from "../contexts/UserContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <Provider>
          <UserProvider>
            <Box as="header" p={4}>
              <LoginModal />
            </Box>
            {children}
            <footer>フッター</footer>
          </UserProvider>
        </Provider>
      </body>
    </html>
  );
}
