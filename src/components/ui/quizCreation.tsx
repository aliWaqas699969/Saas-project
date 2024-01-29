import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./card";

const quizCreation = () => {
  return (
    <div className="absolute translate-x-1/2 translate-y-1/2 top-1/2 right-1/2">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Quiz Start</CardTitle>
          <CardDescription>Lets Create a quiz!</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default quizCreation;
