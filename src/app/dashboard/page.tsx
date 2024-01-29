import HistoryCard from "@/components/dashboard/HistoryCard";
import QuizmeCard from "@/components/dashboard/QuizmeCard";
import HotTopicCard from "./HotTopicCard";
import React from "react";

const page = () => {
  return (
    <main className="p-8 mx-auto max-w-7xl">
      <div className="flex items-center">
        <h2 className="mr-2 text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      <div className="grid gap-4 mt-4 md:grid-cols-2">
        <QuizmeCard />
        <HistoryCard />
      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-4">
        <HotTopicCard />
      </div>
    </main>
  );
};

export default page;
