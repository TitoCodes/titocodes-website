# TitoCodes Website

Visit the site here: https://www.titocodes.com

## Description

The home of TitoCodes!

### Technologies used

#### Frontend
 - Vue.js
 - SASS
 - Buefy
 - Vue-router
 - Vue-GTag
 - Vue-Meta
  
#### Backend
 - Node.js
 - Express.js
 - Nodemon
 - Monk
 - Helmet
 - Morgan
 
#### Database
 - MongoDB

#### Infrastracture
 - Kubernetes
 - Docker
 - Minikube
 - NGINX

#### Hosting
 - Azure
  
#### Repositories
 - Docker Hub
 - Github 

#### Others
 - GoogleAnalytics
 - SEO

### CI/CD Process
  After successfully merging any codes in the master branch of this github repo, an automated build will be triggered into the docker hub to build the docker images of the front and the backend images. Once completed, a webhook from azure app will be triggered for the deployment.
