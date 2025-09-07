import { FolderKanban, ChartNoAxesGantt, CircleUserRound } from "lucide-react";

export const Info = () => {
  return (
    <section id="info" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Info about <span className="text-primary">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          {/* Texte à droite */}
          <div className="space-y-6 md:w-1/2">
            <h3 className="text-2xl font-semibold">
              Full Stack Developer with a Customer-Centered Mindset
            </h3>

            <p className="text-muted-foreground text-justify">
              After several years in the banking industry, I decided to transition
              into tech. I recently completed an intensive Full Stack Web Developer
              bootcamp at Le Wagon in Montréal, where I learned to build modern and
              responsive web applications.
            </p>

            <p className="text-muted-foreground text-justify">
              I'm passionate about combining technical skills with empathy and clear
              communication. I thrive in collaborative environments and I’m constantly
              pushing myself to learn and create. My latest projects include{" "}
              <strong>GameVault</strong>, a video game rental app,{" "}
              <strong>X-Goal Achiever</strong>, a task manager for users with ADHD and of
              course <strong>this</strong> portfolio
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/PierrickLabrotCV2025.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>

            </div>
          </div>

          {/* Cartes à gauche */}
          <div className="grid grid-cols-1 gap-6 md:w-1/2">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ChartNoAxesGantt className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full Stack Projects</h4>
                  <p className="text-muted-foreground">
                    Building web apps using Ruby on Rails, JavaScript, SQL, React and APIs.
                    I focus on clean code, scalability, and great UX.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <CircleUserRound className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">User Experience</h4>
                  <p className="text-muted-foreground">
                    My background in customer service shapes the way I design and build,
                    always putting the user first.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FolderKanban className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Team Projects</h4>
                  <p className="text-muted-foreground">
                    Collaborated in teams to deliver real-world projects using agile
                    methodologies and Git workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
