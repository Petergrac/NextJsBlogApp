import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { sample } from "@/data/data";
const Featured = () => {
  return (
    <section>
      <div className="text-white lg:px-30">
        <p className="text-center text-2xl border-b mb-2 text-black font-bold lora py-4">Featured Posts</p>
        <div className="mx-3 md:grid md:grid-cols-2 md:gap-4 ">
          {sample.map((post) => (
            <Card
              key={post.id}
              className="mb-4 text-white lora nav max-h-[400px] overflow-hidden"
              style={{ backgroundImage: `url('/img/hero1.jpg')` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="hover:underline text-2xl">
                    {post.title}
                  </CardTitle>
                  <span className="text-xs bg-blue-500 text-white pl-3 pr-2 py-1 rounded">
                    {post.badge}
                  </span>
                </div>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p  className="text-lg">{post.content}</p>
              </CardContent>
              <CardFooter className="flex justify-between gap-2 bg-black/50">
                <div className="flex items-center gap-2">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="text-sm text-white/70 ">{post.author}</p>
                </div>
                <p>{post.date}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
