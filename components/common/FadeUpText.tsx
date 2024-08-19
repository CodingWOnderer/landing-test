import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import React from 'react';
import { cn } from '@/lib/utils';

interface FadeUpStaggerProps {
    children: ReactNode;
    className?: React.ComponentProps<"div">["className"]
}

export function FadeUpStagger({ children, className }: FadeUpStaggerProps) {
    const FADE_UP_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { type: "spring" } },
    };

    return (
        <motion.div
            initial="hidden"
            animate="show"
            className={cn('space-y-5', className)}
            viewport={{ once: true }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.15,
                    },
                },
            }}
        >
            {React.Children.map(children, (child, index) => (
                <motion.div key={index} variants={FADE_UP_ANIMATION_VARIANTS}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
}
