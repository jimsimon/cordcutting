# Deploying to Google Cloud

## Initial Setup/Deployment
1) Install gcloud cli `brew cask install google-cloud-sdk`
2) Install kubectl `gcloud components install kubectl`
   * You may need to update your path or add a symlink for kubectl to work (only need one).  Note that the path you need to use may be different on your machine.
     * Symlink: `sudo ln -s /usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/bin/kubectl /usr/local/bin/kubectl`
     * Path: `export PATH=$PATH:/usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/bin/`
3) Initialize gcloud `gcloud init`
4) Set config `gcloud config set compute/zone us-central1-b`
5) Set project id env var `PROJECT_ID="$(gcloud config get-value project)"`
6) Build docker images
   * UI: `docker build -t gcr.io/${PROJECT_ID}/ui:{git rev-parse HEAD} .`
   * API: `docker build -t gcr.io/${PROJECT_ID}/api:v1 .`
   * DB: `docker build -t gcr.io/${PROJECT_ID}/db:v1 .`
   * Proxy: `docker build -t gcr.io/${PROJECT_ID}/proxy:v1 .`
7) push docker images
8) Create cluster`gcloud container clusters create cordcut-me --num-nodes=3`
9) Create deployments and services
   * Deployment: `kubectl create -f <container>-deployment.yaml`
   * Service: `kubectl create -f <container>-service.yaml`
10) Verify via public ip found using `kubectl get service proxy`

## Pushing a new version
1) Build new image
2) Push new image
3) `kubectl set image <deployment name> <container name>=gcr.io/${PROJECT_ID}/<image>:<version>`

## Scaling up/down
`kubectl scale deployment <container name> --replicas=<# of instances>`
