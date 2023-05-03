// import axios from 'axios';
const axios = require('axios');

const createIssue = async (ticketConfigs, jiraManagerInstance) => {
  console.log(jiraManagerInstance);
  const {domain, emailId, apiKey } = jiraManagerInstance;
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
    try {
      const res = axios
      .post(`https://${domain}.atlassian.net/rest/api/3/issue`, ticketConfigs, configForPostReq);
      return res;
    } catch (error) {
      console.error(error);
    }
      
};

const getIssue = async (issueId, jiraManagerInstance) => {
  const {domain, apiKey, emailId} = jiraManagerInstance;
  try {
    const res = await axios
    .get(`https://${domain}.atlassian.net/rest/api/3/issue/${issueId}`, {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${emailId}:${apiKey}`
        ).toString('base64')}`,
        'Content-Type': 'application/json',
      },
    })
    return res;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { createIssue, getIssue };
