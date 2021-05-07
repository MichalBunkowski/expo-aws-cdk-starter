import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Cloud from './cloud-stack';

describe("cloud-stack", () => {
  it('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Cloud.Stack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
  });
});