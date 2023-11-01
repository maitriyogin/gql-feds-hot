using Vpp.Cars.Models;

namespace Vpp.Cars.Repositories;

public interface ICarRepository
{

    public  Task<List<Car>> GetCars();

    public  Task<List<Car>> GetCarsByCharger(string chargerId);

    public  Task<Car?> GetCar(string id);

    public  Task<Car?> AddCar(Car car);

    public  Task<Car?> UpdateCar(Car car);
}