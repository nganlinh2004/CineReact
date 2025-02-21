import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { div } from "framer-motion/client";
// import Link from "next/link";
import { useState } from "react";
import placeholderImg from "../../assets/placeholder_img.png";

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    (<div
      className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5  py-10", className)}>
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.4 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.4, delay: 0.0 },
                }} />
            )}
          </AnimatePresence>
          <Card>
            <CardImage src={item.image} alt={item.title} />
            <div className="p-4 grid grid-rows-[auto_auto]">
              <div className="Content">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </div>
              <CardButton />
            </div>

          </Card>
        </a>
      ))}
    </div>)
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "card rounded-2xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}>
      <div className="relative z-50 h-full grid [grid-template-rows:10rem_auto]">
        {children}
      </div>
    </div>)
  );
};

export const CardImage = ({ src, alt }) => {
  if (!src) {
    src = placeholderImg;
  }
  return (
    <img
      className="h-40 w-full object-cover"
      src={src}
      alt={alt}
      onError={(e) => { e.target.src = placeholderImg; }}
    />
  );
};

export const CardTitle = ({
  className,
  children
}) => {
  return (
    (<h4 className={cn("text-zinc-100 font-bold tracking-wide", className)}>
      {children}
    </h4>)
  );
};

export const CardDescription = ({
  className,
  children
}) => {
  return (
    (<p
      className={cn("mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>)
  );
};

export const CardButton = ({
  className,
  children
}) => {
  return (
    (<div className="flex items-end">
      <div className="h-10 w-full mt-4 overflow-hidden relative rounded-xl px-6 py-2  bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
        <span
          className="group-hover/modal-btn:translate-x-48 text-center transition duration-500">
          Play now
        </span>
        <div
          className=" -translate-x-48 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          🍿
        </div>
      </div>
    </div>)
  );
};