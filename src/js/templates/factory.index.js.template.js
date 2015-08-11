/**
 * Created by liubo on 15/8/11.
 */
import warning from 'react/lib/warning';

<% _.forEach(components, function (component) { %>
import <%= component %> from './<%= component %>';
<% }); %>

warning(false, 'Support for factories will be removed in v0.25, for details see https://github.com/react-bootstrap/react-bootstrap/issues/825');

export default {
<% _.forEach(components, function (component) { %>
  <%= component %>,
<% }); %>
}