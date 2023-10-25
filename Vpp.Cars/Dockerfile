FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app

EXPOSE 80 
EXPOSE 443


FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["Vpp.Cars.csproj", "./"]
COPY ["Stitching.graphql", "./"]
RUN dotnet restore "Vpp.Cars.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet build "Vpp.Cars.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Vpp.Cars.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY ["Stitching.graphql", "/app/Stitching.graphql"]
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Vpp.Cars.dll"]
