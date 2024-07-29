using clothing_store_backend.Models;

namespace clothing_store_backend.Repositories.Abstract
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetAllProductsAsync();
        Task<Product> GetProductByIdAsync(long id);
        Task<IEnumerable<Product>> GetProductsByCategoryAsync(string category);
        Task AddProductAsync(Product product);
        Task<bool> UpdateProductViewsAsync(long id); // To increment the view count
    }
}
