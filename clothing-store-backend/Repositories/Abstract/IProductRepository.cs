using clothing_store_backend.Models;

namespace clothing_store_backend.Repositories.Abstract
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetAllProductsAsync();
        Task<Product> GetProductByIdAsync(long id);
        Task AddProductAsync(Product product);
    }
}
