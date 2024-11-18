import dotenv from 'dotenv';

dotenv.config();

export function createIssue(title) {
  const url = 'https://api.github.com/repos/Yuki-Itoh/js-exercises/issues';

  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GAT}`,
    },
    body: JSON.stringify({ title: title }),
  }).then((response) => {
    console.log('response:', response);
  });
}

export function closeIssue(id) {
  const url = `https://api.github.com/repos/Yuki-Itoh/js-exercises/issues/${id}`;

  fetch(url, {
    method: 'PATCH',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GAT}`,
    },
    body: JSON.stringify({ state: 'closed' }),
  }).then((response) => {
    console.log('response:', response);
  });
}

export function listIssue() {
  const url = `https://api.github.com/repos/Yuki-Itoh/js-exercises/issues?state=open`;

  fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GAT}`,
    },
  }).then((response) => {
    response.json().then((issues) => {
      const simpleIssues = issues.map((issue) => {
        return { id: issue.number, title: issue.title, state: issue.state };
      });
      console.table(simpleIssues);
    });
  });
}
