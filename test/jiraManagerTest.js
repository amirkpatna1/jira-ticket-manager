const { expect } = require('chai');
const sinon = require('sinon');
const { JiraManager } = require('../jira-manager/jiraManager');

describe('JiraManager', function () {
  describe('constructor', function () {
    it('should throw an error if domain is not provided', function () {
      expect(() => new JiraManager()).to.throw('domain cannot be empty');
    });

    it('should throw an error if emailId is not provided', function () {
      expect(() => new JiraManager('mydomain')).to.throw('Email Id cannot be empty');
    });

    it('should throw an error if apiKey is not provided', function () {
      expect(() => new JiraManager('mydomain', 'myemail')).to.throw('Api key cannot be empty');
    });

    it('should return a singleton instance', function () {
      const instance1 = new JiraManager('mydomain', 'myemail', 'myapikey');
      const instance2 = new JiraManager('otherdomain', 'otheremail', 'otherapikey');
      expect(instance1).to.equal(instance2);
    });
  });

  describe('createTicketConfigs', function () {
    it('should return a JiraTicketBuilder instance', function () {
      const jiraManager = new JiraManager('mydomain', 'myemail', 'myapikey');
      const result = jiraManager.createTicketConfigs();
      expect(result).to.be.an.instanceOf(Object);
    });
  });


});
    
