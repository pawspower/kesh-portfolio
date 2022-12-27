import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Keshia | Front-End Developer</title>
        <meta name="description" content="I’m an enthusiastic front-end web developer with an acute eye for design whilst optimizing functionality." />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
