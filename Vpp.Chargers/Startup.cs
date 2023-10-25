using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Vpp.Chargers.Mutations;
using Vpp.Chargers.Queries;
using Vpp.Chargers.Repositories;

namespace Vpp.Chargers
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<ChargerRepository>().AddGraphQLServer()
                .AddQueryType<Query>().AddMutationType<Mutation>().InitializeOnStartup()
                // We configure the publish definition
                .PublishSchemaDefinition(c => c
                    // The name of the schema. This name should be unique
                    .SetName("chargers").AddTypeExtensionsFromFile("./Stitching.graphql"));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints => { endpoints.MapGraphQL(); });
        }
    }
}