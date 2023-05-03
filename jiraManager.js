const {createIssue,getIssue} = require('./jira-ticket-creation/index');
const {JiraTicketBuilder} = require('./jira-ticket-creation/JiraTicketBuilder');
// make this a singleton class

class JiraManager {
  static jiraManagerInstance = false;
  constructor(domain, emailId, apiKey) {
    if (JiraManager.jiraManagerInstance) {
      return JiraManager.jiraManagerInstance;
    }
    if (!domain) {
      throw new Error('domain cannot be empty');
    }
    if (!emailId) {
      throw new Error('Email Id cannot be empty');
    }
    if (!apiKey) {
      throw new Error('Api key cannot be empty');
    }
    this.domain = domain;
    this.emailId = emailId;
    this.apiKey = apiKey;
    JiraManager.jiraManagerInstance = this;
  }

  createTicketConfigs() {
    return new JiraTicketBuilder();
  }
  async createJiraTicket(ticketConfigs = JiraTicketBuilder) {
    try {
      await createIssue(ticketConfigs, this);
    } catch (error) {}
  }
  async getJiraIssue(issueId) {
    try {
      const res = await getIssue(issueId,this);
      return res;
    } catch(error) {
      console.error(error);
    }
  }
}

module.exports =  { JiraManager };
