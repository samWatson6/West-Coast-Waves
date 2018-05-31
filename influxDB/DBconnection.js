const Influx = require('influx');


const influx = new Influx.InfluxDB({
  host: 'localhost',
  database: 'ocean_tides',
  schema: [
    {
      measurement: 'tide',
      fields: { height: Influx.FieldType.FLOAT },
      tags: ['unit', 'location']
    }
  ]
});



module.exports.db = influx;








