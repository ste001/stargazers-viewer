import { Octokit } from "@octokit/core";
import { GITHUB_KEY } from "@env";

const octokit = new Octokit({
  auth: GITHUB_KEY,
});

const getStargazers = async (owner: string, repo: string, page: number) => {
  const data = await octokit.request(`GET /repos/${owner}/${repo}/stargazers`, {
    page,
  });
  return data;
};

export { getStargazers };
