"use client"
import logo from '../../../public/images/logo_gaz_black_rus.jpg'
import languageIcon from '../../../public/images/language.svg'
import blackColor from '../../../public/images/color/black.svg'
import blueColor from '../../../public/images/color/blue.svg'
import whiteColor from '../../../public/images/color/white.svg'
import wheelsDefault from '../../../public/images/wheels/wheels-1.png';
import wheelsSecond from '../../../public/images/wheels/wheels-2.png';
import carBlackDefault from '../../../public/images/cars/car_black_first_wheel.png'
import carBlueDefault from '../../../public/images/cars/car_blue_first_wheel.png'
import carWhiteDefault from '../../../public/images/cars/car_white_first_wheel.png'
import carBlackNew from '../../../public/images/cars/car_black_second_wheel.png'
import carBlueNew from '../../../public/images/cars/car_blue_second_wheel.png'
import carWhiteNew from '../../../public/images/cars/car_white_second_wheel.png'


import Navbar from "@/components/Navbar";
import React, {useState} from "react";
import Card from "@/components/Card";
import Image from "next/image";
import Modal from "@/components/Modal";

export default function Constructor() {
    /* TODO: Get New images of colors, blue one fits perfectly. Have to do that in photoshop I guess.*/
    const colorProperties =
        {
            black: {
                id: 0,
                option: 'black',
                src: blackColor,
                price: 0,
            },
            blue: {
                id: 1,
                option: 'blue',
                src: blueColor,
                price: 500,
            },
            white:
                {
                    id: 2,
                    option: 'white',
                    src: whiteColor,
                    price: 1000,
                },
        };
    const wheelProperties = {
        default:
            {
                id: 0,
                option: 'default',
                src: wheelsDefault,
                price: 0,
            },
        new:
            {
                id: 1,
                option: 'new',
                src: wheelsSecond,
                price: 200,
            },
        };
    const imagesImported =
        {
        black:
            {
            default:
                carBlackDefault,
            new:
                carBlackNew,
            },
        blue:
            {
            default:
                carBlueDefault,
            new:
                carBlueNew,
            },
        white:
            {
            default:
                carWhiteDefault,
            new:
                carWhiteNew,
            },
    };

    const handleColorChange = (event) => {
        if (selectedColor !== event.currentTarget.value) {
            setSelectedColor(event.currentTarget.value);
            console.log(selectedColor);
        }
    }
    const handleWheelChange = (event) => {
        if (selectedWheel !== event.currentTarget.value) {
            setSelectedWheel(event.currentTarget.value);
        }
    }

    const [selectedColor, setSelectedColor] = useState(Object.keys(colorProperties)[0]);
    const [selectedWheel, setSelectedWheel] = useState(Object.keys(wheelProperties)[0]);

    return (
      <main className="overflow-hidden">
          <Navbar logoImage={logo} languageImage={languageIcon}/>
          <div className="lg:hidden md:block h-[7rem] md:max-w-screen bg-white "></div>
          <section className="grid lg:grid-cols-[2fr_1fr] lg:grid-rows-1 md:grid-cols-1 md:grid-rows-2 ">
              <div className="bg-white lg:max-h-screen lg:min-h-screen lg:w-2fr md:w-1fr overflow-hidden">
                      <div className="lg:min-h-screen flex justify-center items-center">
                        <Image className="" src={imagesImported[selectedColor][selectedWheel]} alt="Car"/>
                      </div>
              </div>
              <div className="bg-white text-black lg:max-h-screen md:1fr shadow-2xl overflow-y-scroll">
                  <div className="overflow-x-hidden overflow-y-scroll lg:first:mt-[10rem] last:mb-[5rem] last:p-[5rem] flex flex-col justify-center items-center">
                      <h3 className="text-2xl whitespace-nowrap">Create Your Own</h3>
                      <h2 className="text-5xl font-bold">Volga</h2>
                      <Card title="Color" content={colorProperties[selectedColor].price === 0 ? "Free" : `${colorProperties[selectedColor].price}$`} optionObject={colorProperties} selectedOption={selectedColor} handle={handleColorChange}/>
                      <Card title="Wheel" content={wheelProperties[selectedWheel].price === 0 ? "Free" : `${wheelProperties[selectedWheel].price}$`} optionObject={wheelProperties} selectedOption={selectedWheel} handle={handleWheelChange}/>
                      <Modal className="mt-10" title="Your Order"
                      color={selectedColor}
                      wheel={selectedWheel}/>
                  </div>

              </div>
          </section>
      </main>
  )
}