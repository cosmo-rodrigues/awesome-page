// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';

import { ComponentProps } from '@/types/component-props';

type TypeOfTypes = 'paragraph' | 'heading1' | 'heading2';

interface WrapperProps extends ComponentProps {}
interface AnimatedCharactersProps extends ComponentProps {
  text: string;
  type: string;
}

// Word wrapper
const Wrapper = ({ children }: WrapperProps) => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className="word-wrapper">{children}</span>;
};

// Map API "type" vaules to JSX tag names
const tagMap = {
  paragraph: 'p',
  heading1: 'h1',
  heading2: 'h2',
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
export const AnimatedCharacters = ({ text, type }: AnimatedCharactersProps) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: '200%',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  const splitWords = text.split(' ');

  const words: string[] = [];

  for (const [, item] of splitWords.entries()) {
    words.push(item.split(''));
  }

  words.map((word) => {
    return word.push('\u00A0');
  });

  // Get the tag name from tagMap
  const Tag = tagMap[type as TypeOfTypes];

  return (
    <Tag>
      {words.map((_word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: 'hidden',
                    display: 'inline-block',
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: 'inline-block' }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
    </Tag>
  );
};
