import HumanizeDuration from "humanize-duration";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [minutes, setMinutes] = useState(0);
  const pretty = HumanizeDuration(minutes * 60000);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50 dark:bg-[#364954] overflow-hidden">
      <Head>
        <title>Minutes Formatter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 text-center dark:text-gray-100">
        <input
          onChange={(e) => setMinutes(e.target.value)}
          type="text"
          name="minutes"
          id="minutes"
          className="px-2 rounded shadow border border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-700"
        />
        {pretty}
      </main>
    </div>
  );
}
