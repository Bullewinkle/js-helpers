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
