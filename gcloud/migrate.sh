#!/usr/bin/env sh

CONTAINER="$(kubectl get pods | grep api | cut -d " " -f1)"
kubectl exec -it $CONTAINER -- npm run sequelize db:migrate
