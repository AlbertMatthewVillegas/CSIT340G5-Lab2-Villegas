import { SectionHeading } from './SectionHeading';
import { SkillTag } from './SkillTag';

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-4xl scroll-mt-16 border-t border-stone-200 px-6 py-16">
      <SectionHeading title="Skills" subtitle="What I work with." />
      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="text-sm font-medium text-stone-500">Languages</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {['HTML', 'CSS', 'JavaScript', 'Java'].map((skill) => <SkillTag key={skill} name={skill} />)}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-stone-500">Frameworks</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {['React', 'Tailwind CSS', 'Bootstrap'].map((skill) => <SkillTag key={skill} name={skill} />)}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-stone-500">Tools</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {['Git', 'VS Code', 'MySQL', 'Figma'].map((skill) => <SkillTag key={skill} name={skill} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
