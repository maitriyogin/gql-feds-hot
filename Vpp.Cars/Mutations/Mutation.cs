using Vpp.Cars.Models;
using Vpp.Cars.Repositories;

namespace Vpp.Cars.Mutations;

public class Mutation
{
    public Task<Car?> AddCar([Service] CarRepository CarRepository, Car car) => CarRepository.AddCar(car);
    public Task<Car?> UpdateCar([Service] CarRepository CarRepository, Car car) => CarRepository.UpdateCar(car);
}