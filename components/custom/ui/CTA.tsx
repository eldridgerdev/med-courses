import { Button } from "@/components/ui/button";
import { Award, BookOpen, Zap } from "lucide-react";

const CTA = () => {
  return (
    <>
      <section className="w-full py-12 px-8 md:px-18 lg:px-22 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="p-4 bg-white rounded-full dark:bg-gray-900">
              <Zap className="h-6 w-6 text-blue-500" />
            </div>
            <h2 className="text-xl font-bold">AI-Powered Recommendations</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Our advanced AI analyzes your profile and preferences to suggest
              the most relevant CEU courses.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="p-4 bg-white rounded-full dark:bg-gray-900">
              <BookOpen className="h-6 w-6 text-green-500" />
            </div>
            <h2 className="text-xl font-bold">Extensive Course Library</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Access thousands of accredited CEU courses from top institutions
              and industry experts.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="p-4 bg-white rounded-full dark:bg-gray-900">
              <Award className="h-6 w-6 text-purple-500" />
            </div>
            <h2 className="text-xl font-bold">Track Your Progress</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Easily monitor your CEU credits and receive reminders for upcoming
              deadlines.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Ready to Advance Your Career?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Join thousands of professionals who have found their ideal CEU
              courses with our AI-assisted platform.
            </p>
          </div>
          <div className="space-x-4">
            <Button className="bg-foreground hover:bg-muted-foreground">
              Get Started for Free
            </Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </section>
    </>
  );
  return (
    <section className="bg-gray-100 py-16 px-8 text-center">
      <h2 className="text-2xl font-semibold mb-4">
        Join Thousands of Successful PTs
      </h2>
      <p className="text-lg mb-8">
        Sign up today and start advancing your medical career with our
        cutting-edge AI assistant.
      </p>
      <Button
        variant="default"
        size="lg"
        className="text-white bg-blue-500 shadow-lg py-2 px-6 rounded-lg hover:bg-blue-200"
      >
        Contact Us
      </Button>
    </section>
  );
};

export default CTA;
