import { ProjectCard } from './ProjectCard';
import { SectionHeading } from './SectionHeading';

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-4xl scroll-mt-16 border-t border-stone-200 px-6 py-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard year="2026" title="About Me in React" description="My first React project, rebuilt from a plain HTML page." tech="React · Tailwind CSS" link="https://github.com/juandelacruz/CSIT340-Lab1-DelaCruz" />
        <ProjectCard year="2025" title="Canteen Queue" description="A page that shows how long the canteen line is so students can decide when to go." tech="HTML · CSS · JavaScript" link="https://github.com/juandelacruz/canteen-queue" />
        <ProjectCard year="2025" title="Clinic Records" description="A desktop app for our database class that keeps visit records for a small clinic." tech="Java · MySQL" link="https://github.com/juandelacruz/clinic-records" />
        <ProjectCard year="2024" title="Org Event Page" description="A one-page site for our org's freshman orientation, with the schedule and venue." tech="HTML · Bootstrap" link="https://github.com/juandelacruz/org-event-page" />
      </div>
    </section>
  );
}