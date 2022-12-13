const axios = require('axios');
const Validator = require('jsonschema').Validator;
const validator = new Validator();
const yummyApiDocumentation = require('../testData/YummyApiDocumentation.v1.json');
const spottApiDocumentation = require('../testData/SpottApiDocumentation.v1.json');
const spottApiDocumentation1 = require('../testData/SpottApiDocumentation1.v1.json');



describe('Api testing Yummly API Documentation', function () {
    test('Check status code feeds/auto-complete', async () => {
        const response = await axios.get('https://yummly2.p.rapidapi.com/feeds/auto-complete', {
            params: {q: 'chicken soup'},
            headers: {
              'X-RapidAPI-Key': 'cacb455102msh7314abc0d81726ap1bfc12jsn99b2b5465058',
              'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
            }
        })
        expect(response.status).toEqual(200);
    });

    test('Check response body feeds/auto-complete', async () => {
        const response = await axios.get('https://yummly2.p.rapidapi.com/feeds/auto-complete', {
            params: {q: 'chicken soup'},
            headers: {
              'X-RapidAPI-Key': 'cacb455102msh7314abc0d81726ap1bfc12jsn99b2b5465058',
              'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
            }
        });
        const result = await validator.validate(response.data, yummyApiDocumentation)
        expect(result.valid).toEqual(true)
    });

    })

describe('Api testing Spott API Documentation', function () {
      test('Check status code', async () => {
          const response = await axios.get('https://spott.p.rapidapi.com/places/autocomplete', {
            params: {limit: '10', skip: '0', country: 'US,CA', q: 'Sea', type: 'CITY'},
            headers: {
              'X-RapidAPI-Key': 'cacb455102msh7314abc0d81726ap1bfc12jsn99b2b5465058',
              'X-RapidAPI-Host': 'spott.p.rapidapi.com'
            }
          });
          expect(response.status).toEqual(200);
    });
  
      test('Check response body', async () => {
          const response = await axios.get('https://spott.p.rapidapi.com/places/autocomplete', {
            params: {limit: '10', skip: '0', country: 'US,CA', q: 'Sea', type: 'CITY'},
            headers: {
              'X-RapidAPI-Key': 'cacb455102msh7314abc0d81726ap1bfc12jsn99b2b5465058',
              'X-RapidAPI-Host': 'spott.p.rapidapi.com'
            }
          });
          const result = await validator.validate(response.data, spottApiDocumentation)
        expect(result.valid).toEqual(true)
    });

      test('Check status code Search places', async () => {
          const response = await axios.get('https://spott.p.rapidapi.com/places', {
            params: {type: 'CITY', skip: '0', country: 'US,CA', limit: '10', q: 'New York'},
            headers: {
              'X-RapidAPI-Key': 'cacb455102msh7314abc0d81726ap1bfc12jsn99b2b5465058',
              'X-RapidAPI-Host': 'spott.p.rapidapi.com'
            }
          });
      expect(response.status).toEqual(200);
    });

      test('Check response body Search places', async () => {
          const response = await axios.get('https://spott.p.rapidapi.com/places', {
            params: {type: 'CITY', skip: '0', country: 'US,CA', limit: '10', q: 'New York'},
            headers: {
              'X-RapidAPI-Key': 'cacb455102msh7314abc0d81726ap1bfc12jsn99b2b5465058',
              'X-RapidAPI-Host': 'spott.p.rapidapi.com'
      }
          });
    const result = await validator.validate(response.data, spottApiDocumentation1)
      expect(result.valid).toEqual(true)
    });

  
})
    