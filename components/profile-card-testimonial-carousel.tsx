"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Twitter,
  Youtube,
  Linkedin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Maria Flores",
    title: "Chief Digital Officer at Global Freight Logistics",
    description: "The IntelliBots platform transformed our approach to internal AI. We're now empowering our own teams to deploy solutions in hours, not months. It is a game-changer for organizational agility.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    linkedinUrl: "#",
  },
  {
    name: "Dr. Marcus Thorne",
    title: "Chief Medical Officer at iSeedoc.com",
    description: "Navigating healthcare compliance is our biggest challenge. Evren AI delivered a sophisticated, HIPAA-compliant telehealth solution that balanced innovation with the rigorous security our patients deserve.",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
    linkedinUrl: "#",
  },
  {
    name: "Bill Schmidt",
    title: "Head of Operations at Apex Construction Group",
    description: "The AI safety monitoring system has been invaluable. We have seen a 40% reduction in on-site incidents. Evren AI understands the realities of our operational environment better than anyone.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    linkedinUrl: "#",
  },
  {
    name: "Olivia Reed",
    title: "Chief Investment Officer at Stone Ridge Capital",
    description: "In our business, speed is alpha. The real-time intelligence platform Evren AI built for us delivers insights from earnings calls in seconds. It is a fundamental part of our competitive edge.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    linkedinUrl: "#",
  },
  {
    name: "Mark Goldstein",
    title: "Managing Partner at Goldstein & Associates Law",
    description: "We were leaking revenue through billing inefficiencies. Evren AI's platform recovered 15% of previously unbillable time in the first quarter alone. The system paid for itself almost immediately.",
    imageUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80",
    linkedinUrl: "#",
  }
];

export interface TestimonialCarouselProps {
  className?: string;
}

export function TestimonialCarousel({ className }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % testimonials.length);
  const handlePrevious = () =>
    setCurrentIndex(
      (index) => (index - 1 + testimonials.length) % testimonials.length
    );

  const currentTestimonial = testimonials[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]); // Re-run effect when currentIndex changes to reset the timer

  const socialIcons = [
    { icon: Linkedin, url: currentTestimonial.linkedinUrl, label: "LinkedIn" },
  ];

  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4", className)}>
      {/* Desktop layout */}
      <div className='hidden md:flex relative items-center'>
        {/* Avatar */}
        <div className='w-[470px] h-[470px] rounded-3xl overflow-hidden bg-gray-200 dark:bg-neutral-800 flex-shrink-0'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className='w-full h-full'
            >
              <Image
                src={currentTestimonial.imageUrl}
                alt={currentTestimonial.name}
                width={470}
                height={470}
                className='w-full h-full object-cover'
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card */}
        <div className='bg-white dark:bg-card rounded-3xl shadow-2xl p-8 ml-[-80px] z-10 max-w-xl flex-1'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className='mb-6'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                  {currentTestimonial.name}
                </h2>

                <p className='text-sm font-medium text-gray-700 dark:text-gray-500'>
                  {currentTestimonial.title}
                </p>
              </div>

              <p className='text-black dark:text-white text-base leading-relaxed mb-8'>
                {currentTestimonial.description}
              </p>

              <div className='flex space-x-4'>
                {socialIcons.map(({ icon: IconComponent, url, label }) => (
                  <Link
                    key={label}
                    href={url || "#"}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-12 h-12 bg-[#0ABAB5]/10 rounded-full flex items-center justify-center transition-colors hover:bg-[#0ABAB5] hover:scale-105 cursor-pointer group'
                    aria-label={label}
                  >
                    <IconComponent className='w-5 h-5 text-[#0ABAB5] group-hover:text-white transition-colors' />
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile layout */}
      <div className='md:hidden max-w-sm mx-auto text-center bg-transparent'>
        {/* Avatar */}
        <div className='w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded-3xl overflow-hidden mb-6'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className='w-full h-full'
            >
              <Image
                src={currentTestimonial.imageUrl}
                alt={currentTestimonial.name}
                width={400}
                height={400}
                className='w-full h-full object-cover'
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card content */}
        <div className='px-4'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h2 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                {currentTestimonial.name}
              </h2>
              
              <p className='text-sm font-medium text-gray-600 dark:text-gray-300 mb-4'>
                {currentTestimonial.title}
              </p>
              
              <p className='text-black dark:text-white text-sm leading-relaxed mb-6'>
                {currentTestimonial.description}
              </p>
              
              <div className='flex justify-center space-x-4'>
                {socialIcons.map(({ icon: IconComponent, url, label }) => (
                  <Link
                    key={label}
                    href={url || "#"}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-12 h-12 bg-[#0ABAB5]/10 rounded-full flex items-center justify-center transition-colors hover:bg-[#0ABAB5] hover:scale-105 cursor-pointer group'
                    aria-label={label}
                  >
                    <IconComponent className='w-5 h-5 text-[#0ABAB5] group-hover:text-white transition-colors' />
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className='flex justify-center items-center gap-6 mt-8'>
        {/* Previous */}
        <button
          onClick={handlePrevious}
          aria-label='Previous testimonial'
          className='w-12 h-12 rounded-full bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center hover:bg-gray-50 hover:border-[#0ABAB5] transition-colors cursor-pointer text-gray-500 hover:text-[#0ABAB5]'
        >
          <ChevronLeft className='w-6 h-6' />
        </button>

        {/* Dots */}
        <div className='flex gap-2 text-[#0ABAB5]'>
          {testimonials.map((_, testimonialIndex) => (
            <button
              key={testimonialIndex}
              onClick={() => setCurrentIndex(testimonialIndex)}
              className={cn(
                "w-3 h-3 rounded-full transition-colors cursor-pointer",
                testimonialIndex === currentIndex
                  ? "bg-[#0ABAB5]"
                  : "bg-gray-200 hover:bg-teal-200"
              )}
              aria-label={`Go to testimonial ${testimonialIndex + 1}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          aria-label='Next testimonial'
          className='w-12 h-12 rounded-full bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center hover:bg-gray-50 hover:border-[#0ABAB5] transition-colors cursor-pointer text-gray-500 hover:text-[#0ABAB5]'
        >
          <ChevronRight className='w-6 h-6' />
        </button>
      </div>
    </div>
  );
}
