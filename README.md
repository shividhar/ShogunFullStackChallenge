# Shogun Full Stack Challenge
### Setup
* Clone `https://github.com/shividhar/ShogunFullStackChallenge`
* Install Docker `https://docs.docker.com/engine/installation/`
* Run `docker-composer up` in cloned repo dir
* Client will run on `localhost:3000`

### Notes 
* Handling CSV Processing
  * Pre-process CSV into JSON objects and access that
  * Generate MySQL Schema from the CSV, write script to import data to DB from
    CSV
* Search
  * Look for address word for word
  * Implement some sort of fuzzy search function to make it more user friendly
* Search UI
  * Search field
  * Send button
  * Table to display data
  * Possibly add filters for other fields

