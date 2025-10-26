import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function App() {
  return (
    <div className="justify-center items-center flex flex-col p-4">
      <Avatar className="w-16 h-16 pb-5">
        <AvatarImage
          src="https://avatar.iran.liara.run/public/boy"
          alt="User Avatar"
          className="w-full h-full object-cover"
        />
        <AvatarFallback>R</AvatarFallback>
      </Avatar>

      <Badge variant="secondary" className="bg-blue-400 text-white">
        <ShieldCheck /> Expert
      </Badge>

      <p className="font-semibold">Razael Saputra</p>

      <p className="text-sm text-gray-500 text-center max-w-md">
        Expert web developer specializing in building scalable, accessible, and
        high-performance web applications using modern technologies like React,
        TypeScript, and Node.js. I prioritize clean architecture, responsive
        design, and intuitive user experiences to deliver reliable, maintainable
        solutions.j
      </p>

      <div className="w-full max-w-md mt-6">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Skills</CardTitle>
            <CardDescription>
              Keahlian utama sebagai Web Developer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <div className="font-semibold">React</div>
                <div className="text-sm text-gray-500">
                  Membangun antarmuka reaktif dengan Hooks, Context, dan
                  optimasi rendering untuk pengalaman pengguna cepat dan
                  responsif.
                </div>
              </li>

              <li>
                <div className="font-semibold">TypeScript</div>
                <div className="text-sm text-gray-500">
                  Menambahkan tipe statis untuk meningkatkan keandalan kode,
                  refactor aman, dan pengalaman developer yang lebih baik.
                </div>
              </li>

              <li>
                <div className="font-semibold">Node.js & Express</div>
                <div className="text-sm text-gray-500">
                  Membangun API backend, handling asynchronous, dan integrasi
                  dengan database untuk aplikasi full-stack.
                </div>
              </li>

              <li>
                <div className="font-semibold">Next.js</div>
                <div className="text-sm text-gray-500">
                  Server-side rendering, static site generation, dan routing
                  yang efisien untuk performa dan SEO.
                </div>
              </li>

              <li>
                <div className="font-semibold">Tailwind CSS</div>
                <div className="text-sm text-gray-500">
                  Utility-first styling untuk UI yang konsisten dan cepat
                  dibuat, responsif tanpa boilerplate CSS berlebih.
                </div>
              </li>

              <li>
                <div className="font-semibold">Testing & QA</div>
                <div className="text-sm text-gray-500">
                  Menulis unit/integration tests (Jest, React Testing Library)
                  untuk menjaga kualitas dan mencegah regresi.
                </div>
              </li>

              <li>
                <div className="font-semibold">A11y & Performance</div>
                <div className="text-sm text-gray-500">
                  Praktik aksesibilitas dan optimasi performa (lazy loading,
                  code-splitting, dan audit Lighthouse).
                </div>
              </li>

              <li>
                <div className="font-semibold">Git & CI/CD</div>
                <div className="text-sm text-gray-500">
                  Workflow Git kolaboratif dan pipeline otomatis untuk build,
                  test, dan deploy.
                </div>
              </li>

              <li>
                <div className="font-semibold">REST & GraphQL</div>
                <div className="text-sm text-gray-500">
                  Merancang API yang konsisten, efisien, dan mudah dikonsumsi
                  oleh client.
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
