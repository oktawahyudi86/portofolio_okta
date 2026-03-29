#!/usr/bin/env node

/**
 * OktaAI Chat Integration Test Script
 * Tests API endpoints, data flow, and fallback mechanisms
 */

import fetch from 'node-fetch';
import chalk from 'chalk';

const API_BASE = process.env.API_BASE || 'http://localhost:3000';
const TEST_TIMEOUT = 10000;

// Color helpers
const success = (text) => chalk.green(`✓ ${text}`);
const error = (text) => chalk.red(`✗ ${text}`);
const info = (text) => chalk.blue(`ℹ ${text}`);
const warn = (text) => chalk.yellow(`⚠ ${text}`);

let passedTests = 0;
let failedTests = 0;

// Test utilities
async function testAPI(name, requestData, expectedFields = []) {
  console.log(`\nTesting: ${name}`);
  console.log(`Endpoint: POST ${API_BASE}/api/chat`);
  console.log(`Payload: ${JSON.stringify(requestData)}`);

  try {
    const response = await fetch(`${API_BASE}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData),
      timeout: TEST_TIMEOUT,
    });

    if (!response.ok) {
      console.log(error(`HTTP ${response.status}`));
      failedTests++;
      return null;
    }

    const data = await response.json();
    console.log(info(`Response received`));

    // Check required fields
    for (const field of expectedFields) {
      if (!(field in data)) {
        console.log(error(`Missing field: ${field}`));
        failedTests++;
        return null;
      }
    }

    console.log(success(`All checks passed`));
    console.log(`Response preview: ${data.text.substring(0, 100)}...`);
    console.log(`Provider: ${data.provider}`);
    console.log(`Fallback: ${data.fallback}`);
    passedTests++;
    return data;
  } catch (err) {
    console.log(error(`${err.message}`));
    failedTests++;
    return null;
  }
}

// Main test suite
async function runTests() {
  console.log(chalk.bold.blue('\n=== OktaAI Chat Integration Tests ===\n'));
  console.log(`API Base: ${API_BASE}`);
  console.log(`Timeout: ${TEST_TIMEOUT}ms\n`);

  // Test 1: Health check
  console.log(chalk.bold('\n[1/5] Health Check'));
  try {
    const response = await fetch(`${API_BASE}/api/health`);
    if (response.ok) {
      console.log(success('Health check passed'));
      passedTests++;
    } else {
      console.log(warn('Health endpoint returned non-200'));
    }
  } catch (err) {
    console.log(warn(`Health check failed: ${err.message}`));
  }

  // Test 2: Basic chat request
  console.log(chalk.bold('\n[2/5] Basic Chat Request'));
  await testAPI('Simple greeting', {
    messages: [{ role: 'user', text: 'Siapa itu Okta?' }],
  });

  // Test 3: Multi-message conversation
  console.log(chalk.bold('\n[3/5] Multi-Message Conversation'));
  await testAPI('Conversation with history', {
    messages: [
      { role: 'user', text: 'Siapa itu Okta?' },
      {
        role: 'assistant',
        text: 'Okta adalah seorang IT Project Manager...',
      },
      { role: 'user', text: 'Apa skills teknis Okta?' },
    ],
  });

  // Test 4: Error handling - invalid request
  console.log(chalk.bold('\n[4/5] Error Handling - Invalid Request'));
  try {
    const response = await fetch(`${API_BASE}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ invalidField: 'test' }),
      timeout: TEST_TIMEOUT,
    });

    const data = await response.json();
    if (data.error || response.status === 400) {
      console.log(success('Invalid request properly rejected'));
      passedTests++;
    } else {
      console.log(error('Invalid request should be rejected'));
      failedTests++;
    }
  } catch (err) {
    console.log(error(`Error handling test failed: ${err.message}`));
    failedTests++;
  }

  // Test 5: Different question types
  console.log(chalk.bold('\n[5/5] Different Question Types'));

  const questions = [
    { role: 'user', text: 'Apa pengalaman kerja Okta?' },
    { role: 'user', text: 'Cerita tentang project Okta' },
    { role: 'user', text: 'Bagaimana saya bisa menghubungi Okta?' },
  ];

  for (const q of questions) {
    await testAPI(`Question: "${q.text.substring(0, 30)}..."`, {
      messages: [q],
    });
  }

  // Summary
  console.log(chalk.bold.blue('\n=== Test Summary ===\n'));
  console.log(`${success(`Passed: ${passedTests}`)}`);
  console.log(`${error(`Failed: ${failedTests}`)}`);
  console.log(
    `Total: ${passedTests + failedTests}\n`
  );

  if (failedTests === 0) {
    console.log(
      chalk.bold.green(
        '\nAll tests passed! OktaAI integration is working correctly.\n'
      )
    );
    process.exit(0);
  } else {
    console.log(
      chalk.bold.red('\nSome tests failed. Please review the output above.\n')
    );
    process.exit(1);
  }
}

// Run tests
runTests().catch((err) => {
  console.log(error(`Fatal error: ${err.message}`));
  process.exit(1);
});
