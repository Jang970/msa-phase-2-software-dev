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
                await _context.SaveChangesAsync();
            }
            return product;
        }

        public async Task AddProductAsync(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();
        }

    }
}
