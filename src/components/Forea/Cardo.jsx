'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Cardo() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-pink-300 p-6 rounded-3xl shadow-lg max-w-sm text-center">
        <div className="relative flex items-center justify-center mb-4">
          <div className="w-40 h-40 bg-black rounded-full flex items-center justify-center relative">
            <motion.div 
              className="absolute w-32 h-32 bg-black rounded-xl"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
            />
          </div>
        </div>
        <h2 className="text-lg font-bold text-black">AI Mode</h2>
        <p className="text-sm text-black mt-2">
          A new Search experiment that uses advanced reasoning & thinking capabilities to answer even your toughest questions.
        </p>
        <button className="mt-4 px-4 py-2 border border-black rounded-full text-black hover:bg-black hover:text-white transition">
          Learn more
        </button>
      </div>
    </div>
  );
}
