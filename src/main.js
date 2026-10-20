import "./style.css"
import { projects } from "./projects"

const projectList = document.querySelector("#project-list");

function createProjectCard (project){
  return `
  <article class="rounded-lg bg-white p-6 shadow">
    <span class="text-sm font-semibold uppercase text-brand">${project.status}</span>
    <h3 class="mt-2 text-xl font-bold">${project.title}</h3>
    <p class="mt-2 text-stone-600">${project.description}</p>
  </article>
  `;
}

projectList.innerHTML = projects.map(createProjectCard).join("");

console.log(projects);