define({ "api": [
  {
    "type": "socket",
    "url": "\"deleteMessage\"",
    "title": "Delete Message",
    "name": "Delete_Message",
    "group": "Socket",
    "description": "<p>Delete Message</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "userID",
            "description": "<p>User ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "messageID",
            "description": "<p>Message ID</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server/SocketAPI/DeleteMessageActionHandler.js",
    "groupTitle": "Socket"
  },
  {
    "type": "socket",
    "url": "\"login\"",
    "title": "Login to the room",
    "name": "Login_to_room",
    "group": "Socket",
    "description": "<p>Login to room</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "roomID",
            "description": "<p>Room ID</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server/SocketAPI/LoginActionHandler.js",
    "groupTitle": "Socket"
  },
  {
    "type": "socket",
    "url": "\"messageUpdated\"",
    "title": "Message Updated",
    "name": "Message_Updated",
    "group": "Socket",
    "description": "<p>Sent from server when message state is changed</p> ",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    \"messageUpdated\",\n    [\n        {\n            \"_id\": \"55d1f1336b040b99044e97f0\",\n            \"user\": {\n                \"userID\": \"test2\",\n                \"name\": \"test2\",\n                \"avatarURL\": \"http://45.55.81.215:80/img/noavatar.png\",\n                \"token\": \"YMsHeg3KEQIhtvt46W5fgnaf\",\n                \"created\": 1439878824411,\n                \"_id\": \"55d2cea8caf997b543836fb6\",\n                \"__v\": 0\n            },            \"userID\": \"test\",\n            \"roomID\": \"test\",\n            \"message\": \"dd\",\n            \"type\": 1,\n            \"created\": 1439822131327,\n            \"__v\": 0,\n            \"seenBy\": [\n                {\n                    \"user\": {\n                        \"userID\": \"test2\",\n                        \"name\": \"test2\",\n                        \"avatarURL\": \"http://45.55.81.215:80/img/noavatar.png\",\n                        \"token\": \"08WwesxDe1ATtOfre4LAitrS\",\n                        \"created\": 1439878824411,\n                        \"_id\": \"55d2cea8caf997b543836fb6\",\n                        \"__v\": 0\n                    },\n                    \"at\": 1439879208391\n                },\n                {\n                    \"user\": {\n                        \"userID\": \"test3\",\n                        \"name\": \"tset3\",\n                        \"avatarURL\": \"http://45.55.81.215:80/img/noavatar.png\",\n                        \"token\": \"33Tca8hxgfKImWJDscmpQyfv\",\n                        \"created\": 1439878820142,\n                        \"_id\": \"55d2cea4caf997b543836fb4\",\n                        \"__v\": 0\n                    },\n                    \"at\": 1439879208418\n                }\n            ]\n        },\n        {\n            \"_id\": \"55d1f1bb320cb59b04267b58\",\n            \"user\": {\n                \"userID\": \"test2\",\n                \"name\": \"test2\",\n                \"avatarURL\": \"http://45.55.81.215:80/img/noavatar.png\",\n                \"token\": \"YMsHeg3KEQIhtvt46W5fgnaf\",\n                \"created\": 1439878824411,\n                \"_id\": \"55d2cea8caf997b543836fb6\",\n                \"__v\": 0\n            },            \"userID\": \"test2\",\n            \"roomID\": \"test\",\n            \"message\": \"\",\n            \"type\": 1001,\n            \"created\": 1439822267211,\n            \"__v\": 0,\n            \"seenBy\": [\n                {\n                    \"user\": {\n                        \"userID\": \"test2\",\n                        \"name\": \"test2\",\n                        \"avatarURL\": \"http://45.55.81.215:80/img/noavatar.png\",\n                        \"token\": \"08WwesxDe1ATtOfre4LAitrS\",\n                        \"created\": 1439878824411,\n                        \"_id\": \"55d2cea8caf997b543836fb6\",\n                        \"__v\": 0\n                    },\n                    \"at\": 1439879208391\n                },\n                {\n                    \"user\": {\n                        \"userID\": \"test3\",\n                        \"name\": \"tset3\",\n                        \"avatarURL\": \"http://45.55.81.215:80/img/noavatar.png\",\n                        \"token\": \"33Tca8hxgfKImWJDscmpQyfv\",\n                        \"created\": 1439878820142,\n                        \"_id\": \"55d2cea4caf997b543836fb4\",\n                        \"__v\": 0\n                    },\n                    \"at\": 1439879208418\n                }\n            ]\n        }\n        ...\n    ]\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/SocketAPI/OpenMessageActionHandler.js",
    "groupTitle": "Socket"
  },
  {
    "type": "socket",
    "url": "\"openMessage\"",
    "title": "Open Message",
    "name": "Notify_message_is_read",
    "group": "Socket",
    "description": "<p>Called when user read message</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "userID",
            "description": "<p>User ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "messageIDs",
            "description": "<p>Array of message ID</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server/SocketAPI/OpenMessageActionHandler.js",
    "groupTitle": "Socket"
  },
  {
    "type": "socket",
    "url": "\"sendMessage\"",
    "title": "Send New Message",
    "name": "Send_Message",
    "group": "Socket",
    "description": "<p>Send new message by socket</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "roomID",
            "description": "<p>Room ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "userID",
            "description": "<p>User ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>Message Type. 1:Text 2:File 3:Location</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "message",
            "description": "<p>Message if type == 1</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "fileID",
            "description": "<p>File ID if type == 2</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>object</p> ",
            "optional": false,
            "field": "location",
            "description": "<p>lat and lng if type == 3</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server/SocketAPI/SendMessageActionHandler.js",
    "groupTitle": "Socket"
  },
  {
    "type": "socket",
    "url": "\"sendTyping\"",
    "title": "Send typing notification",
    "name": "Typing_Notification",
    "group": "Socket",
    "description": "<p>Send typing notification</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "userID",
            "description": "<p>User ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "roomID",
            "description": "<p>Room ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>0: Remove typing notificaiton 1: Show typing notification</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server/SocketAPI/SendTypingActionHandler.js",
    "groupTitle": "Socket"
  },
  {
    "type": "get",
    "url": "/file/download/:fileID",
    "title": "Download file by fileId",
    "name": "Download_File",
    "group": "WebAPI",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>fileID</p> ",
            "optional": false,
            "field": "fileID",
            "description": "<p>File ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Binary</p> ",
            "optional": false,
            "field": "ResponseBody",
            "description": "<p>Entity of file</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server/WebAPI/FileDownloadHandler.js",
    "groupTitle": "WebAPI"
  },
  {
    "type": "get",
    "url": "/user/list/:roomID",
    "title": "Get List of Users in room",
    "name": "Get_User_List",
    "group": "WebAPI",
    "description": "<p>Get list of users who are currently in the room</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "roomID",
            "description": "<p>ID of the room</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"success\": 1,\n  \"result\": [\n    {\n      \"userID\": \"test\",\n      \"name\": \"test\",\n      \"avatarURL\": \"http://localhost:8080/img/noavatar.png\",\n      \"roomID\": \"test\",\n      \"socketID\": \"Znw8kW-ulKXBMoVAAAAB\"\n    },\n    {\n      \"userID\": \"test2\",\n      \"name\": \"test2\",\n      \"avatarURL\": \"http://localhost:8080/img/noavatar.png\",\n      \"roomID\": \"test\",\n      \"socketID\": \"xIBEwT0swJwjcI2hAAAC\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/WebAPI/UserListHandler.js",
    "groupTitle": "WebAPI"
  },
  {
    "type": "get",
    "url": "/message/list/latest/:roomID/:lastMessageID",
    "title": "Get all latest messages",
    "name": "Get_all_latest_messages",
    "group": "WebAPI",
    "description": "<p>Get all latest message from the room</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "RoomID",
            "description": "<p>ID of room</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "lastMessageID",
            "description": "<p>MessageID of last message</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\n{\n    \"success\": 1,\n    \"result\": [\n        {\n            \"__v\": 0,\n            \"_id\": \"55d2d194caf997b543836fc8\",\n            \"created\": 1439879572232,\n            \"message\": \"\",\n            \"roomID\": \"test\",\n            \"type\": 1001,\n            \"user\": {\n                \"userID\": \"test\",\n                \"name\": \"test\",\n                \"avatarURL\": \"http://45.55.81.215:80/img/noavatar.png\",\n                \"token\": \"UI6yHxeyZnXOZ1EgT6g5ftwD\",\n                \"created\": 1439878817506,\n                \"_id\": \"55d2cea1caf997b543836fb2\",\n                \"__v\": 0\n            },\n            \"userID\": \"test\",\n            \"seenBy\": [\n                {\n                    \"user\": {\n                        \"userID\": \"test2\",\n                        \"name\": \"test2\",\n                        \"avatarURL\": \"http://45.55.81.215:80/img/noavatar.png\",\n                        \"token\": \"YMsHeg3KEQIhtvt46W5fgnaf\",\n                        \"created\": 1439878824411,\n                        \"_id\": \"55d2cea8caf997b543836fb6\",\n                        \"__v\": 0\n                    },\n                    \"at\": 1439879572353\n                },\n                {\n                    \"user\": {\n                        \"userID\": \"test3\",\n                        \"name\": \"tset3\",\n                        \"avatarURL\": \"http://45.55.81.215:80/img/noavatar.png\",\n                        \"token\": \"TahnOaC6JzldCh6gAmJs3jMC\",\n                        \"created\": 1439878820142,\n                        \"_id\": \"55d2cea4caf997b543836fb4\",\n                        \"__v\": 0\n                    },\n                    \"at\": 1439879572361\n                }\n            ]\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/WebAPI/LatestMessageListHandler.js",
    "groupTitle": "WebAPI"
  },
  {
    "type": "get",
    "url": "/message/list/:roomID/:lastMessageID",
    "title": "Get messages sent to room",
    "name": "Get_messages_of_the_room",
    "group": "WebAPI",
    "description": "<p>Get last 50 message from the room</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "RoomID",
            "description": "<p>ID of room</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "lastMessageID",
            "description": "<p>MessageID of last message already shown. To get last 50 message put this param 0</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "Token",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "User",
            "description": "<p>Model of loginned user</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\n{\n    \"success\": 1,\n    \"result\": [\n        {\n            \"__v\": 0,\n            \"_id\": \"55d2d194caf997b543836fc8\",\n            \"created\": 1439879572232,\n            \"message\": \"\",\n            \"roomID\": \"test\",\n            \"type\": 1001,\n            \"user\": {\n                \"userID\": \"test\",\n                \"name\": \"test\",\n                \"avatarURL\": \"http://45.55.81.215:80/img/noavatar.png\",\n                \"token\": \"UI6yHxeyZnXOZ1EgT6g5ftwD\",\n                \"created\": 1439878817506,\n                \"_id\": \"55d2cea1caf997b543836fb2\",\n                \"__v\": 0\n            },\n            \"userID\": \"test\",\n            \"seenBy\": [\n                {\n                    \"user\": {\n                        \"userID\": \"test2\",\n                        \"name\": \"test2\",\n                        \"avatarURL\": \"http://45.55.81.215:80/img/noavatar.png\",\n                        \"token\": \"YMsHeg3KEQIhtvt46W5fgnaf\",\n                        \"created\": 1439878824411,\n                        \"_id\": \"55d2cea8caf997b543836fb6\",\n                        \"__v\": 0\n                    },\n                    \"at\": 1439879572353\n                },\n                {\n                    \"user\": {\n                        \"userID\": \"test3\",\n                        \"name\": \"tset3\",\n                        \"avatarURL\": \"http://45.55.81.215:80/img/noavatar.png\",\n                        \"token\": \"TahnOaC6JzldCh6gAmJs3jMC\",\n                        \"created\": 1439878820142,\n                        \"_id\": \"55d2cea4caf997b543836fb4\",\n                        \"__v\": 0\n                    },\n                    \"at\": 1439879572361\n                }\n            ]\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/WebAPI/MessageListHandler.js",
    "groupTitle": "WebAPI"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Get api token",
    "name": "Login",
    "group": "WebAPI",
    "description": "<p>Login to the room specified in request, and get token for the room.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>name</p> ",
            "optional": false,
            "field": "Users",
            "description": "<p>Name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>avatarURL</p> ",
            "optional": false,
            "field": "URL",
            "description": "<p>of avatar image</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>roomID</p> ",
            "optional": false,
            "field": "Room",
            "description": "<p>Name to login</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>userID</p> ",
            "optional": false,
            "field": "User",
            "description": "<p>'s Unique ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "Token",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "User",
            "description": "<p>Model of loginned user</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"success\": 1,\n  \"result\": {\n    \"token\": \"v3S8mMex95HFJmWm5io5RhgW\",\n    \"user\": {\n      \"_id\": \"55cde8271d8ccb18230fe20f\",\n      \"userID\": \"testuser\",\n      \"name\": \"testuser\",\n      \"avatarURL\": \"http://localhost:8080/img/noavatar.png\",\n      \"token\": \"5pMroCXBQzpxxUElGusLOzXp\",\n      \"created\": 1439557671981,\n      \"__v\": 0\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/WebAPI/LoginHandler.js",
    "groupTitle": "WebAPI"
  },
  {
    "type": "post",
    "url": "/message/sendFile",
    "title": "Send File as Message",
    "name": "Send_File_as_Message",
    "group": "WebAPI",
    "description": "<p>This API is used only by old browsers like IE8</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>File</p> ",
            "optional": false,
            "field": "file",
            "description": "<p>urlencoded multy part field name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "fileID",
            "description": "<p>File ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "userID",
            "description": "<p>File ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>File ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "Token",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "User",
            "description": "<p>Model of loginned user</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"success\": 1,\n  \"result\": 'ok'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/WebAPI/SendFileAsMessageHandler.js",
    "groupTitle": "WebAPI"
  },
  {
    "type": "post",
    "url": "/file/upload",
    "title": "Upload File",
    "name": "Upload_File",
    "group": "WebAPI",
    "description": "<p>Upload file and get file id by response</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>File</p> ",
            "optional": false,
            "field": "file",
            "description": "<p>urlencoded multy part field name</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "Token",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "User",
            "description": "<p>Model of loginned user</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": 1,\n    \"result\": {\n        \"file\": {\n            \"id\": \"55cdeba8a2d0956d24b421df\",\n            \"name\": \"Procijena.xlsx\",\n            \"size\": 493966,\n            \"mimeType\": \"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/WebAPI/FileUploadHandler.js",
    "groupTitle": "WebAPI"
  }
] });