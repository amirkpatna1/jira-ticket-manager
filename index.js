import { JiraManager } from './jiraManager';

const a = new JiraManager('amir', 'amirkhan', 'apiKey');
const configs = a.createTicketConfigs();
a.createJiraTicket(configs);

// modulesToExport = { JiraManager };

module.exports = { JiraManager };
