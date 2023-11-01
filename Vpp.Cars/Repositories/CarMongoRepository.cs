using MongoDB.Driver;
using MongoDB.Bson;
using Vpp.Cars.Models;
namespace Vpp.Cars.Repositories;

public class CarMongoRepository : ICarRepository
{
    public static List<Car> _cars = new List<Car>()
    {
        new Car
        {
            Name= "Hot Rod",
            RegistrationNumber = "SHM96B"
        },
        new Car
        {
            Name= "Red Thunder",
            RegistrationNumber = "RCA936"
        }
    };

    private static string MONGODB_URI = "mongodb://vpp-mongo-srv:27017/";
    private MongoClient _client;
    private readonly IMongoCollection<Car> _collection;

    public CarMongoRepository()
    {
        // var connectionString = Environment.GetEnvironmentVariable("MONGODB_URI");
        Console.WriteLine("###### INIT REPO : " + MONGODB_URI);
        var connectionString = MONGODB_URI;
        if (connectionString == null)
        {
            Console.WriteLine(
                "You must set your 'MONGODB_URI' environment variable. To learn how to set it, see https://www.mongodb.com/docs/drivers/csharp/current/quick-start/#set-your-connection-string");
            Environment.Exit(0);
        }

        _client = new MongoClient(connectionString);
        _collection = _client.GetDatabase("vpp").GetCollection<Car>("cars");
        
        Console.WriteLine("###### REPO INITIALISED");
        insert();
    }

    private void insert()
    {
        
        Console.WriteLine("###### REPO INSERT");
        try
        {
            // init collection with Car
            var car = _collection.Find(c => c.Name == "Hot Rod").FirstOrDefault();
            if (car == null)
            {
                _collection.InsertMany(_cars);
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }

        Console.WriteLine("###### REPO AFTER INSERT");
    }

    public async Task<List<Car>> GetCars()
    {
        Console.WriteLine("############# REPO GETCARS ");
        var filter = Builders<Car>.Filter.Empty;
        var cars = await _collection.Find(filter).ToListAsync();
        Console.WriteLine("###### REPO GETCARS count" + cars.Count);
        return cars;
    }
    
    public async Task<List<Car>> GetCarsByCharger(string chargerId)
    {
        var filter = Builders<Car>.Filter
            .Eq(c => c.ChargerId, chargerId);
        return await _collection.Find(filter).ToListAsync();
    }

    public async Task<Car?> GetCar(string id)
    {
        return await _collection.Find(b => b.Id.Equals(id)).FirstOrDefaultAsync();
    }

    public async Task<Car?> AddCar(Car car)
    {
        await _collection.InsertOneAsync(car);
        return car;
    }

    public async Task<Car?> UpdateCar(Car car)
    {
        var filter = Builders<Car>.Filter
            .Eq(c => c.Id, car.Id);

        var update = Builders<Car>.Update
            .Set(Car => Car, car);

        await _collection.ReplaceOneAsync(filter, car);

        return car;
    }
}