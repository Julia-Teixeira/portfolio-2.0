"use client";
import { Contacts } from "@/components/contacts";
import { Footer } from "@/components/footer";
import { Home } from "@/components/home";
import { Projects } from "@/components/projects";

export default function App() {
  return (
    <main className="flex gap-5 flex-col bg-grey-0 pt-14">
      <Home />
      <Projects />
      <Contacts />
      <Footer />
    </main>
  );
}
