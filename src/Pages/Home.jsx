import React from 'react'
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../Components/Core/HomePage/HighlightText"
import CTAButton from '../Components/Core/HomePage/Button';
import Banner from "../Accests/Videos/banner.mp4";
import CodeBlocks from '../Components/Core/HomePage/CodeBlocks';
const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      {/* Section 1 */}
      <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
      text-amber-400 justify-between'>
        {/* Top Button */}   
        <Link to={"/signup"}>
          <div className=' group mt-16 p-1 mx-auto rounded-full bg-white font-bold text-richblack-200
          transition-all duration-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] hover:scale-95 w-fit hover:drop-shadow-none'>
            <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
            transition-all duration-200 group-hover:bg-richblack-900'>
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>
      </div>

      {/* heading 1*/}
      <div className='text-center text-4xl font-semibold mt-7 text-white'>
        Empower Your Future with
        <HighlightText text={"Coding Skills"} />
      </div>

      {/* intro */}
      <div className='mt-3 w-[60%] text-center text-lg font-bold text-white'>
        With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
      </div>
            {/* Buttons */}
            <div className='flex flex-row gap-7 mt-8'>
              
                <CTAButton active={true} linkto={"/signup"}> 
                    Learn More
                </CTAButton>
              

                <CTAButton active={false} linkto={"/login"}> 
                    Book a Demo
                </CTAButton>
            </div>

            {/* Banner or video */}
            <div className='mx-5 my-10 shadow-[10px_-5px_50px_-5px] shadow-blue-200'>
                <video className=' w-full max-w-[1300px] shadow-[15px_15px_rgba(255,255,255)]'
                muted 
                loop
                autoPlay
                >
                <source  src={Banner} type="video/mp4" />
                </video>
            </div>

            {/* Section 1 */}

               <div>
                <CodeBlocks 
                    position={"lg:flex-row"}
                    heading={
                        <div className='text-white text-4xl font-semibold'>
                            Unlock your
                            <HighlightText text={"coding potential "}/>
                            with our online courses.
                        </div>
                    }
                    subheading = {
                        "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                    }
                    ctabtn1={
                        {
                            btnText: "Try it yourself",
                            linkto: "/signup",
                            active: true,
                        }
                    }
                    ctabtn2={
                        {
                            btnText: "Learn More",
                            linkto: "/login",
                            active: false,
                        }
                    }

                    codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a></nav>\n</body>`}
                    // codeColor={"text-"}
                />
            </div>
    </div>
  )
}

export default Home;
 