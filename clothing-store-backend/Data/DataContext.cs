using clothing_store_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace clothing_store_backend.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<User> Users{ get; set; }
        public DbSet<Product> Products{ get; set; }
    }
}
