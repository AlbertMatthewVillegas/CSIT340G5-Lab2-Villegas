import { SectionHeading } from './SectionHeading';
import { TimelineItem } from './TimelineItem';

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-4xl scroll-mt-16 border-t border-stone-200 px-6 py-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem period="2024 - Present" title="BS Information Technology" place="Cebu Institute of Technology - University" description="Taking up web development, databases, and systems analysis." />
        <TimelineItem period="2025" title="Student Assistant" place="CCS Computer Laboratory" description="Set up lab machines and helped students with software installs." />
        <TimelineItem period="2022 - 2024" title="Senior High School, ICT Strand" place="Talisay City National High School" description="Built my first web page and got hooked." />
      </ol>
    </section>
  );
}