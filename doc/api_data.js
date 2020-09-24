define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidocjs-template-dark-Slate-Inspiration-/template/main.js",
    "group": "/home/rch/myProject/node/apidocs/apidocjs-template-dark-Slate-Inspiration-/template/main.js",
    "groupTitle": "/home/rch/myProject/node/apidocs/apidocjs-template-dark-Slate-Inspiration-/template/main.js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "/home/rch/myProject/node/apidocs/doc/main.js",
    "groupTitle": "/home/rch/myProject/node/apidocs/doc/main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/checkStatus",
    "title": "4. Check Status Order",
    "version": "0.0.1",
    "name": "checkStatus",
    "group": "Partner",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"no_order\":\"Q9CC41272880\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "paylaod",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://qposandbox.posindonesia.co.id/api/partner/checkStatus"
      }
    ],
    "description": "<p>Digunakan untuk melihat status orde berjalan</p>",
    "filename": "./example.js",
    "groupTitle": "Partner"
  },
  {
    "type": "post",
    "url": "/getRates",
    "title": "3. Get Rates",
    "version": "0.0.1",
    "name": "getRates",
    "group": "Partner",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"city\":\"BANDUNG\",\n\t\"lat\":-6.906932109164927,\n\t\"lon\":107.6173702441156,\n\t\"distance\":7,\n\t\"weight\":1\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "paylaod",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://qposandbox.posindonesia.co.id/api/partner/getRates"
      }
    ],
    "description": "<p>Digunakan untuk mencari tarif sesuai ketentuan PT. Pos Indonesia</p>",
    "filename": "./example.js",
    "groupTitle": "Partner"
  },
  {
    "type": "post",
    "url": "/newClient",
    "title": "1. Create new client",
    "version": "0.0.1",
    "name": "newClient",
    "group": "Partner",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\t\t\t\n\t\"client_id\"        : \"datanya\",\n\t\"client_appkey\"    : \"datanya\",\n\t\"client_name\"      : \"datanya\",\n\t\"auth_user\"        : \"datanya\",\n\t\"auth_pass\"        : \"datanya\",\n\t\"rekgiro\"          : \"datanya\",\n\t\"client_url\"       : \"datanya\",\n\t\"client_port\"      : \"datanya\",\n\t\"client_path\"      : \"datanya\",\n\t\"client_auth_user\" : \"datanya\",\n\t\"client_auth_pass\" : \"datanya\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://qposandbox.posindonesia.co.id/api/partner/newClient"
      }
    ],
    "description": "<p>Digunakan untuk membuat atau menambahkan mitra baru untuk PT. Pos Indonesia</p>",
    "filename": "./example.js",
    "groupTitle": "Partner"
  },
  {
    "type": "post",
    "url": "/postOrder",
    "title": "2. Posting Order",
    "version": "0.0.1",
    "name": "postOrder",
    "group": "Partner",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"dimensi\": \"0,0,0\", \n\t\"nilai_cod\": 0, \n\t\"nilai_kiriman\": 0,\n\t\"order\": {\n\t\t\"code\": \"\", \n\t\t\"tariff\": 10000, \n\t\t\"weight\": \"1\", \n\t\t\"distance\": \"2.9\", \n\t\t\"province\": \"-\", \n\t\t\"id_services\": \"1\", \n\t\t\"information\": \"Dokumen\", \n\t\t\"payment_type\": \"1\"\n\t},\n\t\"source\": {\n\t\t\"lat\": -6.920435022315546, \n\t\t\"lon\": 107.60590212419628, \n\t\t\"name\": \"Depi Darpiyan\", \n\t\t\"phone\": \"085263372137\", \n\t\t\"address\": \"Braga, Kec. Sumur Bandung, KOTA BANDUNG, 40111\", \n\t\t\"instruction\": \"-\", \n\t\t\"address_name\": \"Jl. Asia Afrika No.49\"\n\t},\n\t\"customer\": {\n\t\t\"id\": \"440313849\", \n\t\t\"name\": \"Depi Darpiyan\", \n\t\t\"email\": \"yogaswarabf@gmail.com\", \n\t\t\"phone\": \"085263372137\"\n\t}, \n\t\"destination\": {\n\t\t\"lat\": -6.906932109164927, \n\t\t\"lon\": 107.6173702441156, \n\t\t\"name\": \"Pak Daryana\", \n\t\t\"phone\": \"081321873952\", \n\t\t\"address\": \"Citarum, Kec. Bandung Wetan, KOTA BANDUNG, 40115\", \n\t\t\"instruction\": \"-\", \n\t\t\"address_name\": \"Jl. Banda No.30\"\n\t}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://qposandbox.posindonesia.co.id/api/partner/postOrder"
      }
    ],
    "description": "<p>Digunakan untuk membuat order baru yang ditujukan untuk PT. Pos Indonesia</p>",
    "filename": "./example.js",
    "groupTitle": "Partner"
  }
] });
