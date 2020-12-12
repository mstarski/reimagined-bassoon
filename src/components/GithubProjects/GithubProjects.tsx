import React from "react";
import { useRepos } from "../../hooks/useRepos";

export const GithubProjects = () => {
  const [repos, loading, error] = useRepos();

  return <div>github projects</div>;
};
