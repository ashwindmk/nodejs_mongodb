# Node Js Mongo DB

### Sample Students

```
curl --location --request POST 'http://localhost:3000/api/v1/students/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Alice",
    "email": "alice@gmail.com"
}'

curl --location --request POST 'http://localhost:3000/api/v1/students/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Bob",
    "email": "bob@gmail.com"
}'

curl --location --request POST 'http://localhost:3000/api/v1/students/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Clara",
    "email": "clara@gmail.com"
}'

curl --location --request POST 'http://localhost:3000/api/v1/students/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Dora",
    "email": "dora@gmail.com"
}'
```

### Requests

**1. Get All**
```curl
curl --location --request GET 'http://localhost:3000/api/v1/students/'
```

**2. Get One**
```curl
curl --location --request GET 'http://localhost:3000/api/v1/students/5f674f67740bbe1e23f91f76'
```

**3. Create One**

```curl
curl --location --request POST 'http://localhost:3000/api/v1/students/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Alice",
    "email": "alice@gmail.com"
}'
```

**4. Update One**
```curl
curl --location --request PATCH 'http://localhost:3000/api/v1/students/5f6751282e46091e3bd90c1d' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Demi"
}'
```

**5. Delete One**
```curl
curl --location --request DELETE 'http://localhost:3000/api/v1/students/5f674f67740bbe1e23f91f76'
```
