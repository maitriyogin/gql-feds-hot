using MongoDB.Driver;
using MongoDB.Bson;
using Vpp.Chargers.Models;

namespace Vpp.Chargers.Repositories;

public class ChargerRepository
{
    static List<Models.Charger> _cars = new List<Models.Charger>()
    {
        new Charger
        {
            SerialNumber = "123456",
        },
        new Charger
        {
            SerialNumber = "7654321",
        }
    };

    private static string MONGODB_URI = "mongodb://charger-mongo-srv:27017/";
    private MongoClient _client;
    private readonly IMongoCollection<Charger> _collection;

    public ChargerRepository()
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
        _collection = _client.GetDatabase("vpp").GetCollection<Charger>("chargers");

        Console.WriteLine("###### REPO INITIALISED");
        insert();
    }

    private void insert()
    {
        Console.WriteLine("###### REPO INSERT");
        try
        {
            // init collection with Car
            var charger = _collection.Find(c => c.SerialNumber == "123456").FirstOrDefault();
            if (charger == null)
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

    public async Task<List<Charger>> GetChargers()
    {
        var filter = Builders<Charger>.Filter.Empty;
        return await _collection.Find(filter).ToListAsync();
    }

    public async Task<Charger?> GetCharger(string? id)
    {
        var gid = id == null ? Guid.Empty : Guid.Parse(id);
        var filter = Builders<Charger>.Filter
            .Eq(c => c.Id, gid);
        var charger = await _collection.Find(filter
        ).FirstOrDefaultAsync();
        return charger;
    }

    public async Task<Charger?> AddCharger(Charger charger)
    {
        await _collection.InsertOneAsync(charger);
        return charger;
    }

    public async Task<Charger?> UpdateCharger(Charger charger)
    {
        var filter = Builders<Charger>.Filter
            .Eq(c => c.Id, charger.Id);

        var update = Builders<Charger>.Update
            .Set(Charger => Charger, charger);

        await _collection.ReplaceOneAsync(filter, charger);

        return charger;
    }
}