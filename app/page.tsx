"use client";

import Image from "next/image";
import {
   Download,
   Github,
   Mail,
   Phone,
   MapPin,
   ArrowRight,
   Linkedin,
   Star,
   ChevronLeft,
   ChevronRight,
} from "lucide-react";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
   CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useMobile } from "@/hooks/use-mobile";

type Review = {
   id: number;
   name: string;
   company: string;
   content: string;
   rating: number;
};

export default function Home() {
   const isMobile = useMobile();
   const [reviews, setReviews] = useState<Review[]>([]);
   const [currentReview, setCurrentReview] = useState(0);
   const [slideDirection, setSlideDirection] = useState("right");

   const handleReviewChange = (direction: "next" | "prev") => {
      if (reviews.length <= 1) return;

      setSlideDirection(direction === "next" ? "right" : "left");

      if (direction === "next") {
         setCurrentReview((prev) => (prev + 1) % reviews.length);
      } else {
         setCurrentReview(
            (prev) => (prev - 1 + reviews.length) % reviews.length
         );
      }
   };

   useEffect(() => {
      const reviewsData = [
         {
            id: 1,
            name: "Hm Ryan",
            company: "No Company",
            content:
               "I would like to extend my heartfelt thanks to Stefan for his invaluable help with my son's computer science project. He was exceptionally friendly, responded incredibly quickly, and generously dedicated a great deal of his time. His support made a real difference and is truly appreciated.",
            rating: 5,
         },
      ];

      setReviews(reviewsData);
   }, []);

   // Reset current review index when reviews change
   useEffect(() => {
      if (reviews.length > 0 && currentReview >= reviews.length) {
         setCurrentReview(0);
      }
   }, [reviews, currentReview]);

   const container = {
      hidden: { opacity: 0 },
      show: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
         },
      },
   };

   const item = {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 },
   };

   return (
      <main className='min-h-screen bg-white dark:bg-[#0f172a]'>
         {/* Hero Section */}
         <section
            id='home'
            className='relative min-h-screen flex flex-col items-center justify-center px-6 md:px-8 pt-20 md:pt-0'
         >
            <div className='absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#020617] z-0' />

            <div className='container max-w-6xl mx-auto z-10'>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                  <motion.div
                     className='order-2 md:order-1'
                     initial={{ opacity: 0, x: -50 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.8 }}
                  >
                     <motion.h1
                        className='text-4xl md:text-6xl font-bold tracking-tight mb-6 gradient-text'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                     >
                        Hîncu Ștefan
                     </motion.h1>
                     <motion.h2
                        className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                     >
                        Full Stack Developer & Computer Science Student
                     </motion.h2>
                     <motion.p
                        className='text-gray-600 dark:text-gray-300 mb-10 max-w-md text-lg'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                     >
                        Computer Science student passionate about designing and
                        building end-to-end full-stack applications—crafting
                        intuitive user interfaces, implementing scalable backend
                        systems, and tackling complex problems.
                     </motion.p>
                     <motion.div
                        className='flex flex-wrap gap-3 mb-10'
                        variants={container}
                        initial='hidden'
                        animate='show'
                     >
                        {/* <motion.div variants={item}>
                           <Badge className='bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-4 py-1 rounded-full text-sm dark:badge-glow'>
                              SDE Intern @ Amazon
                           </Badge>
                        </motion.div> */}
                     </motion.div>
                     <motion.div
                        className='flex gap-4'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                     >
                        <motion.button
                           className='inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 h-10 px-6 py-2 dark:button-glow'
                           onClick={() =>
                              document
                                 .getElementById("skills")
                                 ?.scrollIntoView({ behavior: "smooth" })
                           }
                           whileHover={{ scale: 1 }}
                           whileTap={{ scale: 1 }}
                        >
                           View Skills
                        </motion.button>
                        <motion.a
                           href='/resume.pdf'
                           download
                           className='inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 h-10 px-6 py-2'
                           whileHover={{ scale: 1 }}
                           whileTap={{ scale: 1 }}
                        >
                           <Download className='mr-2 h-4 w-4' />
                           Resume
                        </motion.a>
                     </motion.div>
                  </motion.div>
                  <motion.div
                     className='order-1 md:order-2 flex justify-center md:justify-end'
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.8 }}
                  >
                     <motion.div
                        className='relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-[#1e293b] shadow-xl dark:shadow-[0_0_30px_rgba(59,130,246,0.15)]'
                        transition={{
                           duration: 6,
                           repeat: Number.POSITIVE_INFINITY,
                           repeatType: "reverse",
                        }}
                     >
                        <Image
                           src='/profile-pic.jpeg'
                           alt='Hîncu Ștefan'
                           fill
                           className='object-cover'
                           priority
                        />
                     </motion.div>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* About Section */}
         <section
            id='about'
            className='py-24 bg-gray-50 dark:bg-[#111827] reveal'
         >
            <div className='container max-w-6xl mx-auto px-6 md:px-8'>
               <motion.h2
                  className='text-3xl font-bold mb-16 text-center gradient-text'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
               >
                  About Me
               </motion.h2>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
                  <motion.div
                     initial={{ opacity: 0, x: -30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                  >
                     <p className='text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed dark:text-shadow'>
                        I'm a Computer Science student at the Technical
                        University of Cluj-Napoca with a focus on full-stack
                        development—designing server-side APIs and crafting rich
                        user experiences.
                     </p>
                     <p className='text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed dark:text-shadow'>
                        My journey in tech started with building scalable
                        backend services using Express, then expanded to
                        creating dynamic frontends with React and Next.js. I’m
                        always eager to learn new tools and approaches to solve
                        complex problems end-to-end.
                     </p>
                  </motion.div>
                  <motion.div
                     initial={{ opacity: 0, x: 30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.4 }}
                  >
                     <Card className='border-0 shadow-lg rounded-2xl overflow-hidden hover-3d interactive-card dark:card-highlight'>
                        <CardHeader className='pb-2'>
                           <CardTitle className='text-xl font-medium'>
                              Contact Information
                           </CardTitle>
                           <CardDescription>
                              Feel free to reach out
                           </CardDescription>
                        </CardHeader>
                        <CardContent>
                           <div className='space-y-6 py-2'>
                              <motion.div
                                 className='flex items-center'
                                 whileHover={{ x: 5 }}
                                 transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                 }}
                              >
                                 <Mail className='h-5 w-5 mr-4 text-gray-500 dark:text-gray-400' />
                                 <a
                                    href='mailto:hincustefan02@gmail.com'
                                    className='text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
                                 >
                                    hincustefan02@gmail.com
                                 </a>
                              </motion.div>
                              <motion.div
                                 className='flex items-center'
                                 whileHover={{ x: 5 }}
                                 transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                 }}
                              >
                                 <Phone className='h-5 w-5 mr-4 text-gray-500 dark:text-gray-400' />
                                 <a
                                    href='tel:+40756239643'
                                    className='text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
                                 >
                                    (+40) 756 239 643
                                 </a>
                              </motion.div>
                              <motion.div
                                 className='flex items-center'
                                 whileHover={{ x: 5 }}
                                 transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                 }}
                              >
                                 <MapPin className='h-5 w-5 mr-4 text-gray-500 dark:text-gray-400' />
                                 <span className='text-gray-600 dark:text-gray-300'>
                                    Cluj-Napoca, Romania
                                 </span>
                              </motion.div>
                              <motion.div
                                 className='flex items-center'
                                 whileHover={{ x: 5 }}
                                 transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                 }}
                              >
                                 <Github className='h-5 w-5 mr-4 text-gray-500 dark:text-gray-400' />
                                 <a
                                    href='https://github.com/hnqhnqhnq'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
                                 >
                                    GitHub Profile
                                 </a>
                              </motion.div>
                              <motion.div
                                 className='flex items-center'
                                 whileHover={{ x: 5 }}
                                 transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                 }}
                              >
                                 <Linkedin className='h-5 w-5 mr-4 text-gray-500 dark:text-gray-400' />
                                 <a
                                    href='https://www.linkedin.com/in/ştefan-hîncu-46508a258/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
                                 >
                                    LinkedIn Profile
                                 </a>
                              </motion.div>
                           </div>
                        </CardContent>
                     </Card>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Work Experience Section
         <section
            id='work-experience'
            className='py-24 dark:bg-[#0f172a] reveal'
         >
            <div className='container max-w-6xl mx-auto px-6 md:px-8'>
               <motion.h2
                  className='text-3xl font-bold mb-16 text-center gradient-text'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
               >
                  Work Experience
               </motion.h2>
               <div className='max-w-3xl mx-auto'>
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                  >
                     <Card className='border-0 shadow-lg rounded-2xl overflow-hidden interactive-card dark:card-highlight'>
                        <CardHeader>
                           <div className='flex justify-between items-start'>
                              <div>
                                 <CardTitle className='text-xl font-medium'>
                                    SDE Intern @ Amazon, Iași
                                 </CardTitle>
                                 <CardDescription>
                                    Software Development Engineer Intern
                                 </CardDescription>
                              </div>
                              <Badge className='bg-black dark:bg-[#3b82f6] text-white rounded-full px-4 py-1 dark:badge-glow'>
                                 Present
                              </Badge>
                           </div>
                        </CardHeader>
                        <CardContent>
                           <ul className='text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed'>
                              <li>
                                 Software Development Engineer Intern at Amazon,
                                 Iași
                              </li>
                           </ul>
                        </CardContent>
                     </Card>
                  </motion.div>
               </div>
            </div>
         </section> */}

         {/* Education Section */}
         <section id='education' className='py-24 dark:bg-[#0f172a] reveal'>
            <div className='container max-w-6xl mx-auto px-6 md:px-8'>
               <motion.h2
                  className='text-3xl font-bold mb-16 text-center gradient-text'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
               >
                  Education
               </motion.h2>
               <div className='max-w-3xl mx-auto'>
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                  >
                     <Card className='border-0 shadow-lg rounded-2xl overflow-hidden interactive-card dark:card-highlight'>
                        <CardHeader>
                           <div className='flex justify-between items-start'>
                              <div>
                                 <CardTitle className='text-xl font-medium'>
                                    Technical University of Cluj-Napoca
                                 </CardTitle>
                                 <CardDescription>
                                    Computer Science and Information Technology
                                 </CardDescription>
                              </div>
                              <Badge className='bg-black dark:bg-[#3b82f6] text-white rounded-full px-4 py-1 dark:badge-glow'>
                                 2022 - 2026
                              </Badge>
                           </div>
                        </CardHeader>
                        <CardContent>
                           <p className='text-gray-600 dark:text-gray-300 mb-6 text-lg dark:text-shadow'>
                              Undergraduate program focusing on computer science
                              fundamentals and practical applications.
                           </p>
                           <p className='text-gray-600 dark:text-gray-300 font-medium mb-3'>
                              Relevant Courses:
                           </p>
                           <motion.ul
                              className='grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600 dark:text-gray-300'
                              variants={container}
                              initial='hidden'
                              whileInView='show'
                              viewport={{ once: true }}
                           >
                              <motion.li
                                 className='flex items-center'
                                 variants={item}
                              >
                                 <span className='h-1.5 w-1.5 rounded-full bg-black dark:bg-[#3b82f6] mr-2'></span>
                                 Data Structures and Algorithms
                              </motion.li>
                              <motion.li
                                 className='flex items-center'
                                 variants={item}
                              >
                                 <span className='h-1.5 w-1.5 rounded-full bg-black dark:bg-[#3b82f6] mr-2'></span>
                                 Object-Oriented Programming
                              </motion.li>
                              <motion.li
                                 className='flex items-center'
                                 variants={item}
                              >
                                 <span className='h-1.5 w-1.5 rounded-full bg-black dark:bg-[#3b82f6] mr-2'></span>
                                 Fundamental Algorithms
                              </motion.li>
                              <motion.li
                                 className='flex items-center'
                                 variants={item}
                              >
                                 <span className='h-1.5 w-1.5 rounded-full bg-black dark:bg-[#3b82f6] mr-2'></span>
                                 Databases
                              </motion.li>
                              <motion.li
                                 className='flex items-center'
                                 variants={item}
                              >
                                 <span className='h-1.5 w-1.5 rounded-full bg-black dark:bg-[#3b82f6] mr-2'></span>
                                 Fundamental Programming Techniques
                              </motion.li>
                              <motion.li
                                 className='flex items-center'
                                 variants={item}
                              >
                                 <span className='h-1.5 w-1.5 rounded-full bg-black dark:bg-[#3b82f6] mr-2'></span>
                                 Operating Systems
                              </motion.li>
                           </motion.ul>
                        </CardContent>
                     </Card>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Skills Section */}
         <section
            id='skills'
            className='py-24 bg-gray-50 dark:bg-[#111827] reveal'
         >
            <div className='container max-w-6xl mx-auto px-6 md:px-8'>
               <motion.h2
                  className='text-3xl font-bold mb-16 text-center gradient-text'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
               >
                  Skills
               </motion.h2>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.1 }}
                     whileHover={{ y: -10 }}
                  >
                     <Card className='border-0 shadow-lg rounded-2xl overflow-hidden interactive-card dark:card-highlight'>
                        <CardHeader>
                           <CardTitle className='text-center text-xl font-medium'>
                              Programming Languages
                           </CardTitle>
                        </CardHeader>
                        <CardContent className='text-center'>
                           <div className='flex flex-wrap justify-center gap-2'>
                              <motion.div
                                 whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.95 }}
                              >
                                 <Badge className='bg-black dark:bg-[#3b82f6] text-white hover:bg-gray-800 dark:hover:bg-[#2563eb] rounded-full px-4 py-1 dark:badge-glow'>
                                    JavaScript
                                 </Badge>
                              </motion.div>
                              <motion.div
                                 whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.95 }}
                              >
                                 <Badge className='bg-black dark:bg-[#3b82f6] text-white hover:bg-gray-800 dark:hover:bg-[#2563eb] rounded-full px-4 py-1 dark:badge-glow'>
                                    Python
                                 </Badge>
                              </motion.div>
                              <motion.div
                                 whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.95 }}
                              >
                                 <Badge className='bg-black dark:bg-[#3b82f6] text-white hover:bg-gray-800 dark:hover:bg-[#2563eb] rounded-full px-4 py-1 dark:badge-glow'>
                                    Java
                                 </Badge>
                              </motion.div>
                           </div>
                        </CardContent>
                     </Card>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                     whileHover={{ y: -10 }}
                  >
                     <Card className='border-0 shadow-lg rounded-2xl overflow-hidden interactive-card dark:card-highlight'>
                        <CardHeader>
                           <CardTitle className='text-center text-xl font-medium'>
                              Backend Development
                           </CardTitle>
                        </CardHeader>
                        <CardContent className='text-center'>
                           <div className='flex flex-wrap justify-center gap-2'>
                              <motion.div
                                 whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.95 }}
                              >
                                 <Badge className='bg-black dark:bg-[#3b82f6] text-white hover:bg-gray-800 dark:hover:bg-[#2563eb] rounded-full px-4 py-1 dark:badge-glow'>
                                    Node.js
                                 </Badge>
                              </motion.div>
                              <motion.div
                                 whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.95 }}
                              >
                                 <Badge className='bg-black dark:bg-[#3b82f6] text-white hover:bg-gray-800 dark:hover:bg-[#2563eb] rounded-full px-4 py-1 dark:badge-glow'>
                                    Express.js
                                 </Badge>
                              </motion.div>
                              <motion.div
                                 whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.95 }}
                              >
                                 <Badge className='bg-black dark:bg-[#3b82f6] text-white hover:bg-gray-800 dark:hover:bg-[#2563eb] rounded-full px-4 py-1 dark:badge-glow'>
                                    REST APIs
                                 </Badge>
                              </motion.div>
                           </div>
                        </CardContent>
                     </Card>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                     whileHover={{ y: -10 }}
                  >
                     <Card className='border-0 shadow-lg rounded-2xl overflow-hidden interactive-card dark:card-highlight'>
                        <CardHeader>
                           <CardTitle className='text-center text-xl font-medium'>
                              Frontend Development
                           </CardTitle>
                        </CardHeader>
                        <CardContent className='text-center'>
                           <div className='flex flex-wrap justify-center gap-2'>
                              <motion.div
                                 whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.95 }}
                              >
                                 <Badge className='bg-black dark:bg-[#3b82f6] text-white hover:bg-gray-800 dark:hover:bg-[#2563eb] rounded-full px-4 py-1 dark:badge-glow'>
                                    React.js
                                 </Badge>
                              </motion.div>
                              <motion.div
                                 whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.95 }}
                              >
                                 <Badge className='bg-black dark:bg-[#3b82f6] text-white hover:bg-gray-800 dark:hover:bg-[#2563eb] rounded-full px-4 py-1 dark:badge-glow'>
                                    Next.js
                                 </Badge>
                              </motion.div>
                              <motion.div
                                 whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.95 }}
                              >
                                 <Badge className='bg-black dark:bg-[#3b82f6] text-white hover:bg-gray-800 dark:hover:bg-[#2563eb] rounded-full px-4 py-1 dark:badge-glow'>
                                    CSS
                                 </Badge>
                              </motion.div>
                              <motion.div
                                 whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.95 }}
                              >
                                 <Badge className='bg-black dark:bg-[#3b82f6] text-white hover:bg-gray-800 dark:hover:bg-[#2563eb] rounded-full px-4 py-1 dark:badge-glow'>
                                    Tailwind
                                 </Badge>
                              </motion.div>
                           </div>
                        </CardContent>
                     </Card>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.3 }}
                     whileHover={{ y: -10 }}
                  >
                     <Card className='border-0 shadow-lg rounded-2xl overflow-hidden interactive-card dark:card-highlight'>
                        <CardHeader>
                           <CardTitle className='text-center text-xl font-medium'>
                              Databases
                           </CardTitle>
                        </CardHeader>
                        <CardContent className='text-center'>
                           <div className='flex flex-wrap justify-center gap-2'>
                              <motion.div
                                 whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.95 }}
                              >
                                 <Badge className='bg-black dark:bg-[#3b82f6] text-white hover:bg-gray-800 dark:hover:bg-[#2563eb] rounded-full px-4 py-1 dark:badge-glow'>
                                    MySQL
                                 </Badge>
                              </motion.div>
                              <motion.div
                                 whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.95 }}
                              >
                                 <Badge className='bg-black dark:bg-[#3b82f6] text-white hover:bg-gray-800 dark:hover:bg-[#2563eb] rounded-full px-4 py-1 dark:badge-glow'>
                                    MongoDB
                                 </Badge>
                              </motion.div>
                           </div>
                        </CardContent>
                     </Card>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Reviews Section */}
         <section id='reviews' className='py-24 dark:bg-[#0f172a] reveal'>
            <div className='container max-w-6xl mx-auto px-6 md:px-8'>
               <motion.h2
                  className='text-3xl font-bold mb-16 text-center gradient-text'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
               >
                  Reviews from Clients
               </motion.h2>

               {reviews.length > 0 ? (
                  <div className='max-w-3xl mx-auto'>
                     <div className='relative'>
                        {/* Review counter */}
                        <div className='absolute -top-10 right-0 text-sm text-gray-500 dark:text-gray-400'>
                           {currentReview + 1} of {reviews.length}
                        </div>

                        {/* Reviews slider */}
                        <div className='overflow-hidden relative'>
                           <motion.div
                              className='w-full'
                              key={currentReview}
                              initial={{
                                 opacity: 0,
                                 x: slideDirection === "right" ? 100 : -100,
                              }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{
                                 opacity: 0,
                                 x: slideDirection === "right" ? -100 : 100,
                              }}
                              transition={{ duration: 0.5 }}
                           >
                              <Card className='border-0 rounded-2xl overflow-hidden dark:bg-[#0f172a]'>
                                 <CardHeader className='pb-2'>
                                    <CardTitle className='text-xl font-medium'>
                                       {reviews[currentReview].name}
                                    </CardTitle>
                                    <CardDescription>
                                       {reviews[currentReview].company}
                                    </CardDescription>
                                 </CardHeader>
                                 <CardContent>
                                    <p className='text-gray-600 dark:text-gray-300 mb-4 text-lg italic'>
                                       "{reviews[currentReview].content}"
                                    </p>
                                 </CardContent>
                                 <CardFooter>
                                    <div className='flex'>
                                       {[
                                          ...Array(
                                             reviews[currentReview].rating
                                          ),
                                       ].map((_, i) => (
                                          <Star
                                             key={i}
                                             className='h-5 w-5 fill-yellow-400 text-yellow-400'
                                          />
                                       ))}
                                    </div>
                                 </CardFooter>
                              </Card>
                           </motion.div>
                        </div>

                        {/* Navigation arrows */}
                        <div className='flex justify-between mt-6'>
                           <motion.button
                              onClick={() => handleReviewChange("prev")}
                              className='p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              disabled={reviews.length <= 1}
                           >
                              <ChevronLeft className='h-6 w-6' />
                           </motion.button>
                           <motion.button
                              onClick={() => handleReviewChange("next")}
                              className='p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              disabled={reviews.length <= 1}
                           >
                              <ChevronRight className='h-6 w-6' />
                           </motion.button>
                        </div>
                     </div>
                  </div>
               ) : (
                  <p className='text-center text-gray-500 dark:text-gray-400'>
                     No reviews available at the moment.
                  </p>
               )}
            </div>
         </section>

         {/* Contact Section */}
         <section
            id='contact'
            className='py-24 bg-gray-50 dark:bg-[#111827] reveal'
         >
            <div className='container max-w-6xl mx-auto px-6 md:px-8'>
               <motion.h2
                  className='text-3xl font-bold mb-16 text-center gradient-text'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
               >
                  Get In Touch
               </motion.h2>
               <div className='max-w-md mx-auto text-center'>
                  <motion.p
                     className='text-gray-600 dark:text-gray-300 mb-10 text-lg leading-relaxed dark:text-shadow'
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                  >
                     I'm currently looking for new opportunities. Whether you
                     have a question or just want to say hi, I'll try my best to
                     get back to you!
                  </motion.p>
                  <motion.a
                     href='mailto:hincustefan02@gmail.com'
                     className='inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black dark:bg-[#3b82f6] text-white hover:bg-gray-800 dark:hover:bg-[#2563eb] h-12 px-8 py-2 dark:button-glow'
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.4 }}
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                  >
                     <Mail className='mr-2 h-5 w-5' />
                     Contact Me
                  </motion.a>
               </div>
            </div>
         </section>

         {/* Footer */}
         <footer className='py-10 bg-gray-50 dark:bg-[#111827] border-t border-gray-200/20 dark:border-gray-800/20'>
            <div className='container max-w-6xl mx-auto px-6 md:px-8 text-center'>
               <p className='text-gray-600 dark:text-gray-400'>
                  © {new Date().getFullYear()} Hîncu Ștefan. All rights
                  reserved.
               </p>
            </div>
         </footer>
      </main>
   );
}
