# Hello World App

Hello World App on Docker, Nginx & AWS ECS using Terraform

### Docker Compose
1. Clone the repository
2. Run docker-compose up --build -d to start docker conatiners and app. Docker will start 2 node app containers and a nginx container
3. "Hello World" should be available at http://localhost:8080

### AWS Terraform
1. AWS CLI and Terraform should be installed
2. From app/ directory make docker image of the app
docker build -t node_app .
3. Tag and push docker image to AWS ECR or Doker hub and compy the image URI
4. Following are the commands to deploy on AWS ECS
terraform init
terraform plan -var app_count=2 image_uri=<your docker image uri from ECR or docker hub> -out=tfplan
terraform apply "tfplan"
5. Will take some time to deploy resources on AWS. Load balancer url will be shown on the terminal. Put the load balancer url to the web browser to access the "Hello World" app
