(function(){

	window.linkApp =  linkApp || {
		Models:{},
		Collections:{},
		Views:{}
	};

	//Collection
	linkApp.Collections.Links = Backbone.Collection.extend({
		model: linkApp.Models.Link
	});

	//temp data for development
	linkApp.Collections.Links = new linkApp.Collections.Links([
		{
			title:'MDN with', 
			description:'use of with for presentation', 
			url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with",
			tags:'JavaScript'
		},
		{
			title:'MDN eval', 
			description:'use of with for presentation', 
			url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with",
			tags:'JavaScript'
		},
		{
			title:'MDN null', 
			description:'use of with for presentation', 
			url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",
			tags:'JavaScript'
		}
	]);

	//initiate a new view that would be used for creating new link
	var addLinkView = new linkApp.Views.AddLink({collection:linkApp.Collections.Links});
	var allLinkView = new linkApp.Views.Links({collection: linkApp.Collections.Links});
	
	//push to body to display
	$('.links').append(allLinkView.render().el);


})();

//utility. Validate url. Grabbed from http://stackoverflow.com/questions/4314741/url-regex-validation
function isURLValid(url){
	return /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/.test(url);
}