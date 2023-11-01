using Vpp.Cars.Models;
using Vpp.Cars.Repositories;

namespace Vpp.Cars.Queries;

public class Query
{
    public Task<Car?> GetCar([Service] ICarRepository CarRepository, string id) => CarRepository.GetCar(id);

    public Task<List<Car>> GetCars([Service] ICarRepository CarRepository)
    {
        Console.WriteLine("############# QUERY GETCARS ");
        return CarRepository.GetCars();
    }

    public Task<List<Car>> GetCarsByCharger([Service] ICarRepository CarRepository, string chargerId)
    {
        Console.WriteLine("############# QUERY GETCARSBYCHARGER : " + chargerId);
        return CarRepository.GetCarsByCharger(chargerId);
    }
}