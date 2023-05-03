// Builder object
class JiraTicketBuilder {
  body = { fields: {}, update: {} };

  constructor(project) {
    this.body.fields.project = project;
  }

  addDevelopementOwnedBy(userId) {
    this.body.fields.customfield_10040 = { accountId: userId };
    return this;
  }

  addOwningTeam(teamId) {
    // ex for Infra Team teamId is 10032
    this.body.fields.customfield_10042 = { id: teamId };
    return this;
  }

  addQaAssignee(userId) {
    this.body.fields.customfield_10030 = { accountId: userId };
    return this;
  }

  addAssignee(userId) {
    this.body.fields.assignee = { accountId: userId };
    return this;
  }

  addDescription(text) {
    this.body.fields.description = {
      content: [
        {
          content: [
            {
              text,
              type: 'text',
            },
          ],
          type: 'paragraph',
        },
      ],
      type: 'doc',
      version: 1,
    };
    return this;
  }

  addIssueType(issueId) {
    // ex for Sub-task issueId is 10008
    this.body.fields.issuetype = { id: issueId };
    return this;
  }

  addParentTask(parentPRD) {
    // ex parentPRD can be PRD-2000
    this.body.fields.parent = { key: parentPRD };
    return this;
  }

  addPriority(priorityId) {
    // ex priorityId is 3 for Medium
    this.body.fields.priority = { id: priorityId };
    return this;
  }

  addProject(projectId = id, key = projectKey) {
    this.body.fields.project = {
      id: projectId,
      key,
    };
    return this;
  }

  addReporter(reporterId) {
    this.body.fields.reporter = { id: reporterId };
    return this;
  }

  addSummary(summary) {
    this.body.fields.summary = summary;
    return this;
  }

  getResult() {
    return JSON.stringify(this.body);
  }
}

export { JiraTicketBuilder };
