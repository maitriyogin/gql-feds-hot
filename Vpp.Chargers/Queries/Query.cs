using Vpp.Chargers.Models;
using Vpp.Chargers.Repositories;

namespace Vpp.Chargers.Queries;

public class Query
{
    public Task<Charger?> GetCharger([Service] ChargerRepository chargerRepository, string? chargerId) => chargerRepository.GetCharger(chargerId);
    
    public Task<List<Charger>> GetChargers([Service] ChargerRepository chargerRepository) => chargerRepository.GetChargers();
}