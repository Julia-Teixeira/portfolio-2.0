import axios from "axios";
import { userData } from "@/utils/userData";

interface Projects {
  id: number;
  name: string;
  homepage: string;
  html_url: string;
  language: string;
  created_at: string | Date;
  description: string | null;
}

export const api = axios.create({
  baseURL: `https://api.github.com/users/${userData.githubUser}/repos?sort=created&direction=desc`,
  timeout: 5000,
});

export const getProjects = async () => {
  const response = await api.get<Projects[]>("/");
  return response.data;
};
