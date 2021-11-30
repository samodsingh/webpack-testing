// import _ from 'lodash';
function component() {
    const element = document.createElement('span');
     // Lodash, now imported by this script

    element.innerHTML = _.join(['world', 'testingh'], ' ');
    document.write("export file in index.js")
  
    return element;
  }
  
  document.body.appendChild(component(),);