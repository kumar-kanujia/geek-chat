"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

const STORAGE_KEY = "GEEK_CHAT_THEME_KEY";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      storageKey={STORAGE_KEY}
      defaultTheme="dark"
      attribute="class"
      enableSystem={false}
    >
      {children}
    </NextThemesProvider>
  );
}
