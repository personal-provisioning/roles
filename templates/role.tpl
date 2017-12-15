---
- block:

    - name: Install <%= name %>
      <%= packageManager %>: name=<%= packageName %> state=present
      <% if (onlyOSX) {%>when: ansible_os_family == 'Darwin'<% } %>

  tags: <%= name %>
