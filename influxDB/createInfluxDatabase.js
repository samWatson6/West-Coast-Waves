const Influx = require('influx');
// const app =  require('./DBconnection')

const influx = new Influx.InfluxDB({
  host: '127.0.0.1',
  database: 'ocean_tides',
  schema: [
    {
      measurement: 'tide',
      fields: { height: Influx.FieldType.FLOAT },
      tags: ['unit', 'location']
    }
  ]
});


influx.getDatabaseNames()
  .then(names => {
    if (!names.includes('ocean_tides')) {
      return influx.createDatabase('ocean_tides');
    }
  })
  .then(() => {
    // app.listen(app.get('port'), () => {
    //   console.log(`Listening on ${app.get('port')}.`);
    // });
    // writeDataToInflux(hanalei);
    // writeDataToInflux(hilo);
    // writeDataToInflux(honolulu);
    // writeDataToInflux(kahului);
    console.log('Database created');
  })
  .catch(error => console.log({ error }));


