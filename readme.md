# Hello World App

Hello World App on Docker, Nginx & AWS ECS using Terraform

### Docker Compose
1. Clone the repository
2. To start docker conatiners and app <pre> docker-compose up --build -d </pre> Docker will start 2 node app containers and a nginx container
3. "Hello World" app should be available at http://localhost:8080

### AWS Terraform
1. AWS CLI and Terraform should be installed
2. From app/ directory make docker image of the app
<pre> docker build -t node_app . </pre>
3. Tag and push docker image to AWS ECR or Docker hub and copy the image URI
4. Following are the commands to deploy on AWS ECS
<pre> terraform init </pre>
<pre> terraform plan -var app_count=2 image_uri=< app_docker_image_uri_from_ECR_or_docker_hub > -out=tfplan </pre>
<pre> terraform apply "tfplan" </pre>
5. Will take some time to deploy resources on AWS. Load balancer URL will be shown on the terminal. Put the load balancer URL to the web browser to access the "Hello World" app
