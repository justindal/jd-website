import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className='bg-base100'>
      <NavBar></NavBar>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </main>
  )
}
