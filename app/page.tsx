import DataStory from './decks/data-story'
import HowItWorks from './decks/how-it-works'
import Sandbox from './decks/sandbox'

export default function Home() {
  return (
    <main className="p-8 space-y-8">
      <DataStory />
      <HowItWorks />
      <Sandbox />
    </main>
  )
}