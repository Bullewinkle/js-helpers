// is arrays equal recursive
Array.prototype.equals = function (array) {
	if (!array)
		return false;

	if (this.length != array.length)
		return false;


	var isEqualObject = function (o1,o2){
		var o1Keys = Object.keys(o1);
		var o1Values = o1Keys.map(function(key,i){return o1[key]});
		var o2Keys = Object.keys(o2);
		var o2Values = o2Keys.map(function(key,i){return o2[key]});
		return o1Keys.equals(o2Keys) && o1Values.equals(o2Values);
	};

	for (var i = 0, l=this.length; i < l; i++) {
		if (this[i] instanceof Array && array[i] instanceof Array) {
			if (!this[i].equals(array[i]))
				return false;
		}
		else if (this[i] instanceof Object && array[i] instanceof Object) {
			if (!isEqualObject(this[i],array[i]))
				return false;
		}
		else if (this[i] != array[i]) {
			return false;
		}
	}
	return true;
};



/*
	make object with groups of unique words fron text;
	group name is first letter of group words,i.e. 
	res['s'] == ['sun','son','see'] 
*/
function makeObjectwithGroupsOfUniqueWords (startTxt) {

	function parseWords (txt='',separators) {

	    var separators = separators || " ,.!?:(){}\"'";
	    var regexpString = (()=>{
		return separators
					.split('')
					.map((s,i)=>{
						s = s.replace(' ','s');
				return `\\s*\\${s}\\s*`
				})
					.join('|');
	    })();
		let regExp = new RegExp(regexpString);

		return (txt)
			.split(regExp)
			.map(el=>el.trim().toLowerCase())
			.filter(el=>{
				return el.length && !~separators.indexOf(el);
			})
			;

	}

	function makeUniqueWords (arr=[]) {
		var groups = arr.reduce( (res,el='')=>{

			let firstChar = el[0];

			if (!(firstChar in res)) res[firstChar] = [];

			if (!(el in res[firstChar]))
				res[firstChar].push(el);

			return res;
		},{});
		return groups;
	}

	return parseWords( makeUniqueWords(startTxt) );

}

makeObjectwithGroupsOfUniqueWords('hello world, my dear own world. World . World! world?');
