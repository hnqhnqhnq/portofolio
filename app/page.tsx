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
} from "lucide-react";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Home() {
   const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
   const [activeProject, setActiveProject] = useState<number | null>(null);
   const projectRefs = [
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
   ];

   const handleProjectHover = (index: number) => {
      setActiveProject(index);
   };

   const handleProjectLeave = () => {
      setActiveProject(null);
   };

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
            className='relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 md:px-8'
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
                        Backend Developer
                     </motion.h2>
                     <motion.p
                        className='text-gray-600 dark:text-gray-300 mb-10 max-w-md text-lg'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                     >
                        Computer Science student with a passion for building
                        robust backend systems and solving complex problems.
                     </motion.p>
                     <motion.div
                        className='flex flex-wrap gap-3 mb-10'
                        variants={container}
                        initial='hidden'
                        animate='show'
                     >
                        <motion.div variants={item}>
                           <Badge className='bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-4 py-1 rounded-full text-xs dark:badge-glow'>
                              Backend Enthusiast
                           </Badge>
                        </motion.div>
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
                                 .getElementById("projects")
                                 ?.scrollIntoView({ behavior: "smooth" })
                           }
                           whileHover={{ scale: 1.05 }}
                           whileTap={{ scale: 0.95 }}
                        >
                           View Projects
                        </motion.button>
                        <motion.a
                           href='/Hincu-Stefan-Resume.pdf'
                           download
                           className='inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 h-10 px-6 py-2'
                           whileHover={{ scale: 1.05 }}
                           whileTap={{ scale: 0.95 }}
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
                        animate={{ y: [0, -10, 0] }}
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

            {/* <motion.div
               className='absolute bottom-10 left-0 right-0 flex justify-center'
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.5, delay: 1 }}
            >
               <div className='animate-bounce'>
                  <ArrowRight className='h-6 w-6 rotate-90 text-gray-400' />
               </div>
            </motion.div> */}
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
                        University of Cluj-Napoca with a focus on backend
                        development and server-side technologies.
                     </p>
                     <p className='text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed dark:text-shadow'>
                        While I specialize in Node.js, Express, MongoDB, and
                        RESTful API design, my strong foundation in backend
                        development enables me to quickly learn and adapt to any
                        programming language or framework required for the
                        project. For me, the language is simply a tool to
                        deliver robust, scalable solutions.
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

         {/* Projects Section */}
         <section
            id='projects'
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
                  Projects
               </motion.h2>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                  <motion.div
                     ref={projectRefs[0]}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                     onHoverStart={() => handleProjectHover(0)}
                     onHoverEnd={handleProjectLeave}
                  >
                     <Card className='h-full border-0 shadow-lg rounded-2xl overflow-hidden interactive-card dark:card-highlight'>
                        <CardHeader className='pb-2'>
                           <CardTitle className='text-xl font-medium'>
                              Habit Tracker
                           </CardTitle>
                           <CardDescription>
                              Cross-Platform Mobile Application
                           </CardDescription>
                        </CardHeader>
                        <CardContent>
                           <p className='text-gray-600 dark:text-gray-300 mb-6 text-lg'>
                              <span className='font-semibold'>
                                 Led the backend development
                              </span>{" "}
                              of a mobile application to help users track and
                              improve their daily habits.
                           </p>
                           <ul className='space-y-3 text-gray-600 dark:text-gray-300 mb-6'>
                              <motion.li
                                 className='flex items-start'
                                 initial={{ opacity: 0, x: -10 }}
                                 animate={
                                    isMobile
                                       ? { opacity: 1, x: 0 }
                                       : activeProject === 0
                                       ? { opacity: 1, x: 0 }
                                       : {}
                                 }
                                 transition={{ duration: 0.3, delay: 0.1 }}
                              >
                                 <span className='h-1.5 w-1.5 rounded-full bg-black dark:bg-[#3b82f6] mt-2 mr-2 flex-shrink-0'></span>
                                 <span>
                                    Built habit creation, update and delete
                                    features, simplifying habit tracking for
                                    users.
                                 </span>
                              </motion.li>
                              <motion.li
                                 className='flex items-start'
                                 initial={{ opacity: 0, x: -10 }}
                                 animate={
                                    isMobile
                                       ? { opacity: 1, x: 0 }
                                       : activeProject === 0
                                       ? { opacity: 1, x: 0 }
                                       : {}
                                 }
                                 transition={{ duration: 0.3, delay: 0.2 }}
                              >
                                 <span className='h-1.5 w-1.5 rounded-full bg-black dark:bg-[#3b82f6] mt-2 mr-2 flex-shrink-0'></span>
                                 <span>
                                    Used Moment.js to automate daily stats and
                                    streaks, giving users instant feedback and
                                    motivation.
                                 </span>
                              </motion.li>
                              <motion.li
                                 className='flex items-start'
                                 initial={{ opacity: 0, x: -10 }}
                                 animate={
                                    isMobile
                                       ? { opacity: 1, x: 0 }
                                       : activeProject === 0
                                       ? { opacity: 1, x: 0 }
                                       : {}
                                 }
                                 transition={{ duration: 0.3, delay: 0.3 }}
                              >
                                 <span className='h-1.5 w-1.5 rounded-full bg-black dark:bg-[#3b82f6] mt-2 mr-2 flex-shrink-0'></span>
                                 <span>
                                    Integrated JWT for secure logins, ensuring
                                    smooth and protected multi-device access for
                                    users.
                                 </span>
                              </motion.li>
                              <motion.li
                                 className='flex items-start'
                                 initial={{ opacity: 0, x: -10 }}
                                 animate={
                                    isMobile
                                       ? { opacity: 1, x: 0 }
                                       : activeProject === 0
                                       ? { opacity: 1, x: 0 }
                                       : {}
                                 }
                                 transition={{ duration: 0.3, delay: 0.4 }}
                              >
                                 <span className='h-1.5 w-1.5 rounded-full bg-black dark:bg-[#3b82f6] mt-2 mr-2 flex-shrink-0'></span>
                                 <span>
                                    Deployed the REST API on Firebase for
                                    scalable performance, providing user data
                                    protection and smooth operation as the app
                                    grows.
                                 </span>
                              </motion.li>
                           </ul>
                           <div className='flex flex-wrap gap-2 mt-4'>
                              <Badge
                                 variant='outline'
                                 className='border-gray-300 dark:border-gray-600 rounded-full px-3 py-0.5 dark:text-gray-300'
                              >
                                 Node.js
                              </Badge>
                              <Badge
                                 variant='outline'
                                 className='border-gray-300 dark:border-gray-600 rounded-full px-3 py-0.5 dark:text-gray-300'
                              >
                                 Express.js
                              </Badge>
                              <Badge
                                 variant='outline'
                                 className='border-gray-300 dark:border-gray-600 rounded-full px-3 py-0.5 dark:text-gray-300'
                              >
                                 MongoDB
                              </Badge>
                              <Badge
                                 variant='outline'
                                 className='border-gray-300 dark:border-gray-600 rounded-full px-3 py-0.5 dark:text-gray-300'
                              >
                                 Firebase
                              </Badge>
                              <Badge
                                 variant='outline'
                                 className='border-gray-300 dark:border-gray-600 rounded-full px-3 py-0.5 dark:text-gray-300'
                              >
                                 Git
                              </Badge>
                           </div>
                        </CardContent>
                     </Card>
                  </motion.div>

                  <motion.div
                     ref={projectRefs[1]}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.4 }}
                     onHoverStart={() => handleProjectHover(1)}
                     onHoverEnd={handleProjectLeave}
                  >
                     <Card className='h-full border-0 shadow-lg rounded-2xl overflow-hidden interactive-card dark:card-highlight'>
                        <CardHeader className='pb-2'>
                           <CardTitle className='text-xl font-medium'>
                              Find Your Lost Pet
                           </CardTitle>
                           <CardDescription>Web Application</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <p className='text-gray-600 dark:text-gray-300 mb-6 text-lg'>
                              <span className='font-semibold'>
                                 Led the backend development
                              </span>{" "}
                              of a web application to help users find their lost
                              pets by creating posts and messaging other users.
                           </p>
                           <ul className='space-y-3 text-gray-600 dark:text-gray-300 mb-6'>
                              <motion.li
                                 className='flex items-start'
                                 initial={{ opacity: 0, x: -10 }}
                                 animate={
                                    isMobile
                                       ? { opacity: 1, x: 0 }
                                       : activeProject === 1
                                       ? { opacity: 1, x: 0 }
                                       : {}
                                 }
                                 transition={{ duration: 0.3, delay: 0.1 }}
                              >
                                 <span className='h-1.5 w-1.5 rounded-full bg-black dark:bg-[#3b82f6] mt-2 mr-2 flex-shrink-0'></span>
                                 <span>
                                    Developed CRUD operations for posts and
                                    comments, enabling users to share
                                    information quickly.
                                 </span>
                              </motion.li>
                              <motion.li
                                 className='flex items-start'
                                 initial={{ opacity: 0, x: -10 }}
                                 animate={
                                    isMobile
                                       ? { opacity: 1, x: 0 }
                                       : activeProject === 1
                                       ? { opacity: 1, x: 0 }
                                       : {}
                                 }
                                 transition={{ duration: 0.3, delay: 0.2 }}
                              >
                                 <span className='h-1.5 w-1.5 rounded-full bg-black dark:bg-[#3b82f6] mt-2 mr-2 flex-shrink-0'></span>
                                 <span>
                                    Implemented a messaging system, allowing
                                    users to easily communicate about lost pets.
                                 </span>
                              </motion.li>
                              <motion.li
                                 className='flex items-start'
                                 initial={{ opacity: 0, x: -10 }}
                                 animate={
                                    isMobile
                                       ? { opacity: 1, x: 0 }
                                       : activeProject === 1
                                       ? { opacity: 1, x: 0 }
                                       : {}
                                 }
                                 transition={{ duration: 0.3, delay: 0.3 }}
                              >
                                 <span className='h-1.5 w-1.5 rounded-full bg-black dark:bg-[#3b82f6] mt-2 mr-2 flex-shrink-0'></span>
                                 <span>
                                    Integrated email-based password recovery
                                    with token validation, giving users a secure
                                    and efficient way to reset passwords.
                                 </span>
                              </motion.li>
                              <motion.li
                                 className='flex items-start'
                                 initial={{ opacity: 0, x: -10 }}
                                 animate={
                                    isMobile
                                       ? { opacity: 1, x: 0 }
                                       : activeProject === 1
                                       ? { opacity: 1, x: 0 }
                                       : {}
                                 }
                                 transition={{ duration: 0.3, delay: 0.4 }}
                              >
                                 <span className='h-1.5 w-1.5 rounded-full bg-black dark:bg-[#3b82f6] mt-2 mr-2 flex-shrink-0'></span>
                                 <span>
                                    Learned to implement JWT for secure login
                                    and used npm packages like Helmet,
                                    express-rate-limit and xss-clean to protect
                                    users and enhance app security.
                                 </span>
                              </motion.li>
                           </ul>
                           <div className='flex flex-wrap gap-2 mt-4'>
                              <Badge
                                 variant='outline'
                                 className='border-gray-300 dark:border-gray-600 rounded-full px-3 py-0.5 dark:text-gray-300'
                              >
                                 Node.js
                              </Badge>
                              <Badge
                                 variant='outline'
                                 className='border-gray-300 dark:border-gray-600 rounded-full px-3 py-0.5 dark:text-gray-300'
                              >
                                 Express.js
                              </Badge>
                              <Badge
                                 variant='outline'
                                 className='border-gray-300 dark:border-gray-600 rounded-full px-3 py-0.5 dark:text-gray-300'
                              >
                                 MongoDB
                              </Badge>
                           </div>
                        </CardContent>
                     </Card>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Hackathons Section */}
         <section id='hackathons' className='py-24 dark:bg-[#0f172a] reveal'>
            <div className='container max-w-6xl mx-auto px-6 md:px-8'>
               <motion.h2
                  className='text-3xl font-bold mb-16 text-center gradient-text'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
               >
                  Hackathons
               </motion.h2>
               <div className='max-w-3xl mx-auto'>
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                     whileHover={{ scale: 1.02 }}
                  >
                     <Card className='border-0 shadow-lg rounded-2xl overflow-hidden interactive-card dark:card-highlight'>
                        <CardHeader>
                           <div className='flex justify-between items-start'>
                              <div>
                                 <CardTitle className='text-xl font-medium'>
                                    DevHacks
                                 </CardTitle>
                                 <CardDescription>1st Place</CardDescription>
                              </div>
                              <Badge className='bg-black dark:bg-[#3b82f6] text-white rounded-full px-4 py-1 dark:badge-glow'>
                                 Nov 2022
                              </Badge>
                           </div>
                        </CardHeader>
                        <CardContent>
                           <p className='text-gray-600 dark:text-gray-300 mb-6 text-lg dark:text-shadow'>
                              Developed Office Room, a team management app,
                              within 24 hours, using HTML, CSS and Django for
                              fast development.
                           </p>
                           <ul className='space-y-3 text-gray-600 dark:text-gray-300'>
                              <motion.li
                                 className='flex items-start'
                                 whileHover={{ x: 5 }}
                                 transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                 }}
                              >
                                 <span className='h-1.5 w-1.5 rounded-full bg-black dark:bg-[#3b82f6] mt-2 mr-2 flex-shrink-0'></span>
                                 <span>
                                    Users can create activities and earn points
                                    for attending in-person, encouraging on-site
                                    work.
                                 </span>
                              </motion.li>
                              <motion.li
                                 className='flex items-start'
                                 whileHover={{ x: 5 }}
                                 transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                 }}
                              >
                                 <span className='h-1.5 w-1.5 rounded-full bg-black dark:bg-[#3b82f6] mt-2 mr-2 flex-shrink-0'></span>
                                 <span>
                                    Learned Git and strengthened teamwork skills
                                    through collaborative project development.
                                 </span>
                              </motion.li>
                           </ul>
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
                                    Django
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

                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.4 }}
                     whileHover={{ y: -10 }}
                  >
                     <Card className='border-0 shadow-lg rounded-2xl overflow-hidden interactive-card dark:card-highlight'>
                        <CardHeader>
                           <CardTitle className='text-center text-xl font-medium'>
                              Tools
                           </CardTitle>
                        </CardHeader>
                        <CardContent className='text-center'>
                           <div className='flex flex-wrap justify-center gap-2'>
                              <motion.div
                                 whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.95 }}
                              >
                                 <Badge className='bg-black dark:bg-[#3b82f6] text-white hover:bg-gray-800 dark:hover:bg-[#2563eb] rounded-full px-4 py-1 dark:badge-glow'>
                                    Git
                                 </Badge>
                              </motion.div>
                              <motion.div
                                 whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.95 }}
                              >
                                 <Badge className='bg-black dark:bg-[#3b82f6] text-white hover:bg-gray-800 dark:hover:bg-[#2563eb] rounded-full px-4 py-1 dark:badge-glow'>
                                    GitHub
                                 </Badge>
                              </motion.div>
                              <motion.div
                                 whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.95 }}
                              >
                                 <Badge className='bg-black dark:bg-[#3b82f6] text-white hover:bg-gray-800 dark:hover:bg-[#2563eb] rounded-full px-4 py-1 dark:badge-glow'>
                                    Firebase
                                 </Badge>
                              </motion.div>
                              <motion.div
                                 whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.95 }}
                              >
                                 <Badge className='bg-black dark:bg-[#3b82f6] text-white hover:bg-gray-800 dark:hover:bg-[#2563eb] rounded-full px-4 py-1 dark:badge-glow'>
                                    Postman
                                 </Badge>
                              </motion.div>
                           </div>
                        </CardContent>
                     </Card>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Contact Section */}
         <section id='contact' className='py-24 dark:bg-[#0f172a] reveal'>
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
