import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Services from '../components/Services'
import Education from '../components/Education'
import Contact from '../components/Contact'
import FloatingNav from '../components/floating-nav'
import { useTranslation } from '../_lib/i18n'

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const { t } = await useTranslation(lang)

  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* 右侧边栏 */}
      <FloatingNav />
      {/* Home页 */}
      <Hero url={lang} />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Education />
      <Contact />
    </main>
  )
}
