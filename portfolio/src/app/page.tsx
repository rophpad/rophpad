import AudioReader from "@/components/AudioReader";
import ProjectCard from "@/components/ProjectCard";
import SocialIcon from "@/components/SocialIcon";
import WorkCard from "@/components/WorkCard";
import ArticleCard from "@/components/ArticleCard";
import { Project } from "@/types/Project";
import { Work } from "@/types/Work";
import { Article } from "@/types/Article";
import { aboutme, projects, designs, works, articles, socialNetworks } from "@/informations"

export default function Home() {
  const socialIconStyle = "p-2 size-10 border border-white/10 rounded-lg hover:bg-white/5 transition-colors cursor-pointer";

  return (
    <div className="w-full font-sans items- justify-items-center h-full py- px-">
      <div className="w-full px-8 lg:px-0 lg:max-w-2xl mt-8 flex flex-col gap-16">
        <div className="w-full h- flex flex-col items-center gap-8 ">
          <div className="w-full border-b border-white/10 py-4 flex items-center gap-4" id="about-me">
            <h1 className="text-2xl font-medium">{`${aboutme.username}`}</h1>
            <AudioReader />
          </div>
          <div className="w-full flex flex-col gap-6">
            <p>
              {`${aboutme.profile}`}
            </p>
            <p>
              {`${aboutme.interests}`}
            </p>
            <p>
              {`${aboutme.workStatus}`}
            </p>
          </div>
          <div className="w-full flex gap-4">
            {
              socialNetworks.map((socialNetwork, index) => {
                return (
                  <SocialIcon key={index} name={socialNetwork.name} link={socialNetwork.link} style={socialIconStyle} />
                )
              })
            }
          </div>
        </div>

        <div className="w-full max-w-3xl h- flex flex-col items-center gap-8 " id="projects">
          <div className="w-full border-b border-dotted border-spacing-8 border-white/10 py-4 flex items-center gap-4">
            <h2 className="text-xl font-medium" >Projects</h2>
          </div>

          <div className="w-full ">
            {/* Projects list */}
            {
              projects.map((project: Project, index: number) => {
                return (
                  <ProjectCard
                    key={index}
                    name={project.name}
                    logo={project.logo}
                    link={project.link}
                    description={project.description}
                  />
                )
              })
            }
          </div>
        </div>

        <div className="w-full max-w-3xl h- flex flex-col items-center gap-8 " id="works">
          <div className="w-full border-b border-dotted border-spacing-8 border-white/10 py-4 flex items-center gap-4">
            <h2 className="text-xl font-medium">Works</h2>
          </div>

          <div className="w-full">
            {/* Works list */}
            {
              works.map((work: Work, index: number) => {
                return (
                  <WorkCard
                    key={index}
                    company={work.company}
                    role={work.role}
                    description={work.description}
                    projects={work.projects || []}
                    startDate={work.startDate}
                    endDate={work.endDate}
                  />
                )
              })
            }
          </div>
        </div>


        <div className="w-full max-w-3xl h- flex flex-col items-center gap-8 " id="articles">
          <div className="w-full border-b border-dotted border-spacing-8 border-white/10 py-4 flex items-center gap-4">
            <h2 className="text-xl font-medium">Writtings</h2>
          </div>

          <div className="w-full">
            {
              articles.map((article: Article, index: number) => {
                return (
                  <ArticleCard
                    key={index}
                    title={article.title}
                    field={article.field}
                    platform={article.platform}
                    date={article.date}
                    link={article.link}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
