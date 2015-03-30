/**
 *
 * DemoData: A service for creating/reseting demo data
 *
 */

module.exports = {
	//DemoData.createFromScratch(); in sailes console
  run: function (  ) {

		var tasks = [];

	 /**
		* CREATE
		*/

		//create main user
		tasks.push(function(cb){
			User.create({"id" : "54e8cc422acb5e5b03d5c845","firstName" : "Kitten","lastName" : "Handsome"}).exec(cb);
		});

		//create fellow users
		tasks.push(function(cb){
			User.create([
				{"id" : "54ee20a72acb5e5b03d5c8a0","firstName" : "User2","lastName" : "User2"},
				{"id" : "54ee20a72acb5e5b03d5c8a1","firstName" : "User3","lastName" : "User3"},
				{"id" : "54ee20a72acb5e5b03d5c8a2","firstName" : "User4","lastName" : "User4"}
			]).exec(cb);
		});


		//create workgroup
		tasks.push(function(cb){
			Workgroup.create([{"id" : "54ee23b82acb5e5b03d5c8a3", "fullName":"Kittens club"}]).exec(cb);
		});


		/**
		*   UPDATE ASSOCIATIONS
		*/

		//update workgroup with members
		tasks.push(function(cb){
			Workgroup.update({id:"54ee23b82acb5e5b03d5c8a3"},{
				members:["54e8cc422acb5e5b03d5c845","54ee20a72acb5e5b03d5c8a0","54ee20a72acb5e5b03d5c8a1","54ee20a72acb5e5b03d5c8a2"]
			}).exec(cb);
		});

		async.series(tasks, function(){
			Workgroup.findOne("54ee23b82acb5e5b03d5c8a3").exec(function(err, group){
				console.log(group.members);
				console.log(group.members.length);
			});
		});
	}

};






