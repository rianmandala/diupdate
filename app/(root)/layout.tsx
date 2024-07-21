import React from "react";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "../globals.css";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Bottombar from "@/components/shared/Bottombar";
import RightSidebar from "@/components/shared/RightSidebar";
import Topbar from "@/components/shared/Topbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <head>
          <title>Diupdate</title>
          <meta
            name="title"
            content="Diupdate - Engage in Dynamic Communities and Discussions"
          />
          <meta
            name="description"
            content="Diupdate is a platform for creating and engaging in dynamic communities and discussions. Features include authentication, thread creation, commenting, community management, and more."
          />
          <meta
            name="keywords"
            content="Diupdate, community platform, discussions, thread creation, commenting, social login, user engagement, MongoDB, Next.js, Clerk, real-time updates, serverless APIs"
          />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="author" content="Rian Mandala" />
          <meta
            property="og:title"
            content="Diupdate - Engage in Dynamic Communities and Discussions"
          />
          <meta
            property="og:description"
            content="Join Diupdate to create threads, comment, manage communities, and engage in vibrant discussions."
          />
          <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
          <meta property="og:url" content="YOUR_WEBSITE_URL" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Diupdate - Engage in Dynamic Communities and Discussions"
          />
          <meta
            name="twitter:description"
            content="Experience dynamic community engagement with Diupdate. Create threads, comment, and manage communities effortlessly."
          />
          <meta name="twitter:image" content="URL_TO_YOUR_IMAGE" />
          <meta name="twitter:url" content="YOUR_WEBSITE_URL" />
        </head>
        <body className={inter.className}>
          <Topbar />

          <main className="flex flex-row">
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            {/* @ts-ignore */}
            <RightSidebar />
          </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
