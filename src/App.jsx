
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<main>
				<SkillsSection />
				<ProjectsSection />
				<ExperienceSection />
			</main>
			<Footer />
		</>
	)
}

export default App
