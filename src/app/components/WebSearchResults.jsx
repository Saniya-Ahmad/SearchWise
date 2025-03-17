import React from 'react'
import Link from 'next/link'
import Parser from 'html-react-parser'
export default function WebSearchResults({results}) {
  return (
    <div className='w-full mx-auto px-3 pb-24 sm:pl-[4%] md:pl-[14%] lg:pl-52'>
        <p className='text-gray-800 text-sm mb-5 mt-3'>
            About {results.searchInformation?.formattedTotalResults} results
        ({results.searchInformation?.formattedSearchTime} seconds)
        </p>
        {results.items?.map((result) =>(
            <div className='mb-8 max-w-xl' key={result.link}> 
                <div className='group flex flex-col'>
            <Link href={result.link}>
                    {result.formattedUrl}
            </Link>
            <Link href={result.link}
            className='group-hover:underline decorate-blue-800 text-xl 
                truncate font-medium text-blue-800'>
                    {result.title}
            </Link>
                </div>
                <p className='text-gray-800'>{Parser(result.htmlSnippet)}</p>
            </div>
          
        ))}
      
    </div>
  )
}
// key is there to uniquely identify using link
//html react parser package for paragraph showing and also bold words that are in result