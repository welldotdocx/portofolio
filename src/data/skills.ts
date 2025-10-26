export interface Skill {
  title: string;
  description: string;
  /** Tailwind text color class, e.g. 'text-blue-600' */
  color?: string;
}

export const skills: Skill[] = [
  {
    title: "React",
    description:
      "Membangun antarmuka reaktif dengan Hooks, Context, dan optimasi rendering untuk pengalaman pengguna cepat dan responsif.",
    color: "text-blue-600",
  },
  {
    title: "TypeScript",
    description:
      "Menambahkan tipe statis untuk meningkatkan keandalan kode, refactor aman, dan pengalaman developer yang lebih baik.",
    color: "text-indigo-600",
  },
  {
    title: "Node.js & Express",
    description:
      "Membangun API backend, handling asynchronous, dan integrasi dengan database untuk aplikasi full-stack.",
    color: "text-green-600",
  },
  {
    title: "Next.js",
    description:
      "Server-side rendering, static site generation, dan routing yang efisien untuk performa dan SEO.",
    color: "text-purple-600",
  },
  {
    title: "Tailwind CSS",
    description:
      "Utility-first styling untuk UI yang konsisten dan cepat dibuat, responsif tanpa boilerplate CSS berlebih.",
    color: "text-sky-600",
  },
  {
    title: "Testing & QA",
    description:
      "Menulis unit/integration tests (Jest, React Testing Library) untuk menjaga kualitas dan mencegah regresi.",
    color: "text-rose-600",
  },
  {
    title: "A11y & Performance",
    description:
      "Praktik aksesibilitas dan optimasi performa (lazy loading, code-splitting, dan audit Lighthouse).",
    color: "text-amber-600",
  },
  {
    title: "Git & CI/CD",
    description:
      "Workflow Git kolaboratif dan pipeline otomatis untuk build, test, dan deploy.",
    color: "text-pink-600",
  },
  {
    title: "REST & GraphQL",
    description:
      "Merancang API yang konsisten, efisien, dan mudah dikonsumsi oleh client.",
    color: "text-emerald-600",
  },
];
