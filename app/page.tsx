import { mavenPro } from './fonts';
import Link from 'next/link';
import { fetchAllProjects, fetchAllTechs, fetchUserCount } from "./action/fetch";
import { Technology,Projects } from "@/app/lib/definitions";

export default async function Home() {
  const technologies: Technology[] = await fetchAllTechs()
  const projects: Projects[] = await fetchAllProjects()
  const userCount = await fetchUserCount()

  const techCount = technologies.length;
  const projectCount = projects.length;

  return (
      <main className="w-full min-h-screen bg-linear-to-br from-gray-900 via-green-900 to-gray-900 flex flex-col items-center justify-center">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className={`${mavenPro.className} text-6xl font-bold text-white mb-2`}>
              Code Club
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Explore and master the technologies and tools that power modern development. Join our community of developers.
            </p>
          </div>

          <div className="pt-8">
            <Link
              href="/technologies"
              className="inline-block px-10 py-4 bg-linear-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition transform hover:scale-105 shadow-lg text-lg"
            >
              Explore Technologies →
            </Link>
          </div>

          <div className="pt-8 flex justify-center gap-8 text-gray-400">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">{techCount}</div>
              <p className="text-sm">Technologies</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">{projectCount}</div>
              <p className="text-sm">Categories</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">{userCount}</div>
              <p className="text-sm">Active users</p>
            </div>
          </div>
        </div>
      </main>
  );
}
