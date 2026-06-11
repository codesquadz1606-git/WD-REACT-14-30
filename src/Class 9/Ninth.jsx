import { GiHamburgerMenu } from "react-icons/gi";

export default function Ninth() {
    return (
        <>
            {/* background-color : bg-colorname-grade */}
            {/* m for margin p for padding */}
            {/* <h1 className="bg-red-950 text-blue-500 m-10 p-30 text-[10rem]">Tailwind CSS</h1>

            <hr />

            <div className="bg-blue-600 w-3xl h-150"></div>

            <hr />

            <div className="flex justify-center py-30 px-20 gap-6 flex-wrap ">
                <div className="w-[350px] h-[300px] bg-yellow-500 hover:rounded-[50%] transition-all duration-[3s] ease-in-out delay-[2s] "></div>
                <div className="w-[350px] h-[300px] bg-red-500"></div>
                <div className="w-[350px] h-[300px] bg-green-500"></div>
            </div>

            <hr /> */}

            <button className="bg-blue-600 px-7 py-2 m-10 text-white font-bold rounded-2xl hover:bg-black focus:outline-2 focus:outline-offset-20 focus:outline-black active:bg-black">
                Click Here
            </button>

            <div className="hidden 
            w-[300px] h-[400px] bg-red-500
            2xl:hidden lg:block 
            "></div>

            <hr />

            <div className="flex justify-between items-center text-2xl">
                <h1>logo</h1>
                <div className="">
                    <div className="hidden md:block">
                        <ul className="flex gap-7 ">
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                        </ul>
                    </div>
                    <div className="block md:hidden">
                    <GiHamburgerMenu  />
                    </div>
                </div>
            </div>

            <div className="lg:w-[400px] lg:h-[100px] lg:bg-yellow-500 w-[600px] h-[300px] bg-red-500 m-auto "></div>


        </>
    )
}