import { Octokit } from "@octokit/core"

const octokit = new Octokit({
  auth: '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'
})

const getStargazers = async (owner: String, repo: String) => {
  const data = await octokit.request(`GET /repos/${owner}/${repo}/stargazers`, {
    owner: 'OWNER',
    repo: 'REPO'
  });
  return data;
}

export { getStargazers }