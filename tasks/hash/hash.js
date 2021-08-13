function search(source, pattern) {
  if (pattern.length > source.length) {
    console.log('Такой подстроки точно нет!');
    return;
  }
  const found = [];
  let patternHash = getSumHash(pattern);
  let asterikPosition = getAsterikPosition(pattern);
  let windowHash;
  for (let i = 0; i < source.length - (pattern.length + 1); i++) {
    if (i === 0) {
      windowHash = getSumHash(source.slice(0, pattern.length));
      windowHash -= source.charCodeAt(asterikPosition);
    } else {
      windowHash -= source.charCodeAt(i - 1);
      windowHash += source.charCodeAt(i + pattern.length - 1);
      windowHash -= source.charCodeAt(i + asterikPosition);
      let isSuitable;
      if (windowHash === patternHash) {
        isSuitable = true;
        for (let j = 0; j < pattern.length; j++) {
          if (pattern[j] !== '*' && source[i + j] !== pattern[j]) {
            isSuitable = false;
            break;
          }
        }
        if (isSuitable) {
          found.push(i);
        }
      }
    }
    windowHash += source.charCodeAt(i + asterikPosition);
  }
  return found;
}

function getSumHash(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '*') continue;
    sum += str.charCodeAt(i);
  }
  return sum;
}

function getAsterikPosition(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '*') {
      return i;
    }
  }
}

console.log(search('Alibaba or Alibubab? I do not know!', 'b*b'))
