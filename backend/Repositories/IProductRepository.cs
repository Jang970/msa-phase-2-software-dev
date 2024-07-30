using backend.Models;
namespace backend.Repositories
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetAllProductsAsync();
        Task<Product> GetProductByIdAsync(int id);
        Task<IEnumerable<Product>> GetFeaturedProductsAsync();
        Task AddProductAsync(Product product);
        Task UpdateProductAsync(Product product);
        Task DeleteProductAsync(int id);
        Task<bool> ProductExistsAsync(int id);
        Task IncrementViewCountAsync(int id);
        Task UpdateAverageRatingAsync(int id, int rating);
        Task<IEnumerable<Product>> SearchProductsAsync(string query);
    }
}