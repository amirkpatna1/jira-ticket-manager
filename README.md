
# Jira Ticket Manager

It manages jira ticket creation, updation and fetch through simplified js functions.




 


## Module Reference

#### Create Jira Manager instance

```javascript
const domain = 'Your domain'
const emailId = 'Your email Id'
const apiKey = 'Your api Key'
const jiraManagerInstance = new JiraManager(domain,emailId,apiKey)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `domain` | `string` | **Required**. Your domain |
| `emailId` | `string` | **Required**. Your email id |
| `apiKey` | `string` | **Required**. Your api key |

#### Create Jira ticket config for new ticket creation

```javascript
const configs = jiraManagerInstance.createTicketConfigs();
const body = configs.addAssignee('your assignee user id')
   .addDevelopementOwnedBy('your user id')
   .addQaAssignee('Qa assignee user id')
   .addOwningTeam('Owning team id')
   .addDescription('some description')
   .addIssueType('issue type id')
   .addParentTask('parent task key i.e JIRA-123')
   .addReporter('reporter user id')
   .addPriority('priority i.e 1')
   .addProject('project id','project key')
   .addSummary('See me creating tickets')
   .build();
const res = await jiraManagerInstance.createJiraTicket(body);
```


#### Get Jira ticket

```javascript
const issueId = 'Your issue id'
const res = await jiraManagerInstance.getJiraIssue(issueId);
```

