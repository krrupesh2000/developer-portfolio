import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

import { getProfile } from '../../services/github';
import { fallbackProfile } from '../../data/profile';

import Button from '../ui/Button';
import HeroImage from '../HeroImage';
import SocialLinks from '../SocialLinks';

import { fadeUp, fadeLeft } from '../../animations/variants';

function Hero() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProfile() {
      try {
        const data = await getProfile({ signal: controller.signal });
        setProfile(data || fallbackProfile);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('Error fetching profile, using fallback.', err);
          setProfile(fallbackProfile);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) {
    return (
      <section id="home" className="flex min-h-screen items-center section">
        <div className="container">
          <p className="type-subtitle text-center font-medium text-muted-foreground">
            Loading profile...
          </p>
        </div>
      </section>
    );
  }

  if (!profile) {
    return null;
  }

  return (
    <section id="home" className="flex min-h-screen items-center section">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)] lg:gap-14 xl:gap-16">
          <motion.div
            className="order-2 text-center lg:order-1 lg:text-left"
            variants={shouldReduceMotion ? undefined : fadeUp}
            initial={shouldReduceMotion ? false : 'hidden'}
            animate={shouldReduceMotion ? undefined : 'visible'}
          >
            {/* Greeting */}

            <p className="type-eyebrow mb-3 font-semibold uppercase text-muted-foreground">
              Hello, I&apos;m
            </p>

            {/* Name */}

            <h1 className="type-hero-title mb-4 font-extrabold">
              {profile.name}
            </h1>

            {/* Role */}

            <h2 className="type-subtitle mb-6 font-semibold">
              Full Stack MERN Developer
            </h2>

            {/* Availability */}

            <div
              className="mb-8 inline-flex max-w-full items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-4 py-2"
              role="status"
              aria-label="Currently available for full-time opportunities"
            >
              <span
                className="h-2.5 w-2.5 rounded-full bg-green-500"
                aria-hidden="true"
              />

              <span className="type-label font-medium">
                Available for Full-Time Opportunities
              </span>
            </div>

            {/* Description */}

            <p className="type-body mb-10 mx-auto max-w-xl lg:mx-0 lg:max-w-2xl">
              I build modern, scalable, and user-focused web applications using
              React, Node.js, Express, MongoDB, and modern development
              practices. Passionate about clean architecture, performance,
              DevOps, and cloud technologies.
            </p>

            {/* CTA */}

            <motion.div
              className="mb-8 flex flex-wrap justify-center gap-4 lg:justify-start"
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1 }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      delay: 0.35,
                      duration: 0.5,
                    }
              }
            >
              <Button as="a" href="#projects">
                View My Projects
              </Button>

              <Button as="a" href="#contact" variant="secondary">
                Get In Touch
              </Button>
            </motion.div>

            {/* Social */}

            <div className="mt-3">
              <SocialLinks className="justify-center lg:justify-start" />
            </div>
          </motion.div>

          {/* ========================= */}
          {/* Hero Image */}
          {/* ========================= */}

          <motion.div
            className="order-1 flex justify-center lg:order-2"
            variants={shouldReduceMotion ? undefined : fadeLeft}
            initial={shouldReduceMotion ? false : 'hidden'}
            animate={shouldReduceMotion ? undefined : 'visible'}
          >
            <HeroImage
              src={profile.avatar_url || fallbackProfile.avatar_url}
              alt={profile.name}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
