# newsify
Web application for news management


## Users and Reading list (News list) API
### List of Users API routes:
| Route                   | HTTP    | Description                         |
| ----------------------- |:------- | ----------------------------------- |
| `/api/users/`      | GET     | Get news list datany facebook ID    |
| `/api/users/:id`        | DELETE  | Get a single book                   |
| `/api/users/addnews`    | POST    | Add news to user's reading list     |
| `/api/users/removenews` | POST    | Remove news to user's reading list  |

### Endpoint Usage
- GET : `/api/users/` 
This endpoint returns user specific data, dan their news list according to their facebook ID
this function requires:  
  - req.headers.fbid = must be filled with user's facebook ID
  - req.headers.fbName = must be filled with use'rs facebook Name  

  This function will search for user's database, if no user found, it will create a new user using facbook ID and facebook name

- DELETE: `/api/users/:fbid`  
This endpoint allows you to delete user, for testing ad development purpose only
this function requires:  
  - :fbid = facbook ID placed in the params at the end of the endpoint 

- POST: `/api/users/addnews`  
This endpoint allows you to add a news to user's reading list  
this function requires:
  - news Object on req.body, example data acquired with this function:  
{
      source      : req.body.source,
      author      : req.body.author,
      title       : req.body.title,
      description : req.body.description,
      url         : req.body.url,
      urlToImage  : req.body.urlToImage,
      publishedAt : eq.body.publishedAt
    }

- POST: `/api/users/removenews` 
This endpoint allows you to remove a news from user's reading list  
this function requires:
  - news Id on req.body







Access the website via `http://localhost:3000` or API via 