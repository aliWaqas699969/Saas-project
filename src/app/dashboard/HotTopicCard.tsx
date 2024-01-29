import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const hotTopicCard = () => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Hot Topics</CardTitle>
        <CardDescription>Click on a Topic to start Quiz!</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">World Cloud!</CardContent>
    </Card>
  );
};

export default hotTopicCard;
