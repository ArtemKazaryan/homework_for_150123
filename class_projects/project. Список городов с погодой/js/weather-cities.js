/* weather-cities.js */
export default class WeatherCities {
    /** @param {array[]} cities */
  
      // my code
      constructor(cities) {
        this.cities = cities
      }

      getFirst() {
        return this.cities[0]
      }

      getLast() {
        return this.cities[this.cities.length-1]
      }

      exportCsv() {
        let citiesTempsCSV = 0;
        const citiesTemps = [];
        for (let i = 0; i < this.cities.length; i++) {
            citiesTemps[i] = this.cities[i].location.name + " " +  this.cities[i].current.temperature
        }
        citiesTempsCSV = citiesTemps.join(", ")
        
        return citiesTempsCSV
      }
  }
  