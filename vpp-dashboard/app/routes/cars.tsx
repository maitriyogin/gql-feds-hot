import { json } from "@remix-run/node";
import {
  Form,
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import vppEnv from '../utils/vpp-env'
export const loader = async () => {
  const results = await fetch(vppEnv.apiUrl, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query: `{
            cars {
                id
                name
            }
            }`,
    }),
  });
  const cars = await results.json();
  console.log("############### CARS", JSON.stringify(cars));
  return json({ cars: cars.data.cars });
};

export default function App() {
  const { cars } = useLoaderData();

  return (
    <div>
      CARSXXX
      {cars.length ? (
        <ul>
          {cars.map((car) => (
            <li key={car.id}>
              <Link to={`cars/${car.id}`}>
                {car.name || car.name ? <>{car.name}</> : <i>No Name</i>}{" "}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          <i>No cars</i>
        </p>
      )}
    </div>
  );
}
