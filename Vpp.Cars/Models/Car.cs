using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;

namespace Vpp.Cars.Models;

public class Car
{
    [BsonId(IdGenerator = typeof(CombGuidGenerator))]
    public Guid? Id { get; set; }
    public string? RegistrationNumber { get; set; }
    public string? Name { get; set; }
    public string? Vin { get; set; }
    public string? Model { get; set; }
    public string? ModelYear { get; set; }
    public string? UserId { get; set; }
    public string? ChargerId { get; set; }
    public int? BatterySize { get; set; }
}