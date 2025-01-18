SERVICES === CONTROLADOR

| CONTROLLERS | SERVICES | LIBS   |
| ----------- | -------- | ------ |
| Routes      | --       | Models |
| Middlewares | --       | --     |

| Devices | Controllers | Use Cases | Entities |
| ------- | ----------- | --------- | -------- |
| Phones  | HTTP        | Services  | DB       |
| Tablets | (POST)      | created() |          |
| Pc      | (DELETE)    | find()    |          |
| Laptop  | (PATCH)     | findOne() |          |
|         |             | delete()  |          |

Request -> (N) Middleware -> Response
