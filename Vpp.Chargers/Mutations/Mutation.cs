using Vpp.Chargers.Repositories;
using Vpp.Chargers.Models;

namespace Vpp.Chargers.Mutations;

public class Mutation
{
    public Task<Charger?> AddCharger([Service] ChargerRepository chargerRepository, Charger charger) => chargerRepository.AddCharger(charger);
    public Task<Charger?> UpdateCharger([Service] ChargerRepository chargerRepository,Charger charger) => chargerRepository.UpdateCharger(charger);
}