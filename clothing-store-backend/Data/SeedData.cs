using clothing_store_backend.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
namespace clothing_store_backend.Data
{
    public static class SeedData
    {
        public static async Task Initialize(DataContext context)
        {
            if (context.Products.Any())
            {
                return;   // DB has been seeded
            }

            var path = Path.Combine(Directory.GetCurrentDirectory(), "Data", "clothes.json");
            var jsonData = File.ReadAllText(path);
            var products = JsonConvert.DeserializeObject<List<Product>>(jsonData);

            // Clear existing data
            context.Database.ExecuteSqlRaw("DELETE FROM Products");
            context.Database.ExecuteSqlRaw("DBCC CHECKIDENT ('Products', RESEED, 0)");

            await context.Products.AddRangeAsync(products);
            await context.SaveChangesAsync();
        }
    }
}
