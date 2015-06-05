# GET /api/v1/interviewer
+ Response 200 (application/json)
    + Body
          {
              "email":"jichao@thoughtworks.com",
              "name":"jichao ouyang"
           }

# OPTIONS /api/v1/interviewer
+ Response 200 (application/json)
     + Headers
     Allow: GET,HEAD,POST,OPTIONS,TRACE
     Access-Control-Allow-Headers: content-type
          
# POST /api/v1/interviewer
+ Request (application/json)
    + Body
            {
                "email": "oyang",
                "name": "lulu"
            }
+ Response 201 (application/json)
            {
                "email": "hehe@mail.com",
                "name": "chao"
            }
