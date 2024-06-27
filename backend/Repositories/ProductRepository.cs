using backend.Models;
using backend.Data;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly ApplicationDBContext _context;

        public ProductRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Product>> GetAllProductsAsync()
        {
            return await _context.Products.Include(p => p.Reviews).ToListAsync();
        }

        public async Task<Product> GetProductByIdAsync(int id)
        {
            return await _context.Products.Include(p => p.Reviews).FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<IEnumerable<Product>> GetFeaturedProductsAsync()
        {
            // Assuming that featured products are those with the highest view count and average rating
            return await _context.Products
                .Include(p => p.Reviews)
                .OrderByDescending(p => p.Reviews.Count > 0 ? p.Reviews.Average(r => r.Rating) : 0)
                .ThenByDescending(p => p.ViewCount)
                .Take(10) // Example: top 10 featured products
                .ToListAsync();
        }

        public async Task AddProductAsync(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateProductAsync(Product product)
        {
            _context.Entry(product).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteProductAsync(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product != null)
            {
                _context.Products.Remove(product);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<bool> ProductExistsAsync(int id)
        {
            return await _context.Products.AnyAsync(e => e.Id == id);
        }

        public async Task IncrementViewCountAsync(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product != null)
            {
                product.ViewCount++;
                await _context.SaveChangesAsync();
            }
        }

        public async Task UpdateAverageRatingAsync(int id, int rating)
        {
            var product = await _context.Products.Include(p => p.Reviews).FirstOrDefaultAsync(p => p.Id == id);
            if (product != null)
            {
                var review = new Review
                {
                    ProductId = id,
                    Rating = rating
                };
                product.Reviews.Add(review);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<Product>> SearchProductsAsync(string query)
        {
            return await _context.Products
                .Where(p => p.Name.Contains(query) || p.Description.Contains(query))
                .Include(p => p.Reviews)
                .ToListAsync();
        }
    }
}