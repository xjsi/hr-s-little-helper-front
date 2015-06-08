# GET /api/v1/interview/{id}
* Response 200 (application/json)
  * Body
  {
  "id": "1234",
  "description": "a interview for some java dev"
  }

# OPTIONS /api/v1/interview
+ Response 200 (application/json)
     + Headers
     Allow: GET,HEAD,POST,OPTIONS,TRACE
     Access-Control-Allow-Headers: content-type
          
# POST /api/v1/interviewer/
+ Request (application/json)
            {
                "description": "some interview"
            }
+ Response 201 (application/json)
           {
             "id": "1234",
             "description": "a interview for some java dev"
           }
