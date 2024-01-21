import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Welcome to Quizmify</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              perferendis provident veritatis nulla natus, unde, eius debitis
              voluptates ex ratione necessitatibus itaque quae cum vero. Quam
              beatae, molestiae facilis harum temporibus repudiandae.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/dashboard">
              <Button>Get Started</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
