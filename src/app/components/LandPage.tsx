import Image from "next/image"
import Link from "next/link"
export default function LandPage() {
    return (
        <section>
            <main className="px-24 w-6/12 py-12">
                <div className="border-solid  flex rounded-3xl px-2.5 py-2  w-fit gap-2 bg-blue-950 items-center  text-sm">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-900 rounded-3xl p-1 px-2">Featured</span>
                    <h2>New featured collection</h2>
                    <Link href={""} className="text-blue-600">\Gaming.Collector</Link>
                </div>
                <article className="font-bold text-5xl py-2 ">
                    Best <span className="text-transparent">Pro Gaming </span>Accessories
                </article>
                <p className="py-2">
                    Gaming accessories include gear such as headsets, extra controllers, charging stations, memory devices, carrying cases and much more.
                </p>
                <div className="my-4 flex">
                <Link href={""} className="px-10  py-3 rounded-bl-3xl rounded-tr-3xl bg-gradient-to-r from-cyan-600 to-violet-700 hover:ring-1 ring-white ring-inset hover:to-transparent hover:from-transparent">Show Products</Link>
                <Link href={""} className="transition ease-out duration-300 border border-solid border-inherit px-10 py-3 rounded-bl-3xl rounded-tr-3xl  mx-4 hover:bg-gradient-to-r from-cyan-600 to-violet-700 ">Show Collections</Link>
                </div>
            </main>
            <section>
                <div className="heading flex justify-between mx-20">
                    <h1 className="text-4xl font-semibold">Bestsellers of the week</h1>
                    <Link className="px-10  py-3 rounded-bl-3xl rounded-tr-3xl bg-gradient-to-r from-cyan-600 to-violet-700 hover:from-transparent hover:to-violet-700 hover:ring-1 ring-white ring-inset" href={""}>Show Prod</Link>
                </div>
                <div className="cards-items grid grid-flow-col grid-cols-1 auto-cols-max grid-rows-none items-center">
                    <div className="flex flex-col bg-zinc-800 rounded-bl-2xl rounded-tr-2xl p-1">
                        <h1 className="text-3xl font-semibold">Alien Ware Monitor</h1>
                        <p className="text-gray-400">TYPE: Samsung</p>
                        <img src="./app/monitor.png" alt="Monitor Image" />
                        <h3>Size</h3>
                        <select name="" id="" className="bg-transparent outline-none border border-solid rounded">
                            <option value="" className="text-gray-600">1</option>
                            <option value="" className="text-black ">1</option>
                        </select>
                        <div className="product flex items-center justify-between">
                            <h2 className="text-2xl font-bold">12000rs</h2>
                            <Link href={"/"} className="px-4 py-2 rounded-tr-2xl rounded-bl-2xl bg-gradient-to-r from-cyan-600 to-violet-700 hover:from-transparent hover:to-transparent hover:ring-1 ring-white ring-inset">Add to Cart</Link>
                        </div>
                    </div>
                    <div className="flex flex-col bg-zinc-800 rounded-bl-2xl rounded-tr-2xl p-1">
                        <h1 className="text-3xl font-semibold">Alien Ware Monitor</h1>
                        <p className="text-gray-400">TYPE: Samsung</p>
                        <img src="./app/monitor.png" alt="Monitor Image" />
                        <h3>Size</h3>
                        <select name="" id="" className="bg-transparent outline-none border border-solid rounded">
                            <option value="" className="text-gray-600">1</option>
                            <option value="" className="text-black ">1</option>
                        </select>
                        <div className="product flex items-center justify-between">
                            <h2 className="text-2xl font-bold">12000rs</h2>
                            <Link href={"/"} className="px-4 py-2 rounded-tr-2xl rounded-bl-2xl bg-gradient-to-r from-cyan-600 to-violet-700 hover:from-transparent hover:to-transparent hover:ring-1 ring-white ring-inset">Add to Cart</Link>
                        </div>
                    </div>
                    <div className="flex flex-col bg-zinc-800 rounded-bl-2xl rounded-tr-2xl p-1">
                        <h1 className="text-3xl font-semibold">Alien Ware Monitor</h1>
                        <p className="text-gray-400">TYPE: Samsung</p>
                        <img src="./app/monitor.png" alt="Monitor Image" />
                        <h3>Size</h3>
                        <select name="" id="" className="bg-transparent outline-none border border-solid rounded">
                            <option value="" className="text-gray-600">1</option>
                            <option value="" className="text-black ">1</option>
                        </select>
                        <div className="product flex items-center justify-between">
                            <h2 className="text-2xl font-bold">12000rs</h2>
                            <Link href={"/"} className="px-4 py-2 rounded-tr-2xl rounded-bl-2xl bg-gradient-to-r from-cyan-600 to-violet-700 hover:from-transparent hover:to-transparent hover:ring-1 ring-white ring-inset">Add to Cart</Link>
                        </div>
                    </div>
                    <div className="flex flex-col bg-zinc-800 rounded-bl-2xl rounded-tr-2xl p-1">
                        <h1 className="text-3xl font-semibold">Alien Ware Monitor</h1>
                        <p className="text-gray-400">TYPE: Samsung</p>
                        <img src="./app/monitor.png" alt="Monitor Image" />
                        <h3>Size</h3>
                        <select name="" id="" className="bg-transparent outline-none border border-solid rounded">
                            <option value="" className="text-gray-600">1</option>
                            <option value="" className="text-black ">1</option>
                        </select>
                        <div className="product flex items-center justify-between">
                            <h2 className="text-2xl font-bold">12000rs</h2>
                            <Link href={"/"} className="px-4 py-2 rounded-tr-2xl rounded-bl-2xl bg-gradient-to-r from-cyan-600 to-violet-700 hover:from-transparent hover:to-transparent hover:ring-1 ring-white ring-inset">Add to Cart</Link>
                        </div>
                    </div>
                    <div className="flex flex-col bg-zinc-800 rounded-bl-2xl rounded-tr-2xl p-1">
                        <h1 className="text-3xl font-semibold">Alien Ware Monitor</h1>
                        <p className="text-gray-400">TYPE: Samsung</p>
                        <img src="./app/monitor.png" alt="Monitor Image" />
                        <h3>Size</h3>
                        <select name="" id="" className="bg-transparent outline-none border border-solid rounded">
                            <option value="" className="text-gray-600">1</option>
                            <option value="" className="text-black ">1</option>
                        </select>
                        <div className="product flex items-center justify-between">
                            <h2 className="text-2xl font-bold">12000rs</h2>
                            <Link href={"/"} className="px-4 py-2 rounded-tr-2xl rounded-bl-2xl bg-gradient-to-r from-cyan-600 to-violet-700 hover:from-transparent hover:to-transparent hover:ring-1 ring-white ring-inset">Add to Cart</Link>
                        </div>
                    </div>
                    <div className="flex flex-col bg-zinc-800 rounded-bl-2xl rounded-tr-2xl p-1">
                        <h1 className="text-3xl font-semibold">Alien Ware Monitor</h1>
                        <p className="text-gray-400">TYPE: Samsung</p>
                        <img src="./app/monitor.png" alt="Monitor Image" />
                        <h3>Size</h3>
                        <select name="" id="" className="bg-transparent outline-none border border-solid rounded">
                            <option value="" className="text-gray-600">1</option>
                            <option value="" className="text-black ">1</option>
                        </select>
                        <div className="product flex items-center justify-between">
                            <h2 className="text-2xl font-bold">12000rs</h2>
                            <Link href={"/"} className="px-4 py-2 rounded-tr-2xl rounded-bl-2xl bg-gradient-to-r from-cyan-600 to-violet-700 hover:from-transparent hover:to-transparent hover:ring-1 ring-white ring-inset">Add to Cart</Link>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        
    )
}