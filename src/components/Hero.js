
export default function Hero() {
  return (
    <section
      id="home"
      className="grid-bg relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="container-width grid items-center gap-12 py-16 md:grid-cols-2">

        {/* Introduction */}
        <div>
          <span className="inline-block rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            ● Available for Opportunities
          </span>

          <p className="mt-8 text-lg text-gray-400">
            Hello, I'm
          </p>

          <h1 className="mt-3 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Reduan
            <br />
            <span className="gradient-text">
              Ahmed.
            </span>
          </h1>

          <h2 className="mt-6 text-xl font-semibold text-gray-200 sm:text-2xl">
            Junior Full Stack Web Developer
          </h2>

          <p className="mt-6 max-w-lg leading-8 text-gray-400">
            I am a passionate web developer from Sylhet,
            Bangladesh. I enjoy building modern, responsive
            and user-friendly web applications using
            JavaScript, React and Next.js.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="primary-button">
              Explore Projects ↗
            </a>

            <a href="#contact" className="rounded-full border border-violet-400/40 px-6 py-3 text-violet-300 transition hover:bg-violet-500/10">
              Contact Me
            </a>

            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-6 py-3 text-gray-200 transition hover:bg-white/10">
              View Resume ↓
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex gap-6 text-sm text-gray-400">
            <a
              href="https://github.com/reduanahmed2022-reduan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-400"
            >
              GitHub ↗
            </a>

            <a href="#contact" className="hover:text-violet-400">
              LinkedIn
            </a>

            <a href="#contact" className="hover:text-violet-400">
              Facebook
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative rounded-full border-2 border-violet-500/50 p-3 shadow-2xl shadow-violet-500/20">

            <img
              src="/profile.jpg"
              alt="Reduan Ahmed - Web Developer"
              className="h-[280px] w-[280px] rounded-full object-cover sm:h-[380px] sm:w-[380px]"
            />

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-violet-400/30 bg-[#171326] px-6 py-3 text-sm font-semibold text-violet-200">
              JavaScript • React • Next.js
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
