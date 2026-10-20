import "./style.css"
import { projects } from "./projects"

const projectList = document.querySelector("#project-list");

function createProjectCard (project){
  return `
  <article class="overflow-hidden rounded-lg bg-white p-6 shadow">
    <img 
      src="${project.image}"
      alt="${project.alt}"
      loading="lazy"
      class="aspect-[4/3] w-full object-cover"
      />
      <div class="p-6">
        <span class="text-sm font-semibold uppercase text-brand">${project.status}</span>
        <h3 class="mt-2 text-xl font-bold">${project.title}</h3>
        <p class="mt-2 text-stone-600">${project.description}</p>
      </div>  
  </article>
  `;
}

projectList.innerHTML = projects.map(createProjectCard).join("");

console.log(projects);