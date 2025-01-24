import Logo from "./images/i-love-nagar-logo.png";

export default function Navbar(){
    return(
        <>
            <div className="w-[100%] h-[70px] bg-yellow-100 text-slate-950 flex justify-between text-xl font-bold cursor-pointer">
                <div className="pt-[20px] pl-[20px]">
                    <img src={Logo} className="w-[90px] h-auto "></img>
                </div>
                <div>
                    <ul className="flex gap-20 mt-[20px] mr-[50px]">
                        <li className="hover:text-slate-600">Home</li>
                        <li className="hover:text-slate-600">About</li>
                        <li className="hover:text-slate-600">Contact</li>
                    </ul>
                </div>
            </div>   
        </>
    )
}