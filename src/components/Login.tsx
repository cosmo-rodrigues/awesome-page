'use client';

import { motion } from 'framer-motion';
import { AnimatedCharacters } from './AnimatedCharacters';

export const Login = () => {
  const placeholderText = [
    { type: 'heading1', text: 'MISSION GROUP PRESENTS' },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-4">
      <motion.div
        initial={{ opacity: 0, x: 700 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
        className="h-[45vh] w-[50vw] bg-black"
      ></motion.div>
      <motion.div
        initial="hidden"
        // animate="visible"
        animate={'visible'}
        variants={container}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="reflection"
        data-text="MISSION GROUP PRESENTS"
      >
        {placeholderText.map((item, index) => {
          return <AnimatedCharacters {...item} key={index} />;
        })}
      </motion.div>
    </div>
  );
};
