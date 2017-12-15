---
- block:

    - name: Searching in AppStore for <%= name %>
      shell: 'mas search <%= packageName %> | head -1 | awk '{print $1}''
      register: <%= packageName %>_id

    - name: Install <%= name %>
      command: mas install "{{ <%= packageName %>_id.stdout }}"

  tags: <%= name %>
  when: ansible_os_family == 'Darwin'
