const assert = require('chai').assert;
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Modal Tests', function() {
  let dom;
  let document;
  let errorModal;

  before(function(done) {
    const htmlPath = path.resolve(__dirname, '../index.html'); // Adjust path as needed
    const html = fs.readFileSync(htmlPath, 'utf-8');

    dom = new JSDOM(html, { runScripts: 'dangerously' });
    document = dom.window.document;

    // Retrieve error-modal element
    errorModal = document.getElementById('error-modal');

    dom.window.addEventListener('DOMContentLoaded', function() {
      done();
    });
  });

  it('contains a hidden modal', function() {
    assert.isNotNull(errorModal, 'error-modal should exist');
    assert.isTrue(errorModal.classList.contains('hidden'), 'error-modal should be hidden initially');
  });

  // Add more test cases as needed for other functionalities

});

