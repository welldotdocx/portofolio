import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { skills } from "@/data/skills";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="container mx-auto px-4 py-8">
        {/* Profile Section */}
        <section className="flex flex-col items-center mb-12">
          <Avatar className="w-24 h-24 mb-4 ring-2 ring-blue-100 transition-transform hover:scale-105">
            <AvatarImage
              src="https://avatar.iran.liara.run/public/boy"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>

          <Badge
            variant="secondary"
            className="bg-blue-400 text-white mb-3 animate-fade-in"
          >
            <ShieldCheck className="mr-1" /> Expert
          </Badge>

          <h1 className="text-2xl font-bold mb-2">Razael Saputra</h1>

          <p className="text-gray-600 text-center max-w-xl leading-relaxed mb-8">
            Expert web developer specializing in building scalable, accessible,
            and high-performance web applications using modern technologies like
            React, TypeScript, and Node.js. I prioritize clean architecture,
            responsive design, and intuitive user experiences to deliver
            reliable, maintainable solutions.
          </p>

          <div className="w-full max-w-md mt-6">
            <Card className="w-full transition-all duration-300 hover:shadow-lg">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Skills</CardTitle>
                <CardDescription className="text-gray-500">
                  Keahlian utama sebagai Web Developer
                </CardDescription>
              </CardHeader>
              <Separator className="mb-1" />
              <CardContent>
                <ul className="grid gap-4">
                  {skills.map((skill, index) => (
                    <li
                      key={index}
                      className="p-3 rounded-lg transition-all duration-200 hover:bg-gray-50 hover:translate-x-1"
                    >
                      <div
                        className={`font-semibold mb-1 flex items-center gap-2 ${
                          skill.color ?? "text-blue-600"
                        }`}
                      >
                        {skill.title}
                      </div>
                      <div className="text-sm text-gray-600 leading-relaxed">
                        {skill.description}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
