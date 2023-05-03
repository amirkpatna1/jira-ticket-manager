// import { createIssue } from '../jira-ticket-creation';
// import { JiraTicketBuilder } from '../jira-ticket-creation/create-ticket/createTicketConfiguration';

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
    this.emailId = emailId;
    this.apiKey = apiKey;
    JiraManager.jiraManagerInstance = this;
  }

  createTicketConfigs() {
    // return new JiraTicketBuilder();
  }
  async createJiraTicket(ticketConfigs) {
    try {
      // await createIssue(ticketConfigs, this);
    } catch (error) {}
  }
}

export { JiraManager };
