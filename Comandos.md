# METODO GET

curl -X GET "http://127.0.0.1:3000/api/v1/products/45" | jq
curl -X GET "http://localhost:3000/api/v1/products/33d635b2-49ea-42c4-a1cd-a4d5bc96eb5c" | jq

# METODO POST

curl -X POST "http://localhost:3000/api/v1/products" \
 -H "Content-Type: application/json" \
 -d "{\"name\": \"Producto Nuevo\", \"price\": 99.99,
\"image\": \"https://loremflickr.com/2056/5?lock=8590674274411018\"}" | jq

curl -X POST "http://localhost:3000/api/v1/products"
-H "Content-Type: application/json"
-d "{\"name\": \"Producto Nuevo\", \"price\": 99,
\"image\": \"https://loremflickr.com/2056/5?lock=8590674274411018\"}" | jq

curl -X POST "http://localhost:3000/api/v1/products"
-H "Content-Type: application/json"
-d "{\"name\": \"Producto Nuevo\" ,\"price\":99,
\"image\":\"https://loremflickr.com/1055/713?lock=5408818459430122\"
}" | jq

# METODO PATCH

curl -X PATCH "http://127.0.0.1:3000/api/v1/products/45" \
 -H "Content-Type: application/json" \
 -d "{\"name\": \"New Product 12\"}" | jq

curl -X PATCH "http://localhost:3000/api/v1/products/33d635b2-49ea-42c4-a1cd-a4d5bc96eb5c"
-H "Content-Type: application/json"
-d "{\"price\": \"7878\"}" | jq

# METODO DELETE

curl -X DELETE "http://127.0.0.1:3000/api/v1/products/7777" | jq
curl -X DELETE "http://127.0.0.1:3000/api/v1/products/1234" | jq

## PRUEBAS

curl -X PATCH "http://127.0.0.1:3000/api/v1/products/ee0edb76-8d62-45b4-a56c-bffe48ead8e0" -H "Content-Type: application/json" -d "{\"price\":0
,\"name\": \"Produ&#\"
}" | jq

,\"image\":\"https://loremflickr.com/1055/713?lock=5408818459430122\"
