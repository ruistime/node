import React from 'react';
import warning from 'react/lib/warning';
import <%= name %> from '../<%= name %>';

warning(false, 'Support for factories will be removed in v0.25, for details see https://github.com/react-bootstrap/react-bootstrap/issues/825');

export default React.createFactory(<%= name %>);