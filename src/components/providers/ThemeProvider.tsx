"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const storageKey = "GEEK_CHAT_THEME_KEY";
  return (
    <NextThemesProvider
      {...props}
      storageKey={storageKey}
      defaultTheme="dark"
      attribute="class"
      enableSystem
    >
      {children}
    </NextThemesProvider>
  );
}
