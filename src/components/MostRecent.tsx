"use client"
import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { latest } from "@/data/data";

const MostRecent = React.forwardRef<HTMLDivElement>((_,ref) => {
  return (
    <section ref={ref}>
      <p className="text-center tracking-wider font-bold lora text-2xl py-5">
        Most Recent
      </p>
      <div className="md:grid md:grid-cols-3 lg:grid-cols-5 lg:mx-30">
        {latest.map((post) => (
          <Card
            key={post.id}
            className="mb-2 mx-3 flex flex-col justify-between text-sm nav"
          >
            <div className="relative overflow-hidden">
              <img
                src={post.image}
                alt="images"
                className="hover:scale-110 transition-all duration-500 min-h-[40px]"
              />

              <CardAction className="absolute top-3 right-1 rounded-sm text-white px-2 py-1 bg-blue-600 ">
                {post.badge}
              </CardAction>
            </div>

            <CardHeader>
              <CardTitle className="hover:underline">{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="max-h-15 overflow-hidden">
              <p>{post.content}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center border-t ">
              <div className="flex items-center gap-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src={post.avatar}
                  alt={post.author}
                />
                <p>{post.author}</p>
              </div>
              <p className="pl-2">{post.date}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
});


MostRecent.displayName = "MostRecent"; 
export default MostRecent;
