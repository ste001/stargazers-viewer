import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: "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",
});

const getStargazers = async (owner: string, repo: string, page: number) => {
  const data = await octokit.request(`GET /repos/${owner}/${repo}/stargazers`, {
    page,
  });
  return data;
};

export { getStargazers };
