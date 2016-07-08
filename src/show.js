define(["./sum.js"],function(sum){
	function show(){
		console.log(sum(1,2));
	}
	return {
		show : show
	};
})