"use client"
import Link from "next/link"
import { useEffect } from "react"
export default  function Page(){
useEffect(()=>{
    const run = () => {
      let show  = 0;
      const nav_container = document.querySelectorAll('nav > div');
      nav_container.forEach((elem,indx)=>{
        elem.addEventListener('click',(e)=>{
          const dropdown = document.querySelectorAll('nav > div div');
          dropdown.forEach((elemy,idx)=>{ 
            elemy.classList.add('visible');
            elemy.classList.remove('invisible');
            show++;
            if(show >= 2){
                  elemy.classList.add('invisible');
                  elemy.classList.remove('visible');
                  show = 0;
                }
                console.log(show);
                
            })
          // console.log(dropdown)
          let a = e.target;
          // console.log(a)

        });
      })
    }
    run();
  })
  return(
        <main>
            <header className="relative top-0 left-0 h-20 flex justify-between  items-center px-20 font-bold text-sm">
          <nav className="flex">
            <div className="mx-4 flex items-center cursor-pointer">
              Gaming Accessories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                strokeWidth={3.2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              <div className="menu_content flex w-full h-0 left-0 top-full invisible justify-between px-24 py-6 bg-white absolute text-red-600">
              <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
              </ul>
              <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
              </ul>
              <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
              </ul>
              <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
              </ul>
            </div>
            </div>
            <div className="mx-4 flex items-center">
              Pages
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                strokeWidth={3.2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              
            </div>
            <div className="mx-4 flex items-center">
              Blog
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                strokeWidth={3.2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </nav>
          <Link href={"/"} className="text-3xl -ml-20">
            Gaming
          </Link>
          <div className="flex">
            <Link className="px-9" href={"/profile"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </Link>
            <Link className="px-5" href={"/cart"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </Link>
          </div>
        </header>
        <hr />
        <section className="h-20 flex justify-between  items-center px-20 font-bold text-sm">
          <Link href={"/"} className="mx-4">
            New Accessories -30% Off{" "}
            <span className="underline">
              <Link href={""}>More</Link>
            </span>
          </Link>
          <div className="searchInput bg-transparent border border-solid border-inherit  pr-5 py-2.5 rounded-bl-3xl rounded-tr-3xl flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-3 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              className="bg-transparent outline-none w-60"
              placeholder="Search Product..."
            />
            <svg
            onClick={()=>{
              const inp =document.querySelector('input');
              inp.value =null;
            }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <span className="underline px-4">
            <Link href={""}>New Collections</Link>
          </span>
        </section>
        <hr />

        </main>
    )
}