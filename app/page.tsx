import Hero from '@/sections/Hero'
import AboutPreview from '@/sections/AboutPreview'
import FeaturedProjects from '@/sections/FeaturedProjects'
import Stack from '@/sections/Stack'
import Differentials from '@/sections/Differentials'
export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <Stack />
      <Differentials />
    </main>
  )
}