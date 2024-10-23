'use client'
 
import Link from 'next/link'
import { useEffect } from 'react'
import ButtonA from './_components/reusable/buttons/ButtonA'
import Image from 'next/image'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="flex justify-center w-full">
      <div className="mt-24 mb-20 px-20 bg-white flex flex-col items-center">
        <h2 className="font-kufi text-lg py-3 border-b-2 w-full text-center text-red-400">حدث خطأ ما</h2>
        <div className="flex flex-col items-center">
          <Image src="/images/attention.png" alt='error' width={300} height={300} />
          <div className="font-naskh text-lg">حدث خطأ. يرجى المحاولة لاحقا</div>
        </div>
        <div className='flex justify-between w-full my-10'>
        <Link href="/"><ButtonA text='الرجوع إلى الرئيسية'/></Link>
        <button
        className='bg-red-500 mx-4 font-kufi text-white px-[24px] py-[12px] hover:bg-red-700 transition-all'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        أعد المحاولة
      </button>

        </div>
      </div>
    </div>
  )
}