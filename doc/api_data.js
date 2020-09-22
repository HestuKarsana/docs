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
    "filename": "./doc/main.js",
    "group": "/home/rch/myProject/node/apidocs/doc/main.js",
    "groupTitle": "/home/rch/myProject/node/apidocs/doc/main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/getUserMobile",
    "title": "1. Find User Detail",
    "version": "0.0.1",
    "name": "getUserMobile",
    "group": "Dashboard_QPOSin",
    "permission": [
      {
        "name": "private"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\t\t{\n \t\t\t\"type\":\"01\",\n\t\t\t\"term\":\"082334226940\"\n\t\t}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "term",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://order.posindonesia.co.id/api/dashboard/qposin/getUserMobile"
      }
    ],
    "description": "<p>Digunakan untuk mencari data pelanggan yang terdaftar di Aplikasi QPOsin AJA</p>",
    "filename": "./example.js",
    "groupTitle": "Dashboard_QPOSin"
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
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_appkey",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth_pass",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rekgiro",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_url",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_port",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_path",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_auth_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_auth_pass",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://order.posindonesia.co.id/api/dashboard/partner/newClient"
      }
    ],
    "description": "<p>Digunakan untuk membuat atau menambahkan mitra baru untuk PT. Pos Indonesia</p>",
    "filename": "./example.js",
    "groupTitle": "Partner"
  }
] });
