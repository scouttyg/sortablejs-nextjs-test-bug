import type { NextPage } from 'next'
import { Sortable } from '../components/Sortable'

const Home: NextPage = () => {
  const fakeItems = [
    {
      id: 1,
      name: "Shrek",
    },
    {
      id: 2,
      name: "Fiona",
    },
    {
      id: 3,
      name: "Donkey",
    },
    {
      id: 4,
      name: "Lord Faarquad",
    },
  ]

  return (
    <div>
      <Sortable items={fakeItems} />
    </div>
  )
}

export default Home
