import axios from 'axios';

const createIssue = async (ticketConfigs, jiraManagerInstance) => {
  console.log(jiraManagerInstance);
  const { emailId, apiKey } = jiraManagerInstance;
  console.log(domain,emailId, apiKey);
  const configForPostReq = {
    headers: {
      Authorization: `Basic ${Buffer.from(`${emailId}:${apiKey}`).toString(
        'base64'
      )}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  console.log(ticketConfigs);
  console.log(emailId);
  console.log(apiKey);
    axios
      .post(`https://${domain}.atlassian.net/rest/api/3/issue`, ticketConfigs, configForPostReq)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error.response);
      });
};

const getIssue = (issueId, jiraManagerInstance) => {
  const {domain, apiKey, emailId} = jiraManagerInstance;
  axios
    .get(`https://${domain}.atlassian.net/rest/api/3/issue/${issueId}`, {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${emailId}:${apiKey}`
        ).toString('base64')}`,
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      // handle success
      console.log(response.data);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

export { createIssue, getIssue };
