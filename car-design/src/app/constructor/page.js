import logo from '../../../public/images/logo_gaz_black_rus.jpg'
import languageIcon from '../../../public/images/language.svg'
import blackColor from '../../../public/images/color/black.svg'
import blueColor from '../../../public/images/color/blue.svg'
import whiteColor from '../../../public/images/color/white.svg'
import carBlack from '../../../public/images/cars/car_black.png'
import carBlue from '../../../public/images/cars/car_blue.png'
import carWhite from '../../../public/images/cars/car_white.png'
import Navbar from "@/components/Navbar";
import React from "react";
import Card from "@/components/Card";
import Image from "next/image";
import Modal from "@/components/Modal";
export default function Constructor() {
    /* TODO: Get New images of colors, blue one fits perfectly. Have to do that in photoshop I guess.*/
    const colorProperties = [
        {
            id: 0,
            option: 'black',
            src: blackColor,
        },
        {
            id: 1,
            option: 'blue',
            src: blueColor,
        },
        {
            id: 2,
            option: 'white',
            src: whiteColor,
        },
        ];
    const wheelProperties = [
        {
            option: 'default',

        },
        {
            option: 'new',
        },
    ];
    const imagesImported = [carBlack, carBlue, carWhite];
    const selectedColor = colorProperties[0];
    const selectedWheel = wheelProperties[0];
  return (
      <main className="overflow-hidden">
          <Navbar logoImage={logo} languageImage={languageIcon}/>
          <section className="grid lg:grid-cols-[2fr_1fr] md:grid-cols-1 md:grid-rows-[1fr_2fr]">
              <div className="bg-white shadow-md max-h-screen min-h-screen w-2fr top-0 overflow-x-hidden overflow-y-hidden">
                      <div className="min-h-screen flex justify-center items-center">
                        <Image className="" src={imagesImported[selectedColor.id]} alt="Car"/>
                      </div>
              </div>
              <div className="bg-white text-black max-h-screen shadow-2xl overflow-y-scroll">
                  <div className="overflow-x-hidden overflow-y-scroll first:mt-[10rem] last:mb-[5rem] last:p-[5rem] flex flex-col justify-center items-center">
                      <h3 className="text-2xl">Create Your Own</h3>
                      <h2 className="text-5xl font-bold">Volga</h2>
                      <Card title="Color" content="Free" optionObject={colorProperties} selectedOption={selectedColor}/>
                      <Card title="Color" content="Free" optionObject={colorProperties} selectedOption={selectedColor}/>

                      <Card title="Color" content="Free" optionObject={colorProperties} selectedOption={selectedColor}/>

                      <Modal className="mt-10" title="Your Order" content="Your order information:
                      lorem ipsum.
                      lorem ipsum.
                      lorem ipsum.
                      lorem ipsum."/>
                      {/*<Card title="Wheels" content="Free" optionObject={wheelProperties} selectedColor={selectedWheel}/>*/}
                  </div>

              </div>
          </section>
      </main>
  )
}