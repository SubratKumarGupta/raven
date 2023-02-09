# Embeddings Deployment

Full service is not yet available. However, work on some microservices is underway.


## Embeddings Development

Create a python environment

```
python -m venv .venv
source .venv/bin/activate
```

Install requirements

```
pip install -r requirements.txt && pyenv rehash
```

Run app

```
python ./services/microservices/embeddings/main.py
```

Go to the [hosted docs](http://localhost:8088/docs) to try it
or POST
```
curl -X 'POST' \
  'http://localhost:8088/embeddings' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "strings": [
    "test 1",
    "test 2",
    "foo",
    "bawsr"
  ]
}'
```

