import { jest } from '@jest/globals';
import { createIssue } from '.';

global.fetch = jest.fn().mockImplementation(() => {
  console.log('mock fetch');
  return new Promise('');
});

test('github api', () => {
  createIssue('jest');
});
