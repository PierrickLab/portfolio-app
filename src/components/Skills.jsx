import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", level: 80, category: "frontend" },
  { name: "JavaScript", level: 50, category: "frontend" },
  { name: "React", level: 45, category: "frontend" },
  { name: "Tailwind CSS", level: 60, category: "frontend" },
  { name: "Ruby on Rails", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 50, category: "backend" },
  { name: "Git/GitHub", level: 70, category: "tools" },
  { name: "Figma", level: 75, category: "tools" },
  { name: "VS Code", level: 80, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

// couleurs Tailwind pour chaque catégorie
const categoryColor = {
  frontend: "bg-blue-500",
  backend: "bg-green-500",
  tools: "bg-purple-500",
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/50"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-sm card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/40 h-3 rounded-full overflow-hidden shadow-inner">
                <div
                  className={cn(
                    "h-3 rounded-full transition-all duration-700 ease-out",
                    categoryColor[skill.category]
                  )}
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
