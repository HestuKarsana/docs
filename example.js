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
* @apiSampleRequest https://qposandbox.posindonesia.co.id/api/partner/newClient
* @apiDescription Digunakan untuk membuat atau menambahkan mitra baru untuk PT. Pos Indonesia
* @apiParam {Object} payload       
*/

/**
* @api {post} /postOrder 2. Posting Order
* @apiVersion 0.0.1
* @apiName postOrder
* @apiGroup Partner
* @apiPermission public
* @apiParamExample {json} Request-Example:
*		{
*			"dimensi": "0,0,0", 
*			"nilai_cod": 0, 
*			"nilai_kiriman": 0,
*			"order": {
*				"code": "", 
*				"tariff": 10000, 
*				"weight": "1", 
*				"distance": "2.9", 
*				"province": "-", 
*				"id_services": "1", 
*				"information": "Dokumen", 
*				"payment_type": "1"
*			},
*			"source": {
*				"lat": -6.920435022315546, 
*				"lon": 107.60590212419628, 
*				"name": "Depi Darpiyan", 
*				"phone": "085263372137", 
*				"address": "Braga, Kec. Sumur Bandung, KOTA BANDUNG, 40111", 
*				"instruction": "-", 
*				"address_name": "Jl. Asia Afrika No.49"
*			},
*			"customer": {
*				"id": "440313849", 
*				"name": "Depi Darpiyan", 
*				"email": "yogaswarabf@gmail.com", 
*				"phone": "085263372137"
*			}, 
*			"destination": {
*				"lat": -6.906932109164927, 
*				"lon": 107.6173702441156, 
*				"name": "Pak Daryana", 
*				"phone": "081321873952", 
*				"address": "Citarum, Kec. Bandung Wetan, KOTA BANDUNG, 40115", 
*				"instruction": "-", 
*				"address_name": "Jl. Banda No.30"
*			}
*
* @apiSampleRequest https://qposandbox.posindonesia.co.id/api/partner/postOrder
* @apiDescription Digunakan untuk membuat order baru yang ditujukan untuk PT. Pos Indonesia
* @apiParam {Object} payload
*/

/**
* @api {post} /getRates 3. Get Rates 
* @apiVersion 0.0.1
* @apiName getRates
* @apiGroup Partner
* @apiPermission public
* @apiParamExample {json} Request-Example:
* 	{
*		"city":"BANDUNG",
*		"lat":-6.906932109164927,
*		"lon":107.6173702441156,
*		"distance":7,
*		"weight":1
*	}
*
* @apiSampleRequest https://qposandbox.posindonesia.co.id/api/partner/getRates
* @apiDescription Digunakan untuk mencari tarif sesuai ketentuan PT. Pos Indonesia
* @apiParam {Object} paylaod
*/

/**
* @api {post} /checkStatus 4. Check Status Order
* @apiVersion 0.0.1
* @apiName checkStatus
* @apiGroup Partner
* @apiPermission public
* @apiParamExample {json} Request-Example:
*		{
*			"no_order":"Q9CC41272880"
*		}
*
* @apiSampleRequest https://qposandbox.posindonesia.co.id/api/partner/checkStatus
* @apiDescription Digunakan untuk melihat status orde berjalan
* @apiParam {Object} paylaod
*/

