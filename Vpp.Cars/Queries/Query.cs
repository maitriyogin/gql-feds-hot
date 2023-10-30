using Vpp.Cars.Models;
using Vpp.Cars.Repositories;

namespace Vpp.Cars.Queries;

public class Query
{
    public Task<Car?> GetCar([Service] CarRepository CarRepository, string id) => CarRepository.GetCar(id);

    public Task<List<Car>> GetCars([Service] CarRepository CarRepository)
    {
        Console.WriteLine("############# QUERY GETCARS ");
        return CarRepository.GetCars();
    }

    public Task<List<Car>> GetCarsByCharger([Service] CarRepository CarRepository, string chargerId)
    {
        Console.WriteLine("############# QUERY GETCARSBYCHARGER : " + chargerId);
        return CarRepository.GetCarsByCharger(chargerId);
    }
}