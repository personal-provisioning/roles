var _ = require('lodash');
var fs = require('fs');
var inquirer = require('inquirer');
var mkdirp = require('mkdirp');

var tpl = _.template(fs.readFileSync('./templates/role.tpl', 'utf-8'));

inquirer.prompt([{
  name: 'name',
  message: 'What is the name of your role?'
}, {
  name: 'type',
  message: 'What is it?',
  type: 'list',
  choices: [
    'applications',
    'basics',
    'development',
    'development_mobile',
  ],
  default: 'applications',
}, {
  name: 'packageManager',
  message: 'How do you install it?',
  type: 'list',
  choices: [
    'homebrew',
    'homebrew_cask',
    'npm',
    'mas',
  ],
  default: 'homebrew_cask',
}, {
  name: 'packageName',
  message: 'What is the name of the package?'
}, {
  name: 'onlyOSX',
  message: 'Does it work only on OSX?',
  type: 'confirm',
  default: true,
}]).then(function (answers) {
    var {
      name,
      type,
      packageName,
      packageManager
    } = answers;

    if (name === '') {
      throw new Error('Name seems to be missing');
    }

    if (type === "") {
      throw new Error("Type seems to be missing");
    }

    if (packageName === "") {
      throw new Error("Package Name seems to be missing");
    }

    if (packageManager === "") {
      throw new Error("Package Manager seems to be missing");
    }

    var dir = './' + type + '/' + name + '/tasks';
    
    if (packageManager === 'mas') {
      tpl = _.template(fs.readFileSync('./templates/mas.tpl', 'utf-8'));
    }

    mkdirp.sync(dir);
    fs.writeFileSync(dir + '/main.yml', tpl(answers));
    console.log('Done! Please look at the role in ', dir);
});