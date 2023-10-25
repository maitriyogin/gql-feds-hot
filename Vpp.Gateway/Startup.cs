using System;
using HotChocolate.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Vpp.Gateway
{
    public class Startup
    {
        public const string Cars = "cars";
        public const string Chargers = "chargers";

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddHttpClient(Cars, c => c.BaseAddress = new Uri("http://car-srv:4001/graphql"));
            services.AddHttpClient(Chargers, c => c.BaseAddress = new Uri("http://charger-srv:4000/graphql"));

            services
                .AddGraphQLServer()
                // only do this if you want to use Queries defined in the Stritching files
                // .AddQueryType(d =>
                // {
                //     d.Name("Query");
                // })
                .AddRemoteSchema(Cars)
                .AddRemoteSchema(Chargers);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGraphQL();
            });
        }
    }
}