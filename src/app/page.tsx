'use client'
import { useEffect, useState } from 'react'
import { bubble } from '@prisma/client';
// import ResolvingViewport from 'next/dist/lib/metadata/types/metadata-interface.js';
// import { async } from '../api/fuwapachi/[id]/route';

export default function Home() {
  const [inputValue, setInputValue] = useState<string | null>(null);
  const [bubbles, setBubbles] = useState<bubble[]>([]);

  useEffect(() => {
    const getBubble = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/fuwapachi`);
      const bubbles = await response.json()
      setBubbles(bubbles)
    }

    getBubble()
  }, [])

  return (
    <main className="container mx-auto text-4xl">
      <div className="">
        <h1>fuwapachi 工事中...</h1>

        {bubbles.map((bubble) => (
          <div key={bubble.id} className="move">
            <div className="item shake" onClick={async () => {
              const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/fuwapachi/${bubble.id}`,
                {
                  method: 'DELETE',
                }
              )

              const deleteBubble = await response.json()
              console.log(deleteBubble)

              setBubbles(bubbles.filter((bubble) => bubble.id == deleteBubble.id))
            }}
            >{bubble.message}</div>
          </div>
        ))
        }


        <footer>
          <form
            onSubmit={async (e) => {
              e.preventDefault()
              if (!inputValue) alert('入力してください')
              const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/fuwapachi`,
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ message: inputValue }),
                }
              )
              const newBubble = await response.json()

              setBubbles([...bubbles, newBubble])
              setInputValue(null)
            }}
            className='items-center mt-4'
          >
            <input
              type='text'
              className='border border-gray-400 px-4 py-2 mr-2 rounded text-black'
              value={inputValue || ''}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder='あなたのメッセージは...?'
            />
            <button
              type='submit'
              className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded'
            >
              追加
            </button>
          </form>
        </footer>
      </div>
    </main >
  );
}
