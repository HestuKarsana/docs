/**
* @api {post} /newClient 1. Create new client
* @apiVersion 0.0.1
* @apiName newClient
* @apiGroup Partner
* @apiPermission public
* @apiParamExample {json} Request-Example:
*		{			
			"client_id"        : "datanya",
*			"client_appkey"    : "datanya",
*			"client_name"      : "datanya",
*			"auth_user"        : "datanya",
*			"auth_pass"        : "datanya",
*			"rekgiro"          : "datanya",
*			"client_url"       : "datanya",
*			"client_port"      : "datanya",
*			"client_path"      : "datanya",
*			"client_auth_user" : "datanya",
*			"client_auth_pass" : "datanya"
*		}
*
* @apiSampleRequest https://order.posindonesia.co.id/api/dashboard/partner/newClient
* @apiDescription Digunakan untuk membuat atau menambahkan mitra baru untuk PT. Pos Indonesia
* @apiParam {String} client_id       
* @apiParam {String} client_appkey     
* @apiParam {String} client_name       
* @apiParam {String} auth_user
* @apiParam {String} auth_pass
* @apiParam {Number} rekgiro
* @apiParam {String} client_url
* @apiParam {Number} client_port
* @apiParam {String} client_path
* @apiParam {String} client_auth_user
* @apiParam {String} client_auth_pass
*/

/**
* @api {post} /getUserMobile 1. Find User Detail
* @apiVersion 0.0.1
* @apiName getUserMobile
* @apiGroup Dashboard QPOSin
* @apiPermission private
* @apiParamExample {json} Request-Example:
*		{
*  			"type":"01",
*			"term":"082334226940"
*		}
*
* @apiSampleRequest https://order.posindonesia.co.id/api/dashboard/qposin/getUserMobile
* @apiDescription Digunakan untuk mencari data pelanggan yang terdaftar di Aplikasi QPOsin AJA 
* @apiParam {String} type       
* @apiParam {String} term     
*/

