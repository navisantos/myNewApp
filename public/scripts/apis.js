var memberNumber = localStorage.getItem('MemberID');
var environmentName = "newcoalision.herokuapp.com";

function basicAuth(){
    console.log("Basic Auth");
    return "am9obi5kdW5iYXI6bUxJODUzOTc=";
    
}

//Registro de Usuário
function registerUser(ContactFirstName,ContactLastName,EmailAddress,WorkPhoneNumber,ContactPassword, ReferredByNumber){

	console.log(ReferredByNumber);
	if(ReferredByNumber == ''){refNum = null;}
	else{refNum = "\""+ReferredByNumber+"\""}
	console.log(refNum);

	return $.ajax({
		"async": true,
		"crossDomain": true,
		"url":"https://"+environmentName+"/registerMember",
		"method":"POST",
		"headers":{
			"content-type":"application/json"
		},
		"dataType":"json",
		"data": "{\r\n\"ContactFirstName\": \""+ContactFirstName+"\",\r\n\"ContactLastName\": \""+ContactLastName+"\",\r\n\"EmailAddress\": \""+EmailAddress+"\",\r\n\"WorkPhoneNumber\": \""+WorkPhoneNumber+"\",\r\n\"ContactPassword\":\""+ContactPassword+"\",\r\n   \"ReferredByNumber\": "+refNum+"\r\n}"
	});
}

function popupError(errorType){
	document.getElementById('popupError').style.display='block';
	$(".popup-error-header").html('Encontramos um Erro');
	$(".popup-error-desc").html(errorType);
}

/*GET MEMBER INFORMATION*/
function getMember(){
	return 	$.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+environmentName+"/getMember/"+memberNumber,
		"method": "GET",
		"headers": {
			"content-type":"application/json"
		}

	})
}

/*GET MEMBER BALANCE*/
function getMemberBalance(){
	return 	$.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+environmentName+"/getMemberBalance/"+memberNumber,
		"method": "GET",
		"headers": {
			"content-type":"application/json"
		}

	})
}


/*REDEEM POINTS - doing*/
function redeemMemberPoints(memberNum, product, amount, pointsRedeem){
	return 	$.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+environmentName+"/createTransaction/",
		"method": "GET",
		"headers": {
			"content-type":"application/json"
		},
		"dataType":"json",
		"data": "{\r\n\"MemberNumber\": \""+memberNum+"\",\r\n\"TypeCode\": \"ORA_TXN_RED\",\r\n\"SubTypeCode\": \"ORA_RED_PROD\",\r\n\"ProductNumber\": \""+product+"\",\r\n \"AmountValue\": "+amount+",\r\n\"Points\": \""+pointsRedeem+"\",\r\n  \"Comments\": \""+null+"\"\r\n}"

	})
}

/*MemberNumber
ProgramName

TypeCode
SubTypeCode

ProductNumber
AmountValue

Points

Comments*/


/*REDEEM POINTS - doing*/
/*Example: redeemPoints("300000176076197", "Bitz", "Crédito de R$100,00 em compras na Etna", "100", "1")*/
function redeemPoints(memberNum, pointType, product, amount, pointsRedeem){
	return $.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+environment+".oracledemos.com/crmRestApi/resources/latest/loyTransactions",
		"method": "POST",
		"headers": {
			"Content-Type": "application/vnd.oracle.adf.resourceitem+json",
			"Content-Language": "en",
			"Authorization": "Basic "+basicAuth()+""
		},
		"data": "{\r\n\"MemberNumber\": \""+memberNum+"\",\r\n\"ProgramName\": \""+loyaltyProgram+"\",\r\n\"TypeCode\": \"ORA_TXN_RED\",\r\n\"SubTypeCode\": \"ORA_RED_PROD\",\r\n\"PointTypeName\": \""+pointType+"\",\r\n\"ProductNumber\": \""+product+"\",\r\n \"AmountValue\": "+amount+",\r\n\"Points\": \""+pointsRedeem+"\"\r\n}"
	})
}












/*CREATE TRANSACTION*/
function createTransaction(transactionType, transactionSubType, memberNum, pointType, amount, comments){
	return $.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+environment+".oracledemos.com/crmRestApi/resources/latest/loyaltyTransactions",
		"method": "POST",
		"headers": {
			"Content-Type": "application/vnd.oracle.adf.resourceitem+json",
			"Content-Language": "en",
			"Authorization": "Basic "+basicAuth()+""
		},
		"data": "{\r\n  \"MemberNumber\": \""+memberNum+"\",\r\n  \"ProgramName\": \""+loyaltyProgram+"\",\r\n  \"TypeCodeName\": \""+transactionType+"\",\r\n  \"PointTypeName\": \""+pointType+"\",\r\n  \"AmountValue\": "+amount+",\r\n  \"SubTypeName\": \""+transactionSubType+"\",\r\n  \"QualifyingPointUsed\": \"Y\",\r\n  \"Comments\": \""+comments+"\"\r\n}"
	})
}

//check
function createTransaction18C(transactionType, transactionSubType, memberNum, pointType, amount, comments){
	return $.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+environment+".oracledemos.com/crmRestApi/resources/latest/loyTransactions",
		"method": "POST",
		"headers": {
			"Content-Type": "application/vnd.oracle.adf.resourceitem+json",
			"Content-Language": "en",
			"Authorization": "Basic "+basicAuth()+""
		},
		"data": "{\r\n  \"MemberNumber\": \""+memberNum+"\",\r\n  \"ProgramName\": \""+loyaltyProgram+"\",\r\n  \"QualifyingPointUsed\": \"Y\",\r\n  \"TypeCode\": \""+transactionType+"\",\r\n  \"PointTypeName\": \""+pointType+"\",\r\n  \"AmountValue\": "+amount+",\r\n  \"SubTypeCode\": \""+transactionSubType+"\",\r\n  \"Comments\": \""+comments+"\"\r\n}"
	})
}

/*CREATE TRANSACTION DATA FOR BITZ*/
function createTransactionFake(transactionType, transactionSubType, memberNum, pointType, amount, comments, points){
	return $.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+environment+".oracledemos.com/crmRestApi/resources/latest/loyTransactions",
		"method": "POST",
		"headers": {
			"Content-Type": "application/vnd.oracle.adf.resourceitem+json",
			"Content-Language": "en",
			"Authorization": "Basic "+basicAuth()+""
		},
		"data": "{\r\n  \"MemberNumber\": \""+memberNum+"\",\r\n  \"ProgramName\": \""+loyaltyProgram+"\",\r\n  \"QualifyingPointUsed\": \"Y\",\r\n  \"TypeCode\": \""+transactionType+"\",\r\n  \"PointTypeName\": \""+pointType+"\",\r\n  \"AmountValue\": "+amount+",\r\n \"Points\":  \""+points+"\", \r\n  \"SubTypeCode\": \""+transactionSubType+"\",\r\n  \"Comments\": \""+comments+"\"\r\n}"

	})
}

/*GET TRANSACTIONS FROM MEMBER*/
//check
function getTransaction(memberNum){
	return $.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+environment+".oracledemos.com/crmRestApi/resources/latest/loyMembers/"+memberNum+"/child/MemberTransactions/",
		"method": "GET",
		"headers": {
			"Authorization": "Basic am9obi5kdW5iYXI6bUxJODUzOTc="
		}
		})
}



/*REDEEM POINTS - doing*/
/*Example: redeemPoints("300000176076197", "Bitz", "Crédito de R$100,00 em compras na Etna", "100", "1")*/
function redeemPoints(memberNum, pointType, product, amount, pointsRedeem){
	return $.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+environment+".oracledemos.com/crmRestApi/resources/latest/loyTransactions",
		"method": "POST",
		"headers": {
			"Content-Type": "application/vnd.oracle.adf.resourceitem+json",
			"Content-Language": "en",
			"Authorization": "Basic "+basicAuth()+""
		},
		"data": "{\r\n\"MemberNumber\": \""+memberNum+"\",\r\n\"ProgramName\": \""+loyaltyProgram+"\",\r\n\"TypeCode\": \"ORA_TXN_RED\",\r\n\"SubTypeCode\": \"ORA_RED_PROD\",\r\n\"PointTypeName\": \""+pointType+"\",\r\n\"ProductNumber\": \""+product+"\",\r\n \"AmountValue\": "+amount+",\r\n\"Points\": \""+pointsRedeem+"\"\r\n}"
	})
}

/*TRANSFER POINTS*/
/*transferPoints('300000176077636', '300000176077711', '2')*/
function transferPoints(fromMemberNum, toMemberNum, transferValue){
	return $.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+environment+".oracledemos.com/crmRestApi/resources/latest/loyTransactions",
		"method": "POST",
		"headers": {
			"Content-Type": "application/vnd.oracle.adf.resourceitem+json",
			"Content-Language": "en",
			"Authorization": "Basic "+basicAuth()+""
		},
		"data": "{\r\n\"MemberNumber\": \""+fromMemberNum+"\",\r\n\"ProgramName\": \""+loyaltyProgram+"\",\r\n\"TypeCode\": \"ORA_TXN_RED\",\r\n\"SubTypeCode\": \"ORA_RED_TRAN\",\r\n\"PointTypeName\":\""+pointType+"\",\r\n\"AmountValue\":1,\r\n\"Points\": \""+transferValue+"\",\r\n\"ToMemberNumber\": \""+toMemberNum+"\"\r\n}"
	})
}



//DUMB TRANSACTION
function dumbTransaction(memberNum){
	if(memberNum == null){memberNum = memberNumber;}
	return new Promise(function(resolve,reject) {
		createTransaction18C("ORA_TXN_ACC", "ORA_ACC_MCR", memberNum, pointType, "0", "").done(function(res){
			resolve(res);
		}).fail(function(err){
			createTransaction18C("ORA_TXN_ACC", "ORA_ACC_MCR", memberNum, pointType, "0", "");
			reject(err);
		});
	})
}

/*GET TRANSACION VOUCHERS*/
/*Example: getLastMemberVouchersInfo('300000176077255');*/
function getLastMemberVouchersInfo(transactionNumber){	
	return $.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+environment+".oracledemos.com/crmRestApi/resources/latest/loyTransactions/"+transactionNumber+"/child/Vouchers",
		"method": "GET",
		"headers": {
			"authorization": "Basic "+basicAuth()+""
		}
	});
}

/*CREATE HOUSEHOLD*/
function createHousehold(name){
	return $.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+environment+".oracledemos.com/crmRestApi/resources/latest/households/",
		"method": "POST",
		"headers": {
			"authorization": "Basic "+basicAuth()+"",
			"content-type": "application/json"
		},
		"processData": false,
		"data": "{\n\t\"HouseholdName\": \""+name+"\"\n}"
	})
}

/*GET HOUSEHOLD*/
function getHousehold(name){
	return $.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+environment+".oracledemos.com/crmRestApi/resources/latest/households/647313",
		"method": "GET",
		"headers": {
			"authorization": "Basic "+basicAuth()+"",
		}
	})
}


/*UPDATE HOUSEHOLD*/
function updateHousehold(PartyNumberKey,householdOwnerID, newMemberID){
	return $.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+environment+".oracledemos.com/crmRestApi/resources/latest/households/"+PartyNumberKey+"/child/Relationship",
		"method": "POST",
		"headers": {
			"authorization": "Basic "+basicAuth()+"",
			"content-type": "application/json"
		},
		"processData": false,
		"data": "{\n        \"PartyId\": "+householdOwnerID+",\n        \"SubjectPartyId\": "+newMemberID+",\n        \"SubjectTableName\": \"HZ_PARTIES\",\n        \"SubjectType\": \"PERSON\",\n        \"Role\": \"CHILD\"\n}"
	})
}

/*

create
{
"HouseholdName": "Grupo do Renan"
}

getHousehold
PartyNumberKey

getMember
PrConId

update
"PartyId": 300000176078057, //Primary Contact
"SubjectPartyId": 300000176078042,
"SubjectTableName": "HZ_PARTIES",
"SubjectType": "PERSON",
"Role": "CHILD"


households/647302/child/Relationship
{
	"SubjectPartyId" : "300000176078057",//SubjectPartyId
	"SubjectTableName" : "HZ_PARTIES", //SubjectTableName
	"SubjectType" : "PERSON", //SubjectType
	"RelationshipType": "HOUSEHOLD",
	"RelationshipCode": "ORA_CHILD_IN"
}*/


/*GET MEMBER INFORMATION*/
//checking
function getMemberPoints(info){
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://"+environment+".oracledemos.com/crmRestApi/resources/latest/loyaltyMembers/"+memberNumber+"",
		"method": "GET",
		"headers": {
			"authorization": "Basic "+basicAuth()+""
		}
	}

	switch(info){
		case "tier":
		$.ajax(settings).done(function (response) {
/*				document.getElementsByClassName("level-val")[0].innerHTML = response.TierName;
				
				//O Ambiente ecor está com problema na API
				if(response.TierName == null){
  					document.getElementsByClassName("level-val")[0].innerHTML = "Intermediate";
  				}*/
  			})
		break;
		case "balance":
		$.ajax(settings).done(function (response) {
			document.getElementsByClassName("points-val")[0].innerHTML = response.PointTypeAAvlVal;


		})
		break;
		case "NBO":
		$.ajax(settings).done(function (response) {
			/*$(".NBO").addClass("hide");*/
			//console.log(eval("response."+NBO));
			if(eval("response."+NBO) == 1){$("#cardNBO1").removeClass("hide")}
				if(eval("response."+NBO) == 6){$("#cardNBO6").removeClass("hide")}
					if(eval("response."+NBO) == 7){$("#cardNBO7").removeClass("hide")}
						if(eval("response."+NBO) == 2){$("#creditcardNBO").removeClass("hide")}
							if(eval("response."+NBO) == 4){$("#lojaNBO").removeClass("hide")}
								if(eval("response."+NBO) == 5){$("#surveyNBO").removeClass("hide")}
						//console.log(response);
				})
		break;
		case "ThirdVoucher17D":
		$.ajax(settings).done(function (response) {
			if(response.PointTypeFVal == 1){
				document.getElementById("Mc BigTasty").classList.remove("color_disabled");
				document.getElementById("Mc BigTasty").classList.remove("secret");
			}
		})
		break;
		default:
		return $.ajax(settings);
		break;
	}
}

/*GET SPECIFIC MEMBER INFORMATION*/
function getSpecificMember(memberID){
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://"+environment+".oracledemos.com/crmRestApi/resources/latest/loyaltyMembers/"+memberID+"",
		"method": "GET",
		"headers": {
			"authorization": "Basic "+basicAuth()+""
		}
	}
	return $.ajax(settings);
}

function getSpecificMemberBalance(memberID){	
	return $.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+environment+".oracledemos.com/crmRestApi/resources/latest/loyMembers/"+memberID+"/child/pointbalances",
		"method": "GET",
		"headers": {
		"authorization": "Basic "+basicAuth()+"",
		"content-type": "application/vnd.oracle.adf.resourceitem+json"
		}
	});
}



/*GET MEMBER VOUCHERS INFO*/
function getMemberVouchersInfo(){	
	return $.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+environment+".oracledemos.com/crmRestApi/resources/latest/loyaltyMembers/"+memberNumber+"/child/MemberVouchers",
		"method": "GET",
		"headers": {
			"authorization": "Basic "+basicAuth()+""
		}
	});
}

/*GET MEMBER REFERRALS*/
function getMemberReferrals(){	
	return $.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+environment+".oracledemos.com/crmRestApi/resources/latest/loyaltyMembers/"+memberNumber+"/child/MemberReferrals",
		"method": "GET",
		"headers": {
			"authorization": "Basic "+basicAuth()+""
		}
	});
}

/*GET SPECIFIC VOUCHERS*/
/*Example: getSpecificVoucher("300000176077312").then(function(res){console.log(res)})*/
function getSpecificVoucher(voucherNumber){	
	return $.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+environment+".oracledemos.com/crmRestApi/resources/latest/loyMembers/"+memberNumber+"/child/vouchers/"+voucherNumber,
		"method": "GET",
		"error": function(xhr, status, error){console.log(xhr.status +" - "+status+" - "+error)},
		"headers": {
			"authorization": "Basic "+basicAuth()+""
		}
	});
}


/*GET MEMBER INFORMATION 18C*/
function getMemberPoints18C(){
	return $.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+environment+".oracledemos.com/crmRestApi/resources/latest/loyMembers/"+memberNumber+"",
		"method": "GET",
		"error": function(xhr, status, error){popupError(xhr.status+" - "+error);console.log(xhr);console.log(status);console.log(error)},
		"headers": {
			"authorization": "Basic "+basicAuth()+"",
			"content-type": "application/vnd.oracle.adf.resourceitem+json"
		}
	})
}

//ASSIGN VOUCHER TO A MEMBER
function AssignMemberVoucher(voucherType, memberNumber, qty){
	return $.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+environment+".oracledemos.com/crmRestApi/resources/latest/loyaltyVouchers",
		"method": "POST",
		"headers": {
			"Content-Type": "application/vnd.oracle.adf.resourceitem+json",
			"Authorization": "Basic "+basicAuth()+""
		},
		"data": "{\r\n   \"VoucherType\": \""+voucherType+"\",\r\n   \"MemberNumber\": \""+memberNumber+"\",\r\n   \"ExpirationDt\": \"2020-05-06T11:59:15+00:00\",\r\n   \"voucherStatus\": \"Available\",\r\n   \"Quantity\": "+qty+",\r\n   \"VoucherBasis\": \"Redemption\"\r\n}"		
	});
}

//UPDATE VOUCHER STATUS
function UpdateVoucherStatus(voucherID, voucherStatus){
	return $.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+environment+".oracledemos.com/crmRestApi/resources/latest/loyaltyVouchers/"+voucherID,
		"method": "PATCH",
		"headers": {
			"Content-Type": "application/vnd.oracle.adf.resourceitem+json",
			"Authorization": "Basic "+basicAuth()+""
		},
		"data": "{\r\n   \"voucherStatus\": \""+voucherStatus+"\"\r\n}"
	});
}




//REGISTER FRIEND MEMBER
//check
function registerFriendMember(firstName, lastName, cellphone, email, loyaltyProgram, refByNumber){
	return $.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+environment+".oracledemos.com/salesApi/resources/latest/loyaltyMembers",
		"method": "POST",
		"headers": {
			"authorization": "Basic "+basicAuth()+"",
			"content-type": "application/vnd.oracle.adf.resourceitem+json"
		},
		"dataType"  : "json",
		"data": "{\r\n   \"ProgramName\": \""+loyaltyProgram+"\",\r\n   \"ContactFirstName\": \""+firstName+"\",\r\n   \"ContactLastName\": \""+lastName+"\",\r\n   \"WorkPhoneNumber\": \""+cellphone+"\",\r\n   \"EmailAddress\": \""+email+"\",\r\n   \"ReferredByNumber\": \""+refByNumber+"\"\r\n}"

	})
}

function sendSMS(cel_num, mensagem){
  //var cel_num = "11997732486";
  //var mensagem = "Mensagem%20de%20testeGB7"
  return $.ajax({
  	"async": true,
  	"crossDomain": true,
  	"url": "https://www.paposms.com/webservice/1.0/send/?user=gianbiga%40gmail.com&pass=oracle123&numbers="+cel_num+"&message="+mensagem,
  	"method": "POST",
  	"headers": {
  		"authorization": "Basic QUMwNjNhYTNmNzcwMjA0ZGUxZWRlMWU0NDNlOWJmNjIwOTpjNDhiNTFkYmRkOTU4MzMzYWY5Y2QzMmZhNTQwNzk2NA=="
  	}
  })
}


//GET URL PARAMETERS
function getURLParameters(parameter){
	url_string = window.location.href;
	var url = new URL(url_string);
	var param = url.searchParams.get(parameter);
	return param;
}


/*LOADING*/
function showLoading(){
	document.getElementsByTagName("header")[0].classList.add("loading-background");
	document.getElementsByClassName("logo2")[0].classList.add("loading-logo");
	document.getElementsByClassName("loader")[0].classList.remove("hide");
	document.getElementsByClassName("loader__ball")[0].classList.remove("hide");
}
function hideLoading(){
	document.getElementsByTagName("header")[0].classList.remove("loading-background");
	document.getElementsByClassName("logo2")[0].classList.remove("loading-logo");
	document.getElementsByClassName("loader")[0].classList.add("hide");
	document.getElementsByClassName("loader__ball")[0].classList.add("hide");	
}


function hideshowByClass(className, method){
	switch(method){
		case 'hide':
		$("."+className).each(function(index,value){value.classList.add("hide");})
		break;
		case 'show':
		$("."+className).each(function(index,value){value.classList.remove("hide");})
		break;
	}
}

function hideshowById(idName, method){
	switch(method){
		case 'hide':
		$("#"+idName).each(function(index,value){value.classList.add("hide");})
		break;
		case 'show':
		$("#"+idName).each(function(index,value){value.classList.remove("hide");})
		break;
	}
}

function inputID(className){
	/*Alimenta IDs da SkillTree com os produtos definidos em environment.js*/
	var productsArray = [
	prod_1_1, prod_1_2, prod_1_3, prod_2_1, prod_2_2, prod_2_3, prod_3_1, prod_3_2, prod_3_3, prod_3_4, prod_4_1, prod_4_2, prod_4_3];

	$.each($("."+className), function(index,value){
		value.id = productsArray[index];
	});
}

/*Oracle Engagement Cloud APIs*/
function getAnswer(question){
	return 	$.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+environmentName+"/getAnswers/"+question,
		"method": "GET",
		"headers": {
			"content-type":"application/json"
		}

	}) 
}


/*Oracle Commerce Cloud APIs*/
/*Get Product From Specific Collection*/
function getOCCProductsFromCollection(collectionName){
	return $.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+OCCenvironment+".oracleoutsourcing.com/ccstoreui/v1/products?categoryId="+collectionName,
		"method": "GET",
		"headers": {
            "Authorization": "Basic YWRtaW46YWRtaW4="
		}
	})
}

/*Get Specific Product From Specific Collection*/
function getOCCSpecificProductFromCollection(collectionName, id){
	return $.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+OCCenvironment+".oracleoutsourcing.com/ccstoreui/v1/products?categoryId="+collectionName+"&q=id%20co%20%22"+id+"%22",
		"method": "GET",
		"headers": {
            "Authorization": "Basic YWRtaW46YWRtaW4="
		}
	})
}

//REGISTER MEMBER OCC
function registerOCC(firstName, lastName, password, email, loyaltyProgram){
	$.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+OCCenvironment+".oracleoutsourcing.com/ccstoreui/v1/profiles",
		"method": "POST",
		"headers": {
		},
		"dataType"  : "json",
		"data": "{\"email\":\"" + email + "\",\"password\":\"" + password + "\",\"firstName\":\"" + firstName + "\",\"lastName\":\"" + lastName + "\",\"receiveEmail\":\"no\",\"shippingAddresses\":[],\"locale\":\"en\",\"loyaltyMemberNumber\": \"" + loyaltyProgram + "\"}"
	}).done(function(res){
		//console.log("retorno: occ", res);
		dumbTransaction().then(function(data){location.href='voucher.html'});
	});
}

// LOGIN OCC
function insertCartOCC(productId) {
	var user = localStorage.getItem("email");
	var pass = localStorage.getItem("password");
	$.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://"+OCCenvironment+".oracleoutsourcing.com/ccstoreui/v1/login",
		"method": "POST",
		"headers": {
			"content-type": "application/x-www-form-urlencoded; charset=UTF-8"
		},
		"data": "grant_type=password&username=" + user + "&password="+pass
	}).done(function (response) {
		console.log( "respostaLogin: ", response);
		localStorage.setItem("access_token",response.access_token);    
		$.ajax({
			"async": true,
			"crossDomain": true,
			"url": "https://"+OCCenvironment+".oracleoutsourcing.com/ccstoreui/v1/orders/current",
			"method": "POST",
			"headers": {
				"Authorization": "Bearer " + response.access_token,
				"content-type": "application/json"
			},
			"data": "{\"shoppingCart\":{\"items\":[{\"productId\":\"" + productId + "\",\"quantity\":1,\"catRefId\":\"" + productId + "\",\"stockStatus\":true,\"stockState\":\"IN_STOCK\",\"commerceItemQuantity\":1,\"priceListGroupId\":\"defaultPriceGroup\"}]},\"op\":\"create\"}"
		}).done(function (response) {
			//console.log("respostaCart: ", response);
		});
	});
};



/*TESTE*/

var getProductsJSON = 
{
    "totalResults": 2,
    "offset": 0,
    "limit": 250,
    "links": [
        {
            "rel": "self",
            "href": "https://ccstore-za6a.oracleoutsourcing.com/ccstore/v1/products?categoryId=ofertas"
        }
    ],
    "category": {
        "longDescription": null,
        "route": "/ofertas/category/ofertas",
        "categoryImages": [],
        "displayName": "ofertas",
        "repositoryId": "ofertas",
        "active": true,
        "description": "ofertas",
        "id": "ofertas"
    },
    "items": [
        {
            "listVolumePrice": null,
            "excludeFromSitemap": false,
            "relatedProducts": null,
            "orderLimit": null,
            "onlineOnly": false,
            "listPrices": {
                "reaisB2C": 20.0,
                "defaultPriceGroup": 20.0
            },
            "type": null,
            "largeImageURLs": [
                "/ccstore/v1/images/?source=/file/v3350984041534298874/products/frete_renner.png&height=940&width=940"
            ],
            "listVolumePrices": {
                "reaisB2C": null,
                "defaultPriceGroup": null
            },
            "shippable": true,
            "addOnProducts": [],
            "primaryImageAltText": "Frete Grátis Na 1a Compra no Site",
            "id": "frete_renner",
            "brand": null,
            "parentCategories": [
                {
                    "repositoryId": "ofertas",
                    "fixedParentCategories": [
                        {
                            "repositoryId": "cat10002",
                            "fixedParentCategories": []
                        }
                    ]
                }
            ],
            "height": null,
            "defaultProductListingSku": null,
            "assetable": false,
            "unitOfMeasure": null,
            "primaryMediumImageURL": "/ccstore/v1/images/?source=/file/v3350984041534298874/products/frete_renner.png&height=475&width=475",
            "seoUrlSlugDerived": "Frete Grátis Na 1a Compra no Site",
            "weight": null,
            "active": true,
            "thumbImageURLs": [
                "/ccstore/v1/images/?source=/file/v3350984041534298874/products/frete_renner.png&height=100&width=100"
            ],
            "creationDate": "2019-09-04T23:04:37.000Z",
            "route": "/frete-gr%C3%A1tis-na-1a-compra-no-site/product/frete_renner",
            "relatedArticles": [],
            "mediumImageURLs": [
                "/ccstore/v1/images/?source=/file/v3350984041534298874/products/frete_renner.png&height=475&width=475"
            ],
            "primarySourceImageURL": "/ccstore/v1/images/?source=/file/v3350984041534298874/products/frete_renner.png&height=300&width=300",
            "parentCategory": null,
            "sourceImageURLs": [
                "/ccstore/v1/images/?source=/file/v3350984041534298874/products/frete_renner.png&height=300&width=300"
            ],
            "primarySmallImageURL": "/ccstore/v1/images/?source=/file/v3350984041534298874/products/frete_renner.png&height=300&width=300",
            "avgCustRating": null,
            "longDescription": null,
            "primaryThumbImageURL": "/ccstore/v1/images/?source=/file/v3350984041534298874/products/frete_renner.png&height=100&width=100",
            "nonreturnable": false,
            "displayName": "Frete Grátis Na 1a Compra no Site",
            "description": "Frete Grátis Na 1a Compra no Site",
            "salePrices": {
                "reaisB2C": null,
                "defaultPriceGroup": null
            },
            "primaryFullImageURL": "/ccstore/v1/images/?source=/file/v3350984041534298874/products/frete_renner.png",
            "primaryLargeImageURL": "/ccstore/v1/images/?source=/file/v3350984041534298874/products/frete_renner.png&height=940&width=940",
            "smallImageURLs": [
                "/ccstore/v1/images/?source=/file/v3350984041534298874/products/frete_renner.png&height=300&width=300"
            ],
            "shippingSurcharges": {
                "reaisB2C": null,
                "defaultPriceGroup": null
            },
            "saleVolumePrices": {
                "reaisB2C": null,
                "defaultPriceGroup": null
            },
            "primaryImageTitle": "Frete Grátis Na 1a Compra no Site",
            "saleVolumePrice": null,
            "childSKUs": [],
            "relatedMediaContent": [],
            "salePrice": null,
            "fullImageURLs": [
                "/ccstore/v1/images/?source=/file/v3350984041534298874/products/frete_renner.png"
            ],
            "length": null,
            "variantValuesOrder": {},
            "notForIndividualSale": false,
            "repositoryId": "frete_renner",
            "width": null,
            "shippingSurcharge": null,
            "productImagesMetadata": [
                {}
            ],
            "configurable": false,
            "listPrice": 20.0
        },
        {
            "listVolumePrice": null,
            "excludeFromSitemap": false,
            "relatedProducts": null,
            "orderLimit": null,
            "onlineOnly": false,
            "listPrices": {
                "reaisB2C": 15.0,
                "defaultPriceGroup": 15.0
            },
            "type": null,
            "largeImageURLs": [
                "/ccstore/v1/images/?source=/file/v7490014974543966659/products/youcom.png&height=940&width=940"
            ],
            "listVolumePrices": {
                "reaisB2C": null,
                "defaultPriceGroup": null
            },
            "shippable": true,
            "addOnProducts": [],
            "primaryImageAltText": "10% Em Toda Loja YouCom",
            "id": "youcom",
            "brand": null,
            "parentCategories": [
                {
                    "repositoryId": "ofertas",
                    "fixedParentCategories": [
                        {
                            "repositoryId": "cat10002",
                            "fixedParentCategories": []
                        }
                    ]
                }
            ],
            "height": null,
            "defaultProductListingSku": null,
            "assetable": false,
            "unitOfMeasure": null,
            "primaryMediumImageURL": "/ccstore/v1/images/?source=/file/v7490014974543966659/products/youcom.png&height=475&width=475",
            "seoUrlSlugDerived": "10% Em Toda Loja YouCom",
            "weight": null,
            "active": true,
            "thumbImageURLs": [
                "/ccstore/v1/images/?source=/file/v7490014974543966659/products/youcom.png&height=100&width=100"
            ],
            "creationDate": "2019-09-04T23:09:01.000Z",
            "route": "/10-em-toda-loja-youcom/product/youcom",
            "relatedArticles": [],
            "mediumImageURLs": [
                "/ccstore/v1/images/?source=/file/v7490014974543966659/products/youcom.png&height=475&width=475"
            ],
            "primarySourceImageURL": "/ccstore/v1/images/?source=/file/v7490014974543966659/products/youcom.png&height=300&width=300",
            "parentCategory": null,
            "sourceImageURLs": [
                "/ccstore/v1/images/?source=/file/v7490014974543966659/products/youcom.png&height=300&width=300"
            ],
            "primarySmallImageURL": "/ccstore/v1/images/?source=/file/v7490014974543966659/products/youcom.png&height=300&width=300",
            "avgCustRating": null,
            "longDescription": null,
            "primaryThumbImageURL": "/ccstore/v1/images/?source=/file/v7490014974543966659/products/youcom.png&height=100&width=100",
            "nonreturnable": false,
            "displayName": "10% Em Toda Loja YouCom",
            "description": "10% Em Toda Loja YouCom",
            "salePrices": {
                "reaisB2C": null,
                "defaultPriceGroup": null
            },
            "primaryFullImageURL": "/ccstore/v1/images/?source=/file/v7490014974543966659/products/youcom.png",
            "primaryLargeImageURL": "/ccstore/v1/images/?source=/file/v7490014974543966659/products/youcom.png&height=940&width=940",
            "smallImageURLs": [
                "/ccstore/v1/images/?source=/file/v7490014974543966659/products/youcom.png&height=300&width=300"
            ],
            "shippingSurcharges": {
                "reaisB2C": null,
                "defaultPriceGroup": null
            },
            "saleVolumePrices": {
                "reaisB2C": null,
                "defaultPriceGroup": null
            },
            "primaryImageTitle": "10% Em Toda Loja YouCom",
            "saleVolumePrice": null,
            "childSKUs": [],
            "relatedMediaContent": [],
            "salePrice": null,
            "fullImageURLs": [
                "/ccstore/v1/images/?source=/file/v7490014974543966659/products/youcom.png"
            ],
            "length": null,
            "variantValuesOrder": {},
            "notForIndividualSale": false,
            "repositoryId": "youcom",
            "width": null,
            "shippingSurcharge": null,
            "productImagesMetadata": [
                {}
            ],
            "configurable": false,
            "listPrice": 15.0
        }
    ]
};