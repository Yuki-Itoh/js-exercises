// import { jest } from '@jest/globals';
import { createIssue } from '.';

test('github api', () => {
  jest.mock('node-fetch');

  createIssue('jest');
});
