"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useRouter } from "next/navigation";

const QuizmeCard = () => {
  const router = useRouter();
  return (
    <Card
      className="hover:cursor-pointer hover:opacity-75"
      onClick={() => router.push("/quiz")}
    >
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl font-bold ">Quiz ME</CardTitle>
        {/* <BrainCircuit></BrainCircuit> */}
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        <p>Challenge your self with a quiz!</p>
      </CardContent>
    </Card>
  );
};

export default QuizmeCard;
