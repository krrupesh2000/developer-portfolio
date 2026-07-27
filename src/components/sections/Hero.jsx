import { useEffect, useState } from "react";
import { motion } from "motion/react";

import { getProfile } from "../../services/github";

import Button from "../ui/Button";
import HeroImage from "../HeroImage";
import SocialLinks from "../SocialLinks";

import { fadeUp, fadeLeft } from "../../animations/variants";

function Hero() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <section
        id="home"
        className="section flex min-h-screen items-center justify-center"
      >
        <div className="container">
          <p className="text-center text-lg font-medium text-muted-foreground">
            Loading profile...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="home"
        className="section flex min-h-screen items-center justify-center"
      >
        <div className="container">
          <p className="text-center text-lg font-medium text-red-500">
            {error}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="section flex min-h-screen items-center">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* ========================= */}
          {/* Content */}
          {/* ========================= */}

          <motion.div
            className="order-2 text-center lg:order-1 lg:text-left"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            {/* Availability */}

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

              <span className="text-sm font-medium text-muted-foreground">
                Available for Full-Time Opportunities
              </span>
            </div>

            {/* Greeting */}

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Hello, I'm
            </p>

            {/* Name */}

            <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-foreground lg:text-7xl">
              {profile.name}
            </h1>

            {/* Role */}

            <h2 className="mb-6 text-2xl font-semibold text-primary lg:text-3xl">
              Full Stack MERN Developer
            </h2>

            {/* Description */}

            <p className="mb-10 max-w-lg text-lg leading-8 text-muted-foreground lg:mx-0">
              I build modern, scalable, and user-focused web applications using
              React, Node.js, Express, MongoDB, and modern development
              practices. Passionate about clean architecture, performance,
              DevOps, and cloud technologies.
            </p>

            {/* CTA */}

            <motion.div
              className="mb-8 flex flex-wrap justify-center gap-4 lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.35,
                duration: 0.5,
              }}
            >
              <Button as="a" href="#projects">
                View My Projects
              </Button>

              <Button as="a" href="#contact" variant="secondary">
                Get In Touch
              </Button>
            </motion.div>

            {/* Social */}

            <div>
              <p className="mb-3 text-sm font-medium text-muted-foreground">
                Connect with me
              </p>

              <SocialLinks className="justify-center lg:justify-start" />
            </div>
          </motion.div>

          {/* ========================= */}
          {/* Hero Image */}
          {/* ========================= */}

          <motion.div
            className="order-1 flex justify-center lg:order-2"
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
          >
            <HeroImage src={profile.avatar_url} alt={profile.name} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
