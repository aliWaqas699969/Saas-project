"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useRouter } from "next/navigation";

const HistoryCard = () => {
  const router = useRouter();
  return (
    <Card
      className="hover:cursor-pointer hover:opacity-75"
      onClick={() => router.push("/history")}
    >
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-bold text-2xl">History</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        <p>View past Quix Marks!</p>
      </CardContent>
    </Card>
  );
};

export default HistoryCard;
