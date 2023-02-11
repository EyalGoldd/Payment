# Unipaas

## Running the project
In order to run the project, first have RMQ locally:

`docker-compose up`

## Once you have the RMQ alive, run the following command: 
`nx run-many --parallel --target=serve --projects=payment,email-sender`

## Open the browser and open the following link: 

### http://localhost:3000/api

# Enjoy
