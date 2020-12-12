import { useState, useEffect } from "react";
import { GithubRepo } from "../shared/typedefs";

export function useRepos() {
  const [repos, setRepos] = useState<GithubRepo[]>([] as GithubRepo[]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  console.log("kek");

  useEffect(() => {
    setLoading(true);

    fetch("https://api.github.com/users/michalStarski/repos")
      .then(response => response.json())
      .then(data => {
        setRepos(data);
      })
      .catch(e => setError(e))
      .finally(() => setLoading(false));
  }, []);

  return [repos, loading, error];
}
