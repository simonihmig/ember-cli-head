'use strict';

const expect = require('chai').expect;
const setupTest = require('ember-fastboot-addon-tests').setupTest;

describe('FastBoot 1.0', function() {
  setupTest('fastboot', {
    // @todo remove this line once ember-cli-fastboot 1.0 is released.
    // For now we reference the fork of https://github.com/ember-fastboot/ember-cli-fastboot/pull/369
    emberCliFastbootVersion: 'kratiahuja/ember-cli-fastboot#build-test'
  });

  it('index page', function() {
    return this.visit('/')
      .then(function(res) {
        let $ = res.jQuery;
        let response = res.response;

        expect(response.statusCode).to.equal(200);
        expect($('h1').text().trim()).to.equal('Hello page');
        expect($('meta[property="og:title"]', 'head').attr('content')).to.equal('Hello page');
      });
  });

  it('other page', function() {
    return this.visit('/other-page')
      .then(function(res) {
        let $ = res.jQuery;
        let response = res.response;

        expect(response.statusCode).to.equal(200);
        expect($('h1').text().trim()).to.equal('Other page');
        expect($('meta[property="og:title"]', 'head').attr('content')).to.equal('Other page');
      });
  });

});