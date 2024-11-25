import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Find Your Perfect CEU Course with AI
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Discover tailored continuing education courses that match your
            career goals and interests, powered by advanced AI technology.
          </p>
        </div>
        <div className="w-full max-w-sm space-y-2">
          <form className="flex space-x-2">
            <Input
              className="max-w-lg flex-1"
              placeholder="Enter your profession or interest"
              type="text"
            />
            <Button type="submit">
              <Search className="mr-2 h-4 w-4" />
              Find Courses
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-8 text-center">
      <h1 className="text-4xl font-extrabold mb-4">
        Welcome to whatever this is called!
      </h1>
      <p className="text-xl mb-6">
        Search for ceu providing medical courses with our AI-powered course
        assistant
      </p>
      <Button
        variant="default"
        size="lg"
        className="text-white bg-blue-500 shadow-lg py-2 px-6 rounded-lg hover:bg-blue-200"
      >
        Get Started
      </Button>
    </section>
  );
};

export default Hero;
