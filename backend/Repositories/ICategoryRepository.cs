using backend.Models;

namespace backend.Repositories
{
    public interface ICategoryRepository
    {
        Task<IEnumerable<Category>> GetAllCategoriesAsync();
        Task<Category> GetCategoryByIdAsync(int id);
        Task<bool> CategoryExistsAsync(int id);
    }
}