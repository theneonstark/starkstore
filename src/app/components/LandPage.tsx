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
                <Link href={""} className="px-10  py-3 rounded-bl-3xl rounded-tr-3xl bg-gradient-to-r from-cyan-600 to-violet-700 hover:border border-solid border-inherit bg-black">Show Products</Link>
                <Link href={""} className="border border-solid border-inherit px-10 py-3 rounded-bl-3xl rounded-tr-3xl  mx-4 hover:bg-gradient-to-r from-cyan-600 to-violet-700">Show Collections</Link>
                </div>
            </main>
            {/* <section>
                <div className="heading">
                    <h1>Bestsellers of the week</h1>
                    <Link href={""}>Show Prod</Link>
                </div>
            </section> */}
        </section>
        
    )
}