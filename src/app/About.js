
export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-width">
        <div className="mb-12 text-center">
          <p className="font-semibold text-violet-400">GET TO KNOW ME</p>
          <h2 className="mt-3 text-4xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold">
              My Journey in Web Development
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              I am Reduan Ahmed, a Junior Full Stack Web Developer
              from Sylhet, Bangladesh. I completed my Diploma in
              Computer Science in 2024.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              My journey in web development started with a strong
              interest in technology and problem-solving. I am
              continuously learning JavaScript, React, Next.js,
              and backend development to build useful web applications.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              My goal is to become a professional software engineer
              and contribute to real-world projects while improving
              my skills every day.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="glass-card rounded-2xl p-6">
              <p className="text-3xl">🎯</p>
              <h3 className="mt-4 text-xl font-bold">My Goal</h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Become a skilled software engineer and build
                meaningful digital products.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <p className="text-3xl">💻</p>
              <h3 className="mt-4 text-xl font-bold">My Interest</h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Web development, problem-solving, and learning
                modern technologies.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <p className="text-3xl">📚</p>
              <h3 className="mt-4 text-xl font-bold">Learning</h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Improving my frontend and backend development
                skills through practical projects.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <p className="text-3xl">🌿</p>
              <h3 className="mt-4 text-xl font-bold">Hobbies</h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Exploring nature, travelling, and photography.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
