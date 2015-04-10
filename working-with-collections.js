

//SORTBY _ METHOD
console.log('_.sortBy lodash method');
console.info('sort collection by item.name');
var collection = [
{ name: 'Moe' },
{ name: 'Andy' },
{ name: 'Harold' },
{ name: 'Brian' }
];
var result = _.sortBy(collection, function(item) {
return item.name;
});

console.log(result);
console.log('');




//SORTEDINDEX _ METHOD
console.log('_.sortedIndex lodash method');
console.info('add sortedIndex for realtime adding items to collection');
var collection = [
'Carl',
'Gary',
'Luigi',
'Otto'
];

var name = 'Luke';
collection.splice(_.sortedIndex(collection, name), 0, name);

console.log(collection);
console.log('');




// _.OMIT _ METHOD

console.log('_.omit lodash method');
console.info('skip keys that we don\'t want to deduce');
var items = [{id:1, name:'foo',lastName: 'Bane'}, 
             {id:2, name:'bar',lastName: 'Gomes'}, 
             {id:3, name:'baz',lastName: 'Torres'}, 
             {id:4, name:'qux',lastName: 'Robin'}];


var result = _.map(items, function(item) {
        return _.omit(item,'lastName');
    });
console.log(result);
console.log('');





//WHERE _ METHOD
console.log('_.Where lodash method');
console.info('filter items from collection of items with _.Where method');
var collection = [
 { name: 'Moe', age: 47, gender: 'm' },
 { name: 'Sarah', age: 32, gender: 'f' },
 { name: 'Melissa', age: 32, gender: 'f' },
 { name: 'Dave', age: 32, gender: 'm' }
];
var result = _.where(collection, { age: 32, gender: 'f' });
console.log(result);
console.log('');


//FILTER _ METHOD
console.log('_.filter lodash method');
console.info('Filter items from collection of items by boolean with _.filter method');
var collection = [
 { name: 'Sean', enabled: false },
 { name: 'Joel', enabled: true },
 { name: 'Sue', enabled: false },
 { name: 'Jackie', enabled: true }
];
var result = _.filter(collection, 'enabled');
console.log(result);
console.log('');



//REJECT _ METHOD
console.log('_.reject lodash method');
console.info('Reject items from collection that we dont want to add in our new array');
var collection = [
 { name: 'Ryan', enabled: true },
 { name: 'Megan', enabled: false },
 { name: 'Trevor', enabled: false },
 { name: 'Patricia', enabled: true }
];
var result = _.reject(collection, { enabled: false });
console.log(result);
console.log('');




//FIND _ METHOD 
console.log('_.find lodash method');
console.info('Find first occurence from collection that has defined property');
var collection = [
 { name: 'Derek', age: 37 },
 { name: 'Caroline', age: 35 },
 { name: 'Malcolm', age: 37 },
 { name: 'Hazel', age: 62 }
];
var result = _.find(collection, { age:37 });
console.log(result);
console.log('');




//FINDLAST _ METHOD
console.log('_.findLast lodash method');
console.info('Find last occurence from collection that has defined property');
var collection = [
 { name: 'Derek', age: 37 },
 { name: 'Caroline', age: 35 },
 { name: 'Malcolm', age: 37 },
 { name: 'Hazel', age: 62 }
];
var result = _.findLast(collection, { age:37 });
console.log(result);
console.log('');




//TAKE _ METHOD
console.log('_.take lodash method');
console.info('Take method provides abstractions on top of the native array slice()'+
	'work with both arrays and strings');
var array = [
 'Steve',
 'Michelle',
 'Rebecca',
 'Alan'
];
var takeResult = _.take(array, 2);
var takeRightResult = _.takeRight(array,2);      // Slice and create new array
var stringResult = _.take('Mike',2).join(''); // Slice and create new String
var stringRightResult = _.takeRight('Lyuda',2).join('');
   
console.log(takeResult);
console.log(takeRightResult);
console.log(stringResult);
console.log(stringRightResult);
console.log('');




//UNIQUE _ METHOD
console.log('_.unique lodash method');
console.info('Unique help us building unique arrays,collections with any duplicates removed:');
var collection = [
	 { first: 'Julie', last: 'Sanders' },
	 { first: 'Craig', last: 'Scott' },
	 { first: 'Catherine', last: 'Stewart' },
	 { first: 'Julie', last: 'Sanders' },
	 { first: 'Craig', last: 'Scott' },
	 { first: 'Janet', last: 'Jenkins' }
	];
var result = _.uniq(collection, function(item) {
return item.first + item.last;
});

console.log(result);
console.log('');




//SIZE _ METHOD
console.log('size lodash method');
console.info('size() return a length of the collection.'+
	'Function tells you how many keys an object has,which is the '+
	'intuitive behavior you\'d expect from an object,but isn\'t there by default');
var collection = [
 { name: 'Gloria' },
 { name: 'Janice' },
 { name: 'Kathryn' },
 { name: 'Roger' }
];
var first = _.first(collection);
console.log(first);
console.log(_.size(collection));
console.log(_.size(first)); 
console.log(_.size(first.name));
console.log('');



//EVERY _ METHOD
console.log('');
console.log('every lodash example');

var collection = [
 { name: 'Jonathan' },
 { first: 'Janet' },
 { name: 'Kevin' },
 { name: 'Ruby' }
];

if (!_.every(collection, 'name')) {
 console.log(new Error('Missing name property'));
}

console.log('');




//UNION INTERSECTION XOR _ METHODS
console.log('union(),intersection(),xor() lodash methods');
console.info('In a way, we\'re combining several collections into a single collection.' +
'The union()  function concatenates collections,with duplicate values removed.' +
'The intersection()  function builds a collection with values common to all the provided collections.' +
'Lastly, the xor()  function builds a collection that contains the differences between all provided collections.');
var css = [
 'Philip',
 'Donald',
 'Mark'
];
var sass = [
 'Gary',
 'Michelle',
 'Philip'
];
var less = [
 'Wayne',
 'Ruth',
 'Michelle'
];
var unionResult = _.union(css, sass, less);
var intersectionResult = _.intersection(sass, less);
var xor = _.xor(sass, less);
console.log(unionResult);
console.log(intersectionResult);
console.log(xor);
console.log('');




//FLATTEN _ METHOD
console.log('Flatten lodash method');
console.info('Flatten the array of objects from nested array to extract and throw away the unnecessary '+
'structure our component does not need.');
var collection = [
 { employer: 'Lodash', employees: [
 { name: 'Barbara' },
 { name: 'Patrick' },
 { name: 'Eugene' }
 ]},
 { employer: 'Backbone', employees: [
 { name: 'Patricia' },
 { name: 'Lillian' },
 { name: 'Jeremy' }
 ]},
 { employer: 'Underscore', employees: [
 { name: 'Timothy' },
 { name: 'Bruce' },
 { name: 'Fred' }
 ]}
];
var employees = _.flatten(_.pluck(collection, 'employees'));
var result = _.filter(employees, function(employee) {
return (/^[bp]/i).test(employee.name);
});
console.log(result);
console.log('');




//COMPACT _ METHOD
console.log('Compact lodash method');
console.info('We\'ll use compact() to remove the falsey values from flattened array ' +
'to just use it on a plain array that already exists,or just to take out the falsey values '+
'before it\'s filtered');


var collection = [
 { name: 'Sandra' },
 0,
 { name: 'Brandon' },
 null,
 { name: 'Denise' },
 undefined,
 { name: 'Jack' }
 ];

 var letters = [ 's', 'd', 'b' ],
 compact = _.compact(collection),
 result = [];
_.each(letters, function(letter) {
 result = result.concat(
_.filter(compact, function(item) {
 return _.startsWith(item.name.toLowerCase(), letter);
 })
 );
});
console.log(result);
console.log('');




//GROUPBY _ METHOD
console.log('_.groupBy-1 lodash method');
console.info('Items in collections are sometimes grouped implicitly.GroupBy returns object contains the original items '+
	'in modified collections they\'re in');
var collection = [
 { name: 'Lori', size: 'S' },
 { name: 'Johnny', size: 'M' },
 { name: 'Theresa', size: 'S' },
 { name: 'Christine', size: 'S' }
];
var result = _.groupBy(collection, 'size');
console.log(result);
console.log('');




console.log('_.groupBy-2 lodash method');
console.info('Testing collection for approximations using callback as second parameter(where). '+
'Keep in mind that callback functions return primitive types for keys.For any other values, '+
'the string working is returned. they can be used to quickly generate reports on the API data you\'re working with.');
var collection = [
 { name: 'Andrea', age: 20 },
 { name: 'Larry', age: 50 },
 { name: 'Beverly', age: 67 },
 { name: 'Diana', age: 39 }
];
var result = _.groupBy(collection, function(item) {
	return item.age > 65 ? 'retired' : 'working';
});
console.log(result);
console.log('');




//CHUNK _ METHOD
console.info('Splitting collections into chunks');
console.log('');
console.log('_.chunk lodash method');
console.info('The chunk() method is an easy way to split the processing of a really ' +
	'large collection into several smaller tasks.This gives the chance for the UI ' +
	'to update - render the pending DOM updates and processes the pending events.');
//A large collection is created and it's split into chunks of smaller collections.


function process(chunks, index) { //process() does some work with each chunk,until there are no chunks left.
var chunk = chunks[index];
if (_.isUndefined(chunk)) {
return;
}
console.log('doing expensive work ' + _.last(chunk));
_.defer(_.partial(process, chunks, ++index));
}
var collection = _.range(10000),				// range() function generates collection
size = Math.ceil(0.25 * collection.length);		// figuring out the chunk size based on a percentage of overall collection size
_.chunk(collection, size);						// chunk() split tha large collection into smaller ones
console.log(collection);				
console.log('');
