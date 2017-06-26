#!/usr/bin/env sh

docker build -t gcr.io/$(gcloud config get-value project)/api:$(git rev-parse HEAD) ./api
docker build -t gcr.io/$(gcloud config get-value project)/ui:$(git rev-parse HEAD) ./ui

gcloud docker -- push gcr.io/$(gcloud config get-value project)/api:$(git rev-parse HEAD)
gcloud docker -- push gcr.io/$(gcloud config get-value project)/ui:$(git rev-parse HEAD)

kubectl set image deployment/api api=gcr.io/$(gcloud config get-value project)/api:$(git rev-parse HEAD)
kubectl set image deployment/ui ui=gcr.io/$(gcloud config get-value project)/ui:$(git rev-parse HEAD)
