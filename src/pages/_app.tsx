import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import { ListProvider } from "@/context/ListContext";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <ListProvider>
        <Component {...pageProps} />
      </ListProvider>
    </SessionProvider>
  );
}
