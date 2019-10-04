var btoa = require('btoa');

/*var memberNumber = ls.get("MemberID");*/
/*ls.set("MemberID", "300000176112379");  */

loyalty = {
	environment : "ucf1-zgjv-fa-ext",
	username : "george.grant",
	password : process.env.envPassword,
	loyaltyProgram : "Programa de Fidelidade",
	pointType : "Pontos"
};

commerce = {
	environment : "ccstore-za6a",
	productCollection : "ofertas"
};

engagement ={
	environment : "ucf1-zgjv-fa-ext",
	username : "george.grant",
	password : process.env.envPassword
}

basicAuth = function (subject){
	return btoa(eval(subject+'.username')+":"+eval(subject+'.password'));
}


module.exports = {
	loyalty : loyalty,
	commerce : commerce,
	basicAuth : basicAuth
}



