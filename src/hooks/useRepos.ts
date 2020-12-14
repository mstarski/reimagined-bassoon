import { useState, useEffect } from "react";
import { GithubRepo } from "../shared/typedefs";

/**
 * Hook to fetch repositories informations from my Github
 * @param ids If provided - get only repos with given ids
 */
export function useRepos(ids?: number[]) {
  const [repos, setRepos] = useState<GithubRepo[]>([] as GithubRepo[]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);

    fetch("https://api.github.com/users/michalStarski/repos")
      .then(response => response.json())
      .then(data => {
        let _data: GithubRepo[];

        if (ids) {
          _data = data.filter((repo: GithubRepo) => ids.includes(repo.id));
        } else {
          _data = data;
        }

        setRepos(_data);
      })
      .catch(e => setError(e))
      .finally(() => setLoading(false));
  }, [ids]);

  return [repos, loading, error];
}
