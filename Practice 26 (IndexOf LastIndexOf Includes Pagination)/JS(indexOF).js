function getUrl(str) {
      let index = str.indexOf('"') || str.indexOf("'") || str.indexOf('`') ;
      let newStr = str.slice(index + 1, str.length - 2);
      console.log(newStr)
      return newStr;
    }
    function getProtocol(str) {
      let index = str.indexOf('://');
      let newStr = str.slice(0, index + 3);
      console.log(newStr)
      return newStr;
    }
function getDomain(str) {
      let index = str.lastIndexOf('://');
      let newStr = str.slice(index + 3);
      index = newStr.indexOf('/');
      if (index > 0) {
        newStr = newStr.slice(0, index);
      } else {
        index = newStr.indexOf('?');
        if (index > 0) {
          newStr = newStr.slice(0, index);
        }
        else {
          index = newStr.indexOf('#');
          if (index > 0) {
            newStr = newStr.slice(0, index);
          }
        }
      }
      console.log(newStr)
      return newStr;
    }
let getMark = function(str) {
      let index = str.indexOf('#');
      if (index > 0) {
        let newStr = str.slice(index);    
        console.log(newStr)
        return newStr;
      } else {
        console.log('закладки не было')
        return 'закладки не было';
      }
    }
let url = getUrl(`url("http://www.example.com/search?query=123#hash")`);
    let proc = getProtocol(url)
    let domain = getDomain(url)
    let mark = getMark(url)