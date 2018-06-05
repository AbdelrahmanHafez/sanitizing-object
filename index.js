const sanitizeObject = ({ object, properties, whitelist, blacklist }) => {
  if ((Boolean(whitelist) === Boolean(blacklist)) || (whitelist === undefined && blacklist === undefined)) {
    throw new Error('You have to pick either blacklist or whitelist.');
  }

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      let removalCondition = whitelist ? !properties.includes(key) : properties.includes(key);
      if (removalCondition) delete object[key];
    }
  }
};

let objectSentByUser;


// whitelist
objectSentByUser = {
  a: 'Hello',
  b: 'Hi there',
  c: 'Node is fun'
};

let allowedProperties = ['a', 'b'];
sanitizeObject({ object: objectSentByUser, properties: allowedProperties, whitelist: true });
console.log(objectSentByUser); // { a: 'Hello', b: 'Hi there' }


// blacklist
objectSentByUser = {
  a: 'Hello',
  b: 'Hi there',
  c: 'Node is fun'
};
let propertiesToRemove = ['a'];
sanitizeObject({ object: objectSentByUser, properties: propertiesToRemove, blacklist: true });
console.log(objectSentByUser); // { b: 'Hi there', c: 'Node is fun' }
