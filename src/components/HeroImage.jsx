import { motion } from 'motion/react';

function HeroImage({ src, alt = 'Profile Photo' }) {
  return (
    <div className="group relative flex items-center justify-center">
      {/* Decorative Ring */}

      <div
        className="
          absolute
          -z-20
          h-[clamp(17rem,70vw,26rem)]
          w-[clamp(17rem,70vw,26rem)]
          rounded-full
          border
          border-border/30
          shadow-[0_0_80px_rgba(59,130,246,0.05)]
        "
      />

      {/* Ambient Glow */}

      <motion.div
        className="
          absolute
          -z-10
          h-[clamp(16rem,64vw,24rem)]
          w-[clamp(16rem,64vw,24rem)]
          rounded-full
          bg-primary
          opacity-15
          blur-[90px]
        "
        animate={{
          opacity: [0.12, 0.2, 0.12],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />

      {/* Gold Ring */}

      <div
        className="
          gradient-gold
          relative
          rounded-full
          p-[4px]
          shadow-xl
          transition-default
          group-hover:scale-[1.02]
        "
      >
        {/* Background Spacer */}

        <div className="rounded-full bg-background p-[6px]">
          {/* Profile Image */}

          <img
            src={src}
            alt={alt}
            draggable={false}
            className="
              h-[clamp(14rem,62vw,18rem)]
              w-[clamp(14rem,62vw,18rem)]
              rounded-full
              object-cover
              select-none
              pointer-events-none

              md:h-80
              md:w-80

              lg:h-[22rem]
              lg:w-[22rem]
            "
          />
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
