import { useEffect, useState } from "react";
import { getProfile } from "../../services/github";
import Button from "../ui/Button";

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
      <section className="flex min-h-screen items-center justify-center">
        <h2 className="text-xl font-semibold">Loading profile...</h2>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex min-h-screen items-center justify-center">
        <h2 className="text-xl text-red-500">{error}</h2>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-12 px-6 py-20 md:flex-row"
    >
      {/* Left */}
      <div className="flex-1 text-center md:text-left">
        <p className="mb-2 text-lg text-gray-500">Hi I'm</p>

        <h1 className="mb-4 text-5xl font-bold">{profile.name}</h1>

        <h2 className="mb-6 text-2xl font-semibold text-blue-600">
          Full Stack MERN Developer
        </h2>

        <p className="mb-8 max-w-xl text-lg leading-8 text-gray-600">
          {profile.bio}
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
          <Button>View Projects</Button>

          <Button variant="secondary">Contact Me</Button>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-1 justify-center">
        <img
          src={profile.avatar_url}
          alt={profile.name}
          className="h-72 w-72 rounded-full border-4 border-gray-300 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
}

export default Hero;
