import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Hero_img from "/public/assets/Images/header.webp";
import Featured1_img from "/public/assets/Images/Featured1.webp";
import Featured2_img from "/public/assets/Images/Featured2.webp";
import Featured3_img from "/public/assets/Images/Featured3.webp";
import Featured4_img from "/public/assets/Images/Featured4.webp";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="md:flex justify-between mt-16 md:mt-32 mx-6 lg:mx-32">
      {/* Left side */}
      <div className="max-w-lg">
        <span className="bg-[#e1edff] text-[#571eff] font-bold px-6 py-3 rounded-md ">Sale 70%</span>
        <h1 className="mt-8 md:mt-12 text-3xl md:text-5xl font-extrabold">An Industrial Take on Streetwear</h1>
        <p className="text-md mt-8 md:mt-16">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <button className="mt-10 flex shrink-0 bg-black text-white font-medium gap-5 px-7 md:px-14 py-3 md:py-6 border-2 border-gray-500">
          <ShoppingCart size={24}/>
          <span >Start Shopping</span>
        </button>
        {/* Brands */}
        <div className="flex md:justify-between mt-16 md:mt-28 space-x-8">
        <Image src={Featured1_img} alt="Featured"/>
        <Image src={Featured2_img} alt="Featured"/>
        <Image src={Featured3_img} alt="Featured"/>
        <Image src={Featured4_img} alt="Featured"/>
        </div>
      </div>
      {/* Right side */}
      <div className="rounded-full shrink-0 bg-[#ffece3] mt-18 md:mr-28">
        <Image
          src={Hero_img}
          alt="hero_img"
          width={650}
          height={650}
          className="mt-8 md:-mt-5"
        />
      </div>
    </div>



    // <div className="wrapper flex flex-col gap-y-10 md:flex-row">
    //   {/* Left Content */}
    //   <div className="flex-1 mt-8">
    //     <Badge className="text-lg bg-blue-100 text-blue-600 px-6">
    //       Sale 70%
    //     </Badge>
    //     <h1 className="scroll-m-20 mt-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
    //       An Industrial Take on Streetwear
    //     </h1>
    //     <p className="mt-5">
    //       Anyone can beat you but no one can beat your outfit as long as you
    //       wear Dine outfits.
    //     </p>
    //     <Button>
    //       <ShoppingCart />
    //     </Button>
    //   </div>

    //   {/* Right Content */}
    //   <div className="flex-1">
    //     <Image
    //       src={Hero_img}
    //       alt="Hero image"
    //       width={650}
    //       height={650}
    //       className="-mt-5"
    //     />
    //   </div>
    // </div>
  );
};

export default Hero;
