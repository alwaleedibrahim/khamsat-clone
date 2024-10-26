'use client'
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SearchInput() {
  const searchParams = useSearchParams()
  const q : string = searchParams.get('q') || ''
  const [searchQuery, setSearchQuery] = useState(q)
  const router = useRouter()
 
  const debounce = (fn : CallableFunction, delay: number) => {
    let timeoutId : NodeJS.Timeout;
    return (...args: unknown[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  }

  const debouncedSearch = debounce((value: string)=> {
    setSearchQuery(value);
  },1000)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(event.target.value);
  };

  useEffect(()=> {
      const searchParams : string = new URLSearchParams({q: searchQuery}).toString()
      router.push(`?${searchParams}`)
}, [searchQuery])

  return (
    <input
      type="search"
      className="block w-full h-10 p-2 text-[16px] font-kufi border-[1px] border-[#ccc] transition-all focus:border-primary  focus-visible:border-primary focus-visible:shadow-md focus-visible:outline-none   duration-150"
      onChange={handleChange}
    />
  );
}
