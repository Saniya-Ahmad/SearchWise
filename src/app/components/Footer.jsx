import CountryLookup from "./CountryLookup";
import { FaCopyright } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="absolute bottom-0 text-sm
    text-gray-500 bg-[rgb(242,242,242)] w-full">
        <div className=" px-8 py-3">
            <CountryLookup/>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3
        space-y-7 sm:space-y-0">
            <ul className="flex items-center space-x-6">   
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Advertising</li>
            <li className="hover:underline cursor-pointer">Business</li>
            <li className="hover:underline cursor-pointer">How Search Works</li>
            </ul>
            
            <ul className="flex items-center space-x-6">   
            <li className="hover:underline cursor-pointer">Privacy</li>
            <li className="hover:underline cursor-pointer">Terms</li>
            <li className="hover:underline cursor-pointer">Settings</li>
           
            </ul>
        </div>
        <div className=" flex flex-row justify-center">
        <FaCopyright  className="mt-1 ml-4 mr-2"/> Copyright 2025, Saniya 
        </div>

    </footer>
  )
}
