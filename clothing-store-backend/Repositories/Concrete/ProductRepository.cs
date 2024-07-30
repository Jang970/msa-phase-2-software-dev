using clothing_store_backend.Data;
using clothing_store_backend.Models;
using clothing_store_backend.Repositories.Abstract;
using Microsoft.EntityFrameworkCore;

namespace clothing_store_backend.Repositories.Concrete
{
    public class ProductRepository : IProductRepository
    {
        private readonly DataContext _context;

        public ProductRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Product>> GetAllProductsAsync()
        {
            return await _context.Products.ToListAsync();
        }

        public async Task<Product> GetProductByIdAsync(long id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product != null)
            {
                product.Views++;
                await _context.SaveChangesAsync();
            }
            return product;
        }

        public async Task<IEnumerable<Product>> GetProductsByCategoryAsync(string category)
        {
            return await _context.Products
                                 .Where(p => p.Category == category)
                                 .ToListAsync();
        }

        public async Task AddProductAsync(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();
        }

        public async Task<bool> UpdateProductViewsAsync(long id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product != null)
            {
                product.Views++;
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }
    }
}
