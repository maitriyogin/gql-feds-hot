using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;

namespace Vpp.Chargers.Models;

public class Charger
{
    [BsonId(IdGenerator = typeof(CombGuidGenerator))]
    public Guid? Id { get; set; }
    public string SerialNumber { get; set; }
    public string? Vendor { get; set; }
    public string? ProductName { get; set; }
    public string? Color { get; set; }
    public string? Status { get; set; }
    public string? UserId { get; set; }
}