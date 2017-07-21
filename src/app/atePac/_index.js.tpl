<% _.forEach(withImport, function (fun) { %>
import './${ fun }';<%
})
%>

define([
  <% _.forEach(withDefine, function (fun) { %>"./${ fun }/${ fun }",
  <%  }) %>
], function() { });
