import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Réplica e-commerce" },
    { name: "description", content: "Réplica de un e-commerce como última tarea de programación" },
  ];
}

export default function Home() {
  return '';
}
