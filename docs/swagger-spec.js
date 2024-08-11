window.swaggerSpec={
  "openapi" : "3.0.1",
  "info" : {
    "title" : "Post Service API",
    "description" : "Post Service API description",
    "version" : "1.0.0"
  },
  "servers" : [ {
    "url" : "http://localhost:8080"
  }, {
    "url" : "http://production-api-server-url.com"
  } ],
  "tags" : [ ],
  "paths" : {
    "/auth/login" : {
      "post" : {
        "tags" : [ "auth" ],
        "operationId" : "1회용 로그인",
        "requestBody" : {
          "content" : {
            "application/json" : {
              "schema" : {
                "$ref" : "#/components/schemas/auth-login-1791602856"
              },
              "examples" : {
                "1회용 로그인" : {
                  "value" : "{\"guestScheduleId\":1,\"nickname\":\"김민우\",\"password\":\"qwer1234\"}"
                }
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "description" : "200",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/auth-login789143772"
                },
                "examples" : {
                  "1회용 로그인" : {
                    "value" : "{\"accessToken\":\"accessToken\",\"guestId\":1,\"nickname\":\"김민우\"}"
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "components" : {
    "schemas" : {
      "auth-login789143772" : {
        "required" : [ "accessToken", "guestId", "nickname" ],
        "type" : "object",
        "properties" : {
          "nickname" : {
            "type" : "string",
            "description" : "닉네임"
          },
          "accessToken" : {
            "type" : "string",
            "description" : "액세스 토큰"
          },
          "guestId" : {
            "type" : "number",
            "description" : "게스트 id"
          }
        }
      },
      "auth-login-1791602856" : {
        "required" : [ "guestScheduleId", "nickname", "password" ],
        "type" : "object",
        "properties" : {
          "password" : {
            "type" : "string",
            "description" : "비밀번호"
          },
          "nickname" : {
            "type" : "string",
            "description" : "닉네임"
          },
          "guestScheduleId" : {
            "type" : "number",
            "description" : "게스트 일정 ID"
          }
        }
      }
    }
  }
}