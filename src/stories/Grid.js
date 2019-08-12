import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import withThemeProvider from './withThemeProvider';
import { Breakpoints } from '../Grid';
import BreakPointNotes  from '../Grid/BreakpointNotes.md';



storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .add('Breakpoints', () => {
      const xs = number('xs', 12),
            sm = number('sm', 6),
            md = number('md', 3);
      return (<Breakpoints xs={xs} sm={sm} md={md} />)
  }, {notes: { markdown: BreakPointNotes }});