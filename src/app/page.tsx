'use client'
import { useState } from 'react'

type bubble = {
  id: number
  message: string
  touched: boolean
}

const bubbles: bubble[] = [
  { id: 1, message: "test1", touched: false },
  { id: 2, message: "test2", touched: false },
  { id: 3, message: "test3", touched: false },
]

export default function Home() {
  const [inputValue, setInputValue] = useState<string | null>(null);
  return (
    <main className="text-4xl">
      <div className="">
        <h1>fuwapachi 工事中...</h1>
        <div className="move">
          <div className="item shake"></div>
        </div>
      </div>
    </main>
  );
}
