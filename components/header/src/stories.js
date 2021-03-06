import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import Header, { H1, H2, H3, H4, H5, H6 } from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/Header', module);
const examples = storiesOf('Typography/Header/Examples', module);
const headingRanges = {
  range: true,
  min: 1,
  max: 6,
  step: 1,
};

stories.addDecorator(withKnobs);
stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (<Header level={number('level', 6, headingRanges)}>{text('Children', 'Heading text')}</Header>));

examples.add('Levels 1-6', () => (
  <div>
    <Header level={1}>A 48px Bold heading</Header>
    <Header level={2}>A 36px Bold heading</Header>
    <Header level={3}>A 24px Bold heading</Header>
    <Header level={4}>A 19px Bold heading</Header>
    <Header level={5}>h5</Header>
    <Header level={6}>h6</Header>
  </div>
));
examples.add('Shortcuts 1-6', () => (
  <div>
    <H1>h1</H1>
    <H2>h2</H2>
    <H3>h3</H3>
    <H4>h4</H4>
    <H5>h5</H5>
    <H6>h6</H6>
  </div>
));
examples.add('Differing sizes', () => (
  <div>
    <Header level={6} size="XXLARGE">
      h6 with XXLARGE style
    </Header>
    <Header level={2} size="XSMALL">
      h2 with XSMALL style
    </Header>
    <H3 size="LARGE">h3 with size large</H3>
  </div>
));
examples.add('Props pass through', () => (
  <div>
    <Header onClick={action('header-click')}>Click me</Header>
  </div>
));
